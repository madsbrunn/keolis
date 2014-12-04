<?php

$EM_CONF[$_EXTKEY] = array(
    'title' => 'Keolis',
    'description' => 'This extension provides templates and custom content elements for the keolis website',
    'category' => 'misc',
    'author' => 'Mads Brunn',
    'author_email' => 'mads@brunn.dk',
    'author_company' => 'BRUNN Media Projects',
    'shy' => '',
    'dependencies' => 'cms,extbase,fluidflux,fluidpages,fluidcontent,vhs,css_styled_content,news',
    'conflicts' => '',
    'priority' => '',
    'module' => '',
    'state' => 'alpha',
    'internal' => '',
    'uploadfolder' => 1,
    'createDirs' => '',
    'modify_tables' => '',
    'clearCacheOnLoad' => 1,
    'lockType' => '',
    'version' => '0.1',
    'constraints' => array(
        'depends' => array(
            'typo3' => '6.2.0-6.2.99',
            'cms' => '',
            'extbase' => '',
            'fluid' => '',
            'flux' => '',
            'fluidpages' => '',
            'fluidcontent' => '',
            'vhs' => '',
            'css_styled_content' => '',
            'news' => '',
            'seo_basics'
        ),
        'conflicts' => array(
        ),
        'suggests' => array(
        ),
    ),
    'suggests' => array(
    ),
);