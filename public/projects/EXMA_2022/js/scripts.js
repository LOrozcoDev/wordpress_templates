jQuery(document).ready(function($) {
if($(document).find('input#nmipay-card-expiry').length >0){
      $('#nmipay-card-expiry').inputmask('99/99', { placeholder: 'MM/AA' });
      console.log('encontrado');
  }
	const cd = new Date().getFullYear() + 1

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

	    if(!$(this).closest(".nav-container").hasClass('inner_menu')){
	    	$('html,body').animate({scrollTop: $(aid).offset().top},'slow');
	    }else{
	    	location.href = aid;
	    }

	});
});

