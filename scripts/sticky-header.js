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