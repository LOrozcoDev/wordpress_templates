jQuery(document).ready(function($) {
	const cd = new Date().getFullYear() + 1
	        $('#countdown').countdown({
	            year: 2020, // YYYY Format
			    month: 6, // 1-12
			    day: 10, // 1-31
			    hour: 0, // 24 hour format 0-23
			    minute: 0, // 0-59
			    second: 0, // 0-59
	});
	        var	$window = $(window), window_height= $window.height()*1.1;
			//if(idTouch){ $('.scrollreveal').addClass('animated');}
			$window.on('scroll', showscroll);

		function showscroll(){
			var scrolled = $window.scrollTop(), window_height= $window.height()*1.1;
			$('.scrollreveal:not(.animated)').each(function(){
				var $this = $(this), offsetTop = $this.offset().top;
				if(scrolled + window_height > offsetTop){
					if($this.data('timeout')){
						window.setTimeout(function(){
							$this.addClass('animated '+ $this.data('animation'));
						}, parseInt($this.data('timeout')),10);
					}
					else{
						$this.addClass('animated '+ $this.data('animation'));
					}
				}			
			});
		}
		showscroll();
	$(".nav-container a").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
	});
});
