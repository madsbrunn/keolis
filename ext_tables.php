<?php
if (!defined ('TYPO3_MODE')) {
    die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Keolis: templates for the keolis.dk website');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Intranet', 'Keolis: additional settings for the intranet');
\FluidTYPO3\Flux\Core::registerProviderExtensionKey($_EXTKEY, 'Page');
\FluidTYPO3\Flux\Core::registerProviderExtensionKey($_EXTKEY, 'Content');