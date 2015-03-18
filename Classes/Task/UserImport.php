<?php
namespace Bmp\Keolis\Task;

use TYPO3\CMS\Core\Utility\GeneralUtility;

class UserImport extends \TYPO3\CMS\Scheduler\Task\AbstractTask {
	
	/**
	 * pid
	 */
	public $users_pid;
	
	
	/**
	 * csv file
	 */
	public $csv_file;
    
    /**
     * Function executed from the Scheduler.
     *
     * @return	void
     */
    public function execute(){
		
		date_default_timezone_set('Europe/Copenhagen');
		//$this->importfile = PATH_site.'fileadmin/userdata/medarbejder.csv';
		//$this->pid = 1167;
		$GLOBALS['BE_USER']->user['admin'] = 1;
		

		$this->importUserGroups();
		$this->importUsers();
		
		return TRUE;
    }
	
	protected function importUsers(){
	  
		/*@var $GLOBALS['TYPO3_DB'] \TYPO3\CMS\Core\Database\DatabaseConnection */
		$groups = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows('uid,TRIM(title) AS title', 'fe_groups', 'pid='.$this->users_pid.' AND deleted=0',NULL,NULL,NULL,'title');
		$existingusers = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows('uid,TRIM(username) AS username, password, name, first_name, last_name, email, password, date_of_birth_hr, date_of_birth, usergroup, disable', 'fe_users', 'pid='.$this->users_pid.' AND deleted=0',NULL,NULL,NULL,'username');

		$active = array();
		$data = array();
		
		if (($handle = fopen(PATH_site . $this->csv_file, "r")) !== FALSE) {
			
			while (($csvrow = fgetcsv($handle, 1000, ";")) !== FALSE) {

				$usergroup = trim($csvrow[0]);
				$username = trim($csvrow[1]);
				$password = trim($csvrow[4]);
				$firstname = utf8_encode($csvrow[2]);
				$lastname = utf8_encode($csvrow[3]);
				$email = trim($csvrow[6]);
				$birthday = $csvrow[5];
				
				$insertid = isset($existingusers[$username]) ? $existingusers[$username]['uid'] : uniqid('NEW');
				
				$data['fe_users'][$insertid] = array(
					'pid' => $this->users_pid,
					'username' => $username,
					'password' => $password,
					'name' => $firstname . ' ' . $lastname,
					'first_name' => $firstname,
					'last_name' => $lastname,
					'email' => $email,
					'usergroup' => $groups[$usergroup]['uid'],
					'date_of_birth_hr' => $birthday,
					'date_of_birth' => mktime(0,0,0,intval(substr($birthday,2,2)),intval(substr($birthday,0,2))+1,intval(substr($birthday,-2))+1900),
					'disable' => 0
				);

				$active[$username] = $username;
			}
			fclose($handle);
		}

		$inactive = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows('*','fe_users','username NOT IN("'.implode('","',$active).'") AND pid='.$this->users_pid.' AND deleted=0',NULL,NULL,NULL,'uid');

		foreach($inactive as $inactiveuser){
			$data['fe_users'][$inactiveuser['uid']]['disable'] = 1;
		}

		/*@var $tce \TYPO3\CMS\Core\DataHandling\DataHandler */
		$tce = GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\DataHandling\\DataHandler');
		$tce->stripslashes_values = 0;
		$tce->admin = 1;
		$tce->start($data, array());
		$tce->process_datamap();
		
		//print_r($data);
		
		return true;
	}
	
	/**
	 * Import user groups from csv
	 */
	protected function importUserGroups(){
		
		$usergroups = array();
		
		if (($handle = fopen(PATH_site . $this->csv_file, "r")) !== FALSE) {
			
			while (($csvrow = fgetcsv($handle, 1000, ";")) !== FALSE) {
				
				$usergroup = trim($csvrow[0]);
				
				$usergroups[$usergroup] = $usergroup;

			}
		}
		
		if(!empty($usergroups)){

			/*@var $GLOBALS['TYPO3_DB'] \TYPO3\CMS\Core\Database\DatabaseConnection */
			$existinggroups = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows('uid,TRIM(title) AS title', 'fe_groups', 'pid='.$this->users_pid.' AND deleted=0',NULL,NULL,NULL,'title');

			$data = array();
			
			foreach($usergroups as $group){
				
				$insertid = isset($existinggroups[$group]) ? $existinggroups[$group]['uid'] : uniqid('NEW');

				$data['fe_groups'][$insertid] = array(
					'pid' => $this->users_pid,
					'title' => $group
				);
			}
			
			/*@var $tce \TYPO3\CMS\Core\DataHandling\DataHandler */
			$tce = GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\DataHandling\\DataHandler');
			$tce->stripslashes_values = 0;
			$tce->admin = 1;
			$tce->start($data, array());
			$tce->process_datamap();
			
		}
	}
    
}