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

if (document.documentElement.clientWidth > 640) {
		(function($) {          
    	$(document).ready(function(){                    
  	      $(window).scroll(function(){                          
	            if ($(this).scrollTop() > 200) {
            	    $('.sticky-nav').fadeIn(500);
          	  } else {
        	        $('.sticky-nav').fadeOut(500);
      	      }
    	    });
  	  });
	})(jQuery);
}

// Sticky header menu (mobile)

if (document.documentElement.clientWidth < 640) {
		(function($) {          
    	$(document).ready(function(){                    
  	      $(window).scroll(function(){                          
	            if ($(this).scrollTop() > 200) {
            	    $('.sticky-nav-mobile').fadeIn(500);
          	  } else {
        	        $('.sticky-nav-mobile').fadeOut(500);
      	      }
    	    });
  	  });
	})(jQuery);
}