plugin.tx_news {

    settings{

        #cssFile =

        list{
            media{
                image{
                    maxWidth = 168
                    maxHeight = 169
                }
            }
        }

        detail{
            showSocialShareButtons = 0

            media{
                image{
                    maxWidth = 850
                    maxHeight = 400
                }
            }
        }
    }

    view {
        templateRootPaths {
            110 = EXT:keolis/Resources/Private/Templates/
        }
        partialRootPaths {
            110 = EXT:keolis/Resources/Private/Partials/News/
        }
    }

    _LOCAL_LANG.default.dateFormat = %A %d. %B %Y
    _LOCAL_LANG.da.dateFormat = %A %#d. %B %Y
}
