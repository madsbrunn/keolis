lib.menu = HMENU
lib.menu{
    special = directory
    special.value.data = leveluid:0
    special.value.override = {$plugin.tx_keolis.menu_starting_point}

    1 = TMENU
    1{
        wrap = <ul class="nav navbar-nav navbar-left">|</ul>
        expAll = 1

        NO = 1
        NO{
			wrapItemAndSub  = <li class="{$plugin.tx_keolis.main_navigation.item1.class} pdd1">|</li> || <li class="{$plugin.tx_keolis.main_navigation.item2.class} pdd1">|</li> |*| <li class="{$plugin.tx_keolis.main_navigation.item3.class} pdd1">|</li> |*| <li class="{$plugin.tx_keolis.main_navigation.item4.class} pdd1">|</li> || <li class="{$plugin.tx_keolis.main_navigation.item5.class} pdd1">|</li> 
        }

        ACT = 1
        ACT{
			wrapItemAndSub  = <li class="{$plugin.tx_keolis.main_navigation.item2.class} pdd1 active">|</li> || <li class="{$plugin.tx_keolis.main_navigation.item2.class} pdd1 active">|</li> |*| <li class="{$plugin.tx_keolis.main_navigation.item3.class} pdd1 active">|</li> |*| <li class="{$plugin.tx_keolis.main_navigation.item4.class} pdd1 active">|</li> || <li class="{$plugin.tx_keolis.main_navigation.item5.class} pdd1 active">|</li> 

        }

        IFSUB = 1
        IFSUB{
			wrapItemAndSub  = <li class="{$plugin.tx_keolis.main_navigation.item1.class} dropdown pdd1">|</li> || <li class="{$plugin.tx_keolis.main_navigation.item2.class} dropdown pdd1">|</li> |*| <li class="{$plugin.tx_keolis.main_navigation.item3.class} dropdown pdd1">|</li> |*| <li class="{$plugin.tx_keolis.main_navigation.item4.class} dropdown pdd1">|</li> || <li class="{$plugin.tx_keolis.main_navigation.item5.class} dropdown pdd1">|</li> 
            ATagParams = class="dropdown-toggle disabled" data-toggle="dropdown"
        }

        ACTIFSUB = 1
        ACTIFSUB{
			wrapItemAndSub  = <li class="{$plugin.tx_keolis.main_navigation.item1.class} dropdown pdd1 active">|</li> || <li class="{$plugin.tx_keolis.main_navigation.item2.class} dropdown pdd1 active">|</li> |*| <li class="{$plugin.tx_keolis.main_navigation.item3.class} dropdown pdd1 active">|</li> |*| <li class="{$plugin.tx_keolis.main_navigation.item4.class} dropdown pdd1 active">|</li> || <li class="{$plugin.tx_keolis.main_navigation.item5.class} dropdown pdd1 active">|</li> 
            ATagParams = class="dropdown-toggle disabled" data-toggle="dropdown"
        }

    }

    2 = TMENU
    2{
        wrap = <ul class="dropdown-menu navOneMenu" role="menu">|</ul> 
        
        NO = 1
        NO{
            wrapItemAndSub = <li class="first">|</li>|*|<li>|</li>
        }
    }
}

lib.sitemap = HMENU
lib.sitemap{

    wrap = <div class="siteMap hideMob"><div class="container"><div class="col-md-5 col-sm-5">|</div></div></div>
    
    special = directory
    special.value.data = leveluid:0
    special.value.override = {$plugin.tx_keolis.menu_starting_point}

    1 = TMENU
    1{
        expAll = 1

        NO = 1
        NO{
            allWrap = <h3>|</h3>
            wrapItemAndSub = <div class="mapUnit pull-left">|</div>
        }
    }

    2 = TMENU
    2{
        wrap = <ul>|</ul>

        NO = 1
        NO{
            allWrap = <li>|</li>
        }
    }
}


