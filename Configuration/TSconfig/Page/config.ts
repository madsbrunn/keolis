TCAdefaults.tt_content.section_frame = 66

TCEFORM.pages.lastUpdated.disabled = 1
TCEFORM.pages.author.disabled = 1
TCEFORM.pages.author_email.disabled = 1
TCEFORM.pages.categories.disabled = 1
TCEFORM.pages.editlock.disabled = 1
TCEFORM.pages.fe_login_mode.disabled = 1
TCEFORM.pages.layout.disabled = 1
TCEFORM.pages.newUntil.disabled = 1
TCEFORM.pages.no_cache.disabled = 1
TCEFORM.pages.php_tree_stop.disabled = 1
TCEFORM.pages.cache_tags.disabled = 1
TCEFORM.pages.cache_timeout.disabled = 1
TCEFORM.pages.l18n_cfg.disabled = 1
TCEFORM.pages.media.disabled = 1
TCEFORM.pages.content_from_pid.disabled = 1

TCEFORM.tt_content.categories.disabled = 1
TCEFORM.tt_content.category_field.disabled = 1
TCEFORM.tt_content.date.disabled = 1
TCEFORM.tt_content.header_position.disabled = 1
TCEFORM.tt_content.header_link.disabled = 1
TCEFORM.tt_content.sys_language_uid.disabled = 1
TCEFORM.tt_content.sys_language_uid.disabled = 1
TCEFORM.tt_content.layout.disabled = 1

TCEFORM.tt_content.sectionIndex.disabled = 1
TCEFORM.tt_content.linkToTop.disabled = 1

TCEFORM.tt_content.header_layout {
	
	addItems.99 = Layout 2 (alt.)
}


[treeLevel = 1]

TCEFORM.pages.is_siteroot.disabled = 0
TCEFORM.pages.backend_layout.disabled = 0
TCEFORM.pages.backend_layout_next_level.disabled = 0
TCEFORM.pages.storage_pid.disabled = 0
TCEFORM.pages.TSconfig.disabled = 0


[else]

TCEFORM.pages.is_siteroot.disabled = 1
TCEFORM.pages.backend_layout.disabled = 1
TCEFORM.pages.backend_layout_next_level.disabled = 1
TCEFORM.pages.storage_pid.disabled = 1
TCEFORM.pages.TSconfig.disabled = 0


[global]

[adminUser = 1]

TCEFORM.pages.tx_realurl_pathoverride.disabled = 0
TCEFORM.pages.tx_realurl_pathsegment.disabled = 0
TCEFORM.pages.tx_realurl_exclude.disabled = 0
TCEFORM.pages.tx_realurl_nocache.disabled = 0

[else]

TCEFORM.pages.tx_realurl_pathoverride.disabled = 1
TCEFORM.pages.tx_realurl_pathsegment.disabled = 1
TCEFORM.pages.tx_realurl_exclude.disabled = 1
TCEFORM.pages.tx_realurl_nocache.disabled = 1

[global]


tx_news.templateLayouts {
    50 = Seneste nyt
	51 = Slider
	52 = Liste med billeder
	53 = Liste uden billeder
	54 = Kort liste
}


RTE.default.FE >
RTE.config >
RTE.default.enableWordClean = 1
RTE.default.ignoreMainStyleOverride = 1
RTE.default.useCss = 1
RTE.default.contentCSS = typo3conf/ext/keolis/Resources/Public/css/rte.css
RTE.default.showTagFreeClasses = 1
RTE.default.showButtons = bold,italic,underline,orderedlist,unorderedlist,link,unlink,table,textstylelabel,textstyle,blockstylelabel,blockstyle,formatblock,pastetoggle,pastebehaviour,pasteastext,editelement,insertcharacter,chMode
RTE.default.buttons.textstyle.tags.span.allowedClasses := addToList( proximaLight, h1, h2, h3, h4, h5, h6 )
RTE.default.buttons.textstyle.showTagFreeClasses = 1
RTE.default.buttons.blockstyle.showTagFreeClasses = 1
RTE.default.buttons.pastetoggle.setActiveOnRteOpen = 1
RTE.default.buttons.pastetoggle.hidden = 1
RTE.default.proc.allowedClasses := addToList( proximaLight, h1, h2,h3,h4,h5,h6)
RTE.classes{
    proximaLight{
        name = Proxima Light
    }
    h1{
        name = Heading 1
    }
    h2{
        name = Heading 2
    }
    h3{
        name = Heading 3
    }
    h4{
        name = Heading 4
    }
    h5{
        name = Heading 5
    }
    h6{
        name = Heading 6
    }
}
RTE.config.pages.tx_fed_page_flexform.RTEHeightOverride = 200
RTE.config.pages.tx_fed_page_flexform.RTEWidthOverride = 400