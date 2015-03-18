additional_docready = function(){
    
    $('#print').on('click',function(){
        window.print();
        
    });
    
    
    $.cookiesDirective({
        privacyPolicyUri: 'http://keolis.dk/cookiepolitik/',
        position: 'bottom',
        explicitConsent: false,
        linkColor: '#0077a8'
    });
};