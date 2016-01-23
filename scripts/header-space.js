$(document).ready(function () {
		
        var navSize = ($('.nav-container').height() - 25);
        $('#header-space').height(navSize);
  
        $(window).resize(function() {
    
            var navSize = ($('.nav-container').height() - 25);
            $('#header-space').height(navSize);
        });

        $(window).trigger('resize');
  
  });