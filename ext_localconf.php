<?php
if (!defined ('TYPO3_MODE')) {
    die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:keolis/Configuration/TSconfig/User/config.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:keolis/Configuration/TSconfig/Page/config.ts">');


// Register bulk update task
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['scheduler']['tasks']['Bmp\\Keolis\\Task\\UserImport'] = array(
    'extension' => 'keolis',
    'title' => 'Keolis user import',
    'description' => 'Imports / updates intranet users',
	'additionalFields' => 'Bmp\\Keolis\\Task\\UserImportFieldProvider'
);
