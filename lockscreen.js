$(document).ready(function(){
    $('.num').on('touchstart',function(){
        var $elem = $(this);
        var num = $elem.attr('value');
        $('circle').eq(num).attr('class', 'trans');
        $elem.removeClass('opaque').addClass('trans');
        setTimeout(function(){
        	$('circle').eq(num).attr('class', 'opaque');
        	$elem.removeClass('trans').addClass('opaque');
        },10000);
    }).on('touchend',function(){
    	var num = $(this).attr('value');
        $('circle').eq(num).attr('class', 'opaque');
        $(this).removeClass('trans').addClass('opaque');
    });
    /*$('.num').on('touchstart',function(){
        var $elem = $(this);
        $elem.addClass('colored');
        setTimeout(function(){
            $elem.removeClass('colored');
        },1000);
    }).on('touchend',function(){
        $(this).removeClass('colored');
    });*/
});