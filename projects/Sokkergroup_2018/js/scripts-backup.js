jQuery(document).ready(function($) {
  ancho = $(this).width(); window_width(ancho);
    var imglist = ['img/logolineas.svg', 'img/bienvenido.svg'];
    var i = 0;
    first_visit();
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
    $(document).on('click', '.icon-service', function(event){
       event.preventDefault();
       container = $(".recipent")
       chk_in = $(".recipent").children().length;
       description = $(this).siblings('.modal-desc').html();
       container.html("");
       container.html(description);
       $('.display-fix').modal('show');
      
    });
      $('.carousel-inner .item').each(function () {
        var next = $(this).next();
        console.log(next);
    if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    
    var next2 = next.next();
    if (!next2.length) {
            next2 = $(this).siblings(':first');
        }
    next2.children(':first-child').clone().appendTo($(this));
     
    var next3 = next2.next();
    if(!next3.length){
      next3 = $(this).siblings(':first');
    }
    next3.children(':first-child').clone().appendTo($(this));
    });
    $(window).on('resize',function(){  ancho = $(this).width(); window_width(ancho); alto_item = $(".grid-item").first().height();
    $(".grid-item").css('max-height', alto_item*2); $(".inner-item").css('max-height', alto_item*2);});
    function window_width(ancho){
      if(ancho < 800){
        $(document).on('click', '.nav-container a', function(){
          $("#menu-sw").click();
        });
      }
    }
    $('.route-trace').each(function(){
      ruta =$(this).attr('href');
      texto = $(this).text();
      $(this).parent().siblings().children('a.trace-go').text(texto).attr('href', ruta);
      $(this).css('display', 'none');
    });

    if($('.amount').length > 0){
      $('.amount').each(function(){
          monto = $(this).text();
        if(monto == '$0.00'){
          $(this).text('Gratis').addClass('resalt');
        }
      });
    }
    function first_visit(){
      // check cookie
        var visited = $.cookie("visited")

        if (visited == null) {
            $('.newsletter_layer').show();
            console.log('visita por primera vez');     
        }

        // set cookie
        $.cookie('visited', 'yes', { expires: 1, path: '/' });
    }
    if($('.grid').length > 0){
      alto_item = $(".grid-item").first().height();
      $(".grid-item").css('max-height', alto_item*2);
      $(".inner-item").css('max-height', alto_item*2);
     var $grid = $('.grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-sizer'
      }
    });
      $grid.imagesLoaded().progress(function() {
        $grid.fadeIn(1000).isotope('layout');
      });


    }
    
  });