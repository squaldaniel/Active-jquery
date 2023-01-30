$(document).ready(function(){
    $('div[id^=P_]').hide();
    $('#P_index').show();
    $('a[href]').on('click', function(e){
        e.preventDefault();
        $('div[id^=P_]').hide();
        let url = e.originalEvent.srcElement.attributes.href.value;
        $('#P_'+url).show();
        window.pushState = url;
        location.href.replace("/(.*?)/", url);
            console.log(url);
        //console.log(window.history);
        //window.location.href = url;
        //window.history.replaceState(null,null, url);
        //history.pushState(null, null);
        //window.history.pushState({}, null ,url);
        

        //window.location.href.value = e.originalEvent.srcElement.attributes.href.value;
        //$('#'+window.location.href.value).hide();
        
        //window.location = e.originalEvent.srcElement.attributes.href.value;
        //console.log(location.history);
        //console.log(e.originalEvent);
        //console.log(window.location);
        //return false;
    });
    //var route = window.location.href
});