lib.shortcuts = COA
lib.shortcuts{

    10 = HMENU
    10{
        special = list
        special.value.current = 1

        includeNotInMenu = 1

        maxItems = 2

        1 = TMENU
        1{
            wrap = <div class="navUnit pull-left"><ul>|</ul></div>

            NO = 1
            NO{
                allWrap = <li>|</li>
            }
        }
    }

    20 < .10
    20.begin = 3

    30 < .10
    30.begin = 5

}


lib.breadcrumb = COA
lib.breadcrumb{
    wrap = <ol class="breadcrumb pull-left hidden-xs"><li class="first">Du er her:</li>|</ol>


    10 = HMENU
    10{
        special = rootline

        1 = TMENU
        1{

            NO = 1
            NO{
                allWrap = <li>|</li>
            }
        }
    }

    20 = RECORDS
    20 {
        stdWrap.if.isTrue.data = GP:tx_news_pi1|news
        dontCheckPid = 1
        tables = tx_news_domain_model_news
        source.data = GP:tx_news_pi1|news
        source.intval = 1
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news {
            field = title
            htmlSpecialChars = 1
        }
        wrap =  <li>|</li>
    }
}

lib.parsedText = TEXT
lib.parsedText{
    current = 1
    parseFunc =< lib.parseFunc
}

lib.responsiveImage = IMAGE
lib.responsiveImage{
    file{
        import.current = 1
        treatIdAsReference = 1
        width.field = width
        height.field = height
    }
    layoutKey = default
    layout.default.element = <img src="###SRC###" ###PARAMS######ALTPARAMS######BORDER######SELFCLOSINGTAGSLASH###>
    params = class="img-responsive"
}


lib.parseFunc_News < lib.parseFunc_RTE
lib.parseFunc_News.externalBlocks := addToList(h3)
lib.parseFunc_News.externalBlocks.h3.stripNL = 1
lib.parseFunc_News.externalBlocks.h3.stdWrap.HTMLparser = 1
lib.parseFunc_News.externalBlocks.h3.stdWrap.HTMLparser.tags.h3.remap = h2

lib.splitTitle = TEXT
lib.splitTitle{
    current = 1
    split{
        token.field = splitToken
        token.ifEmpty = :
        max = 2
        cObjNum = 1 |*| 2

        1 = TEXT
        1.current = 1
        1.innerWrap.field = wrapFirstPart

        2 = TEXT
        2.current = 1
        2.innerWrap.field = wrapSecondPart
    }
}


lib.splitText = TEXT
lib.splitText{
    current = 1
    parseFunc < lib.parseFunc
    split{
        token.char = 10

        cObjNum = 1 |*| 2 |*| 3

        1 = TEXT
        1.current = 1
        1.innerWrap.field = line1Wrap

        2 = TEXT
        2.current = 1
        2.innerWrap.field = line2Wrap

        3 = TEXT
        3.current = 1
        3.innerWrap.field = line3Wrap
    }
}






lib.linkText = TEXT
lib.linkText{
    current = 1
    typolink.parameter.field = parameter
}


lib.linkUrl = TEXT
lib.linkUrl{
    
}

lib.logoutbtn = COA
lib.logoutbtn{

    10 = TEXT
    10.value = &nbsp;
    10.typolink.parameter.current = 1
    10.wrap = <div class="searchBtn logInBtn hidden-xs">|</div>

}


lib.newsItem = COA
lib.newsItem{

    5 = LOAD_REGISTER
    5.layout.field = layout

    10 = CONTENT
    10{
        select{
            pidInList = {$plugin.tx_keolis.news_storage_pid}
            orderBy = datetime DESC
            begin.field = offset
            begin.ifEmpty = 0
            max = 1
        }
        table = tx_news_domain_model_news
        renderObj = COA
        renderObj{

            10 = CASE
            10.key.data = register:layout
            10.layout1 = COA
            10.layout1{

                wrap = <div class="newsArea clearfix">|</div>

                10 = COA
                10{

                    stdWrap.typolink{
                        parameter = {$plugin.tx_keolis.news_detail_pid}
                        additionalParams = &tx_news_pi1[news]={field:uid}&tx_news_pi1[controller]=News&tx_news_pi1[action]=detail
                        additionalParams.insertData = 1
                        useCacheHash = 1
                    }
                    stdWrap.wrap = <div class="newsItem"><div class="mobilePadding"><p>|</p></div></div>


                    10 = TEXT
                    10.field = datetime
                    10.date = d.m.Y
                    10.wrap = <b>|</b><br />

                    20 = TEXT
                    20.field = title
                }

                20 = COA
                20{
                    wrap = <div class="newsItem ">|</div>

                    5 = FILES
                    5.references{
                        uid.field = uid
                        table = tx_news_domain_model_news
                        fieldName = fal_media
                    }
                    5.maxItems = 1
                    5.renderObj = IMG_RESOURCE
                    5.renderObj{
                        file{
                            import.data = file:current:publicUrl
                            width = 134
                        }
                        stdWrap.wrap = <div class="newsImg mallImg right" style="background-image:url(|);">&nbsp;</div>
                    }
                }
            }

            10.layout2 = COA
            10.layout2{

                5 = FILES
                5{

                    references{
                        uid.field = uid
                        table = tx_news_domain_model_news
                        fieldName = fal_media
                    }
                    maxItems = 1
                    renderObj = IMG_RESOURCE
                    renderObj{
                        file{
                            import.data = file:current:publicUrl
                            width = 134
                        }
                        stdWrap.wrap = <div class="newsItem visibleDesktop"><div class="newsImg" style="background-image:url(/|);">&nbsp;</div></div>
                    }
                }

                10 = COA
                10{
                    wrap = <div class="newsItem"><div>|</div></div>

                    10 = TEXT
                    10.field = title
                    10.typolink{
                        parameter = {$plugin.tx_keolis.news_detail_pid}
                        additionalParams = &tx_news_pi1[news]={field:uid}&tx_news_pi1[controller]=News&tx_news_pi1[action]=detail
                        additionalParams.insertData = 1
                        useCacheHash = 1
                    }
                    10.wrap = <h3>|</h3>

                    20 = TEXT
                    20.field = teaser
                    20.crop = 70 | ...
                    20.wrap = <p>|</p>
                }
            }

            10.default = COA
            10.default{

                5 = FILES
                5.references{
                    uid.field = uid
                    table = tx_news_domain_model_news
                    fieldName = fal_media
                }
                5.renderObj = IMAGE
                5.renderObj.file{
                    import.data = file:current:publicUrl
                    width = 80
                }

                10 = TEXT
                10.field = title
                10.typolink{
                    parameter = {$plugin.tx_keolis.news_detail_pid}
                    additionalParams = &tx_news_pi1[news]={field:uid}&tx_news_pi1[controller]=News&tx_news_pi1[action]=detail
                    additionalParams.insertData = 1
                    useCacheHash = 1
                }
                10.wrap = <br />
            }
        }
    }

    15 = RESTORE_REGISTER
}




lib.loginstatus = TEXT
lib.loginstatus.value = 


[loginUser = *]
lib.logoutbtn = COA_INT
lib.logoutbtn.10.typolink.ATagParams = class="logged"


lib.loginstatus >
lib.loginstatus = COA_INT
lib.loginstatus{

    wrap = <div class="headerDropp loginDropp hidden-xs">|</div>

    10 = TEXT
    10{
        value(
        <form method="post">
            <input type="hidden" name="logintype" value="logout" />
            <div class="clearfix">
                <p>Du er logget ind som {TSFE:fe_user|user|name} ({TSFE:fe_user|user|username})</p>
                <input type="submit"  class="btn btn-rechercher col-md-1  pull-right" value="Log ud">
            </div>
        </form>
        )
        addParams{
            action = 1
            action.typolink.parameter = {$plugin.tx_keolis.login_pid}
            action.typolink.returnLast = url
        }
        insertData = 1
    }
}




[global]