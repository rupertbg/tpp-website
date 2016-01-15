// Smooth scrolling code

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
});

// Sticky header menu (tablet & desktop)

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('.sticky-navbar').fadeIn(500);
            } else {
                $('.sticky-navbar').fadeOut(500);
            }
        });
    });
})(jQuery);