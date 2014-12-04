config{
    doctype = html5 
 
    htmlTag_stdWrap.cObject = TEXT
    htmlTag_stdWrap.cObject.value(
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
    )
 
    disableBodyTag = 1
    xmlprologue = none
    simulateStaticDocuments = 0
    absRefPrefix = /

    prefixLocalAnchors = all
    tx_realurl_enable = 1

    locale_all = danish
    language = da
    linkVars = L


    disablePrefixComment = 1
    spamProtectEmailAddresses = ascii
    spamProtectEmailAddresses_atSubst = @<span style="display:none">(if you can see this please update your browser)</span>

    #indexing  
    index_enable = 1
    index_externals = 1

    removeDefaultJS = 1

    #cache settings
    cache_period = 86400
    cache_clearAtMidnight = 1
}