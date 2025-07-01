jQuery(document).ready(function($) {
    if($(".inner-content").length > 0){ $("#body-wrapp").addClass('inner-content');}
    $("#body-wrapp").addClass('loaded');
    $(".cripto-curren").each(function(){
      $this = $(this);
      cointp= $this.data('type');
      jQuery.ajax({
                type: "GET",
                dataType: "json",
                url: "https://api.coinmarketcap.com/v2/ticker/"+cointp+"/?structure=array",
                beforeSend:function(data){},//fin del before send o loader
                success: function(data){
                
                  //console.log($this.attr('class'));
                    $(".cripto-curren").each(function(){
                       if($(this).hasClass(data.data[0].website_slug)){
                          $(this).text("$"+data.data[0].quotes.USD.price);
                        // console.log(data.data[0].name+" "+data.data[0].quotes.USD.price);
                       }
                    });
                },// fin del success
                error:function(data){ console.log('error');}
            }); // fin del ajax listar torneos
    });
    $(".checkout").find("input[type='text'],input[type='tel'], input[type='email'],select,textarea").addClass('form-control');
     $('div.carousel-inner div:first-child').addClass( "active" );
          $('#proyectSupport').carousel();
     var $window = $(window), window_height= $window.height()*1.1;
            //if(idTouch){ $('.scrollreveal').addClass('animated');}
            $window.on('scroll', showscroll);

            function showscroll(){
                $('.scrollreveal:not(.animated)').css('opacity', '0');
                var scrolled = $window.scrollTop(), window_height= $window.height()*1.1;
                $('.scrollreveal:not(.animated)').each(function(){
                    var $this = $(this), offsetTop = $this.offset().top;
                    if(scrolled + window_height > offsetTop + 200){
                        if($this.data('timeout')){
                            window.setTimeout(function(){
                                $this.addClass('animated '+ $this.data('animation')).css('opacity', '1');
                            }, parseInt($this.data('timeout')),10);
                        }
                        else{
                            $this.addClass('animated '+ $this.data('animation'));
                        }
                    }           
                });
            //$('.scrollreveal.animated').each(function(){
            //  var $this = $(this), offsetTop = $this.offset().top;
            //  if(scrolled + window_height < offsetTop){
            //          $this.removeClass('animated '+$this.data('animation'));
            //          var verfy = $this.tagName;
            //          if(verfy = "UL"){
            //              $this.removeClass('animated');
            //              $('ul.scrollreveal li').removeClass('animated '+$this.data('animation'));
            //          }
            //  }
            //});
        }
        showscroll();
  });