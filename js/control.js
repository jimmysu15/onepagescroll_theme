$('.mainitem a').mouseenter(function () {
    $(this).siblings().hide();
});
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(document).width() <1024) {
        $('.proditem .page_container').click(function () {
            var thisclass = $(this).parent().attr('class');
            if(thisclass == 'proditem prod201510'){}
            else{
                $(this).parent().find('.prodtext').css('zIndex', '99999').fadeIn();
                $(this).parent().find('.pdoverlay, .pdclose').fadeIn();
                $('body , html').css({overflow: 'hidden'});
                // $('body, html').css({overflow: 'hidden', position: 'fixed'});
                //$('.topmenu').fadeIn();
                // $('.toplogo, .nav').hide();
            }
        });
        $('.pdclose').click(function () {
                $(this).fadeOut();
                $(this).parent().parent().find('.pdoverlay, .prodtext').fadeOut();
                $('body , html').css({overflow: 'auto'}); 
                // $('body, html').css({overflow: 'auto', position: 'relative'}); 
        });
        
}
        $('.menutoggle').click(function () {
            $('.topmenu , .marquee').fadeIn();
            $('.menutoggle').fadeOut();
            $('.menuclose').fadeIn();
           // $('header').css('height', '100%');//暫時拿掉
            if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  && $(document).width() <799) {
               // if ($('.topmenu').is(":visible")) $('body, html').css({overflow: 'hidden',position: 'fixed'});//暫時拿掉
                //else $('body, html').css({overflow: 'auto', position: 'relative'}); //暫時拿掉
            }
            else{

            }
        });

        $('.menuclose').click(function () {
            if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  && $(document).width() <799) {
               // if ($('.topmenu').is(":visible")) $('body, html').css({overflow: 'auto',position: 'relative'});
               // else $('body, html').css({overflow: 'hidden', position: 'fixed'}); //暫時拿掉
                //alert('yo');
            }
            else{

            }
            $('.topmenu , .marquee').fadeOut();
            $('.menutoggle').fadeIn();
            $('.menuclose').hide();
            //$('header').css('height', 'auto');//暫時拿掉
            
        });
$(function () {
    //jQuery.scrollDepth();
	$(".newstext").textroll({
        easing: 'easeOutBounce',
        speed: 700,
        delay: 2000
    });
    if ($('.num').html() == 0) $('.num').hide();
    if ($('.num').html() == 0) $('.pcheck').hide();

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('#Table_CartDetails').find('.SelectQuantity').each(function () {
            $(this).attr({ type: 'number', min: 1 });
        });
    }

    $('.switch').click(function() {
	  var tag = $(this).data('tag');
	  ga('send', 'event', 'button', 'click', 'clickmenu');
	 if(tag == "close") {
	 		 //$('body').css({overflow: 'hidden'});
			 $(this).data('tag', 'open');
			 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) $('#header').fadeIn().animate({ 'height': '100%', 'width': '300px' }, 300, 'easeInCirc');
			 else $('#header').fadeIn().animate({ 'width': '300px' }, 300, 'easeInCirc');
			 $('.hamburger').html('×');
			 $('.menuicon').html('Hide');
		 }
	 else {
			 //$('body').css({overflow: 'auto'});
			 $(this).data('tag', 'close');
			 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) $('#header').animate({ 'height': '0px', 'width': '0px' }, 300, 'easeInCirc').fadeOut();
			 else $('#header').animate({ 'width': '0' }, 300, 'easeInCirc').fadeOut();
			 $('.hamburger').html('≡');
			 $('.menuicon').html('Menu');
		 }
	 });

    
});



$('.thumb li').click(function () {
    var prodbig = $(this).children().attr('src');
    $(this).parent().parent().find('.bigprodpic').children().attr({ 'src': prodbig });
});






