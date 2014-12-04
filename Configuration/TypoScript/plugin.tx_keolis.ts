plugin.tx_keolis{

    view {
        templateRootPath = EXT:keolis/Resources/Private/Templates/
        partialRootPath = EXT:keolis/Resources/Private/Partials/
        layoutRootPath = EXT:keolis/Resources/Private/Layouts/
    }

    settings{

        linkedin_url = {$plugin.tx_keolis.linkedin_url}
        twitter_url = {$plugin.tx_keolis.twitter_url}
        facebook_url = {$plugin.tx_keolis.facebook_url}
        shortcut_pages = {$plugin.tx_keolis.shortcut_pages}
        login_pid = {$plugin.tx_keolis.login_pid}
        search_pid = {$plugin.tx_keolis.search_pid} 
        google_analytics_id = {$plugin.tx_keolis.google_analytics_id} 
        defaultBannerText = <p><span>97%</span><br>des voyageurs satisfaits <br>et très satisfaits du réseau*</p>

    }
}