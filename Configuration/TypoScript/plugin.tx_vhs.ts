plugin.tx_vhs{
    settings{
        asset {
            styles {
                name = styles
                path = EXT:keolis/Resources/Public/css/bootstrap.min.css
            }

            additional{
                name = additional
                path = EXT:keolis/Resources/Public/additional.css
                dependencies = styles
            }

            modernizr {
                name = modernizr
                path = EXT:keolis/Resources/Public/js/modernizr-2.6.2.min.js
                movable = 0
                standalone = 1
            }

            respond {
                name = respond
                path = EXT:keolis/Resources/Public/js/respond.min.js
                movable = 0
                standalone = 1
            }

            jquery {
                name = jquery
                path = EXT:keolis/Resources/Public/js/jquery.min.js
            }

            bootstrap {
                name = bootstrap
                dependencies = jquery
                path = EXT:keolis/Resources/Public/js/bootstrap.min.js
            }

            plugins {
                name = plugins
                dependencies = jquery
                path = EXT:keolis/Resources/Public/js/plugins.js
            }

            custom {
                name = custom
                dependencies = jquery
                path = EXT:keolis/Resources/Public/js/customJS.js
            }
        }
    }
}