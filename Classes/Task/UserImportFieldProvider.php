<?php
namespace Bmp\Keolis\Task;

class UserImportFieldProvider implements \TYPO3\CMS\Scheduler\AdditionalFieldProviderInterface{
	
	/**
	 * Gets additional fields to render in the form to add/edit a task
	 *
	 * @param array $taskInfo Values of the fields from the add/edit task form
	 * @param \TYPO3\CMS\Scheduler\Task\AbstractTask $task The task object being edited. Null when adding a task!
	 * @param \TYPO3\CMS\Scheduler\Controller\SchedulerModuleController $schedulerModule Reference to the scheduler backend module
	 * @return array A two dimensional array, array('Identifier' => array('fieldId' => array('code' => '', 'label' => '', 'cshKey' => '', 'cshLabel' => ''))
	 */
	public function getAdditionalFields(array &$taskInfo, $task, \TYPO3\CMS\Scheduler\Controller\SchedulerModuleController $schedulerModule){

		$additionalFields = array();
		
		// Initialize users pid field
		if (empty($taskInfo['users_pid'])) {
			if ($schedulerModule->CMD == 'add') {
				// In case of new task and if field is empty, set default email address
				$taskInfo['users_pid'] = '';
			} elseif ($schedulerModule->CMD == 'edit') {
				// In case of edit, and editing a test task, set to internal value if not data was submitted already
				$taskInfo['users_pid'] = $task->users_pid;
			} else {
				// Otherwise set an empty value, as it will not be used anyway
				$taskInfo['users_pid'] = '';
			}
		}
		// Write the code for the field
		$fieldID = 'task_users_pid';
		$fieldCode = '<input type="text" name="tx_scheduler[users_pid]" id="' . $fieldID . '" value="' . htmlspecialchars($taskInfo['users_pid']) . '" size="5" />';
		$additionalFields[$fieldID] = array(
			'code' => $fieldCode,
			'label' => 'LLL:EXT:keolis/Resources/Private/Language/locallang.xlf:label.users_pid',
			'cshKey' => '_MOD_system_txschedulerM1',
			'cshLabel' => $fieldID
		);
		

		if (empty($taskInfo['csv_file'])) {
			if ($schedulerModule->CMD == 'add') {
				// In case of new task and if field is empty, set default email address
				$taskInfo['csv_file'] = '';
			} elseif ($schedulerModule->CMD == 'edit') {
				// In case of edit, and editing a test task, set to internal value if not data was submitted already
				$taskInfo['csv_file'] = $task->csv_file;
			} else {
				// Otherwise set an empty value, as it will not be used anyway
				$taskInfo['csv_file'] = '';
			}
		}
		// Write the code for the field
		$fieldID = 'task_csv_file';
		$fieldCode = '<input type="text" name="tx_scheduler[csv_file]" id="' . $fieldID . '" value="' . htmlspecialchars($taskInfo['csv_file']) . '" size="30" />';
		$additionalFields[$fieldID] = array(
			'code' => $fieldCode,
			'label' => 'LLL:EXT:keolis/Resources/Private/Language/locallang.xlf:label.csv_file',
			'cshKey' => '_MOD_system_txschedulerM1',
			'cshLabel' => $fieldID
		);
		
		return $additionalFields;
		
		
	}

	/**
	 * Validates the additional fields' values
	 *
	 * @param array $submittedData An array containing the data submitted by the add/edit task form
	 * @param \TYPO3\CMS\Scheduler\Controller\SchedulerModuleController $schedulerModule Reference to the scheduler backend module
	 * @return boolean TRUE if validation was ok (or selected class is not relevant), FALSE otherwise
	 */
	public function validateAdditionalFields(array &$submittedData, \TYPO3\CMS\Scheduler\Controller\SchedulerModuleController $schedulerModule){
		
		$submittedData['users_pid'] = trim($submittedData['users_pid']);
		if (empty($submittedData['users_pid'])) {
			$schedulerModule->addMessage('Please enter the page id where users should be stored', \TYPO3\CMS\Core\Messaging\FlashMessage::ERROR);
			$result = FALSE;
		} elseif(!\TYPO3\CMS\Core\Utility\MathUtility::canBeInterpretedAsInteger($submittedData['users_pid'])){
			$parentObject->addMessage('Page id should be an integer', \TYPO3\CMS\Core\Messaging\FlashMessage::ERROR);
			$result = FALSE;
			
		} else {
			$result = TRUE;
		}
		
		$submittedData['csv_file'] = trim($submittedData['csv_file']);
		if (empty($submittedData['csv_file'])) {
			$schedulerModule->addMessage('Please enter the (relative) path to the csv-file containing the users to import', \TYPO3\CMS\Core\Messaging\FlashMessage::ERROR);
			$result = FALSE;
		} elseif(!is_file(PATH_site . $submittedData['csv_file'])){
			$parentObject->addMessage('The csv-file does not exist', \TYPO3\CMS\Core\Messaging\FlashMessage::ERROR);
			$result = FALSE;
			
		} else {
			$result = TRUE;
		}
		
		return $result;		
	}

	/**
	 * Takes care of saving the additional fields' values in the task's object
	 *
	 * @param array $submittedData An array containing the data submitted by the add/edit task form
	 * @param \TYPO3\CMS\Scheduler\Task\AbstractTask $task Reference to the scheduler backend module
	 * @return void
	 */
	public function saveAdditionalFields(array $submittedData, \TYPO3\CMS\Scheduler\Task\AbstractTask $task){
		$task->users_pid = $submittedData['users_pid'];
		$task->csv_file = $submittedData['csv_file'];
		
	}
	
}