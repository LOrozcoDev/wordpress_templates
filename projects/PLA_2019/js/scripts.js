
jQuery(document).ready(function($) {
	var	$window = $(window), window_height= $window.height()*1.1;
	nombre_jugador();
	showscroll();
	$window.on('scroll', showscroll);
	$(".bg-jugador").interactive_bg({
			   strength: 5,
			   scale: 1,
			   animationSpeed: "100ms",
			   contain: false,
			   wrapContent: false
			 });
	check_width();
	$(window).resize(function(event) {
		$(".bg-jugador> .ibg-bg").css({
	        width: $(".bg-jugador").outerWidth(),
	        height: $(".bg-jugador").outerHeight()
	      });
		check_width();
	});
	var sticky = $("#header-wrapp");
	var wHeight = sticky.offset().top;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > wHeight ){
			sticky.addClass('sticky-menu');
		} else {
			sticky.removeClass('sticky-menu');
		}
	});
	
	
	function check_width(){
		if ($(window).width() <= 1220 && $(window).width() > 1100) {
			$(document).find('.navigate-frame').removeClass('col-7 col-11').addClass('col-8');
			$(document).find('.navbar-right').removeClass('col-4').addClass('col-3');
		
		}else if($(window).width() <= 1100 && $(window).width() > 768){
			$(document).find('.navigate-frame').removeClass('col-8 col-7').addClass('col-11');
			
		}else if($(window).width() < 1024){
			/*$(".bg-jugador").hide();
			$(".bg-jugador > .ibg-bg").hide();
			$('.intro-jugador').removeClass('d-none');*/
		}
		else if($(window).width() >= 1300){
			$(document).find('.navigate-frame').removeClass('col-8 col-11').addClass('col-7');
			$(document).find('.navbar-right').removeClass('col-3').addClass('col-4');
			/*$(".bg-jugador").show();
			$(".bg-jugador > .ibg-bg").show();
			$('.intro-jugador').addClass('d-none');*/
		}
	}
	function nombre_jugador(){
		var nombre = $(document).find('.nombre-jugador span');
		var name_splited = nombre.text().split(' ');
		nombre.html('<span class="nombre-blanco">'+name_splited[0]+'</span> <span class="nombre-naranja">'+name_splited[1]+'</span>');

	}
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

});