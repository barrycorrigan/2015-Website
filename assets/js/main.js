$(document).ready(function() {

    jQuery('.skill').each(function(){
        jQuery(this).find('.bar').animate({
            width:jQuery(this).attr('data-percent')
        },2000);
    });


});