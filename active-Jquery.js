$(document).ready(function(){
    $('div[id^=P_]').hide();
    $('#P_index').show();
    $('a[href]').on('click', function(e){
        e.preventDefault();
        $('div[id^=P_]').hide();
        $('#P_'+e.originalEvent.srcElement.attributes.href.value).show();
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