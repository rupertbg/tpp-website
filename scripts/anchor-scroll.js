// Navigation anchor position & active selector 

$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top-$('.sticky-navbar').outerHeight()
			}, 400, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event){
        var windowTop = ( $(window).scrollTop() + $('.sticky-navbar').outerHeight() );
        var windowMiddle = ( windowTop + $(window).height() / 2);
		$('.nav-highlight a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
            var refTop = $(refElement).position().top;
            var refBottom = refTop + ($(refElement).outerHeight());
			if (refTop <= windowMiddle  && refBottom >= windowMiddle ) {
				$('.nav-highlight ul li a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	}