$(document).ready(function () {


$("#dc1").owlCarousel({
	items:1,
	margin:0,
	loop:true,
	nav:true,
	autoplay:true,
	autoplayTimeout:2500,
	autoplayHoverPause:true
});

$("#dc2").owlCarousel({
	items:1,
	margin:10,
	loop:true,
	autoplayTimeout:2500,
	autoplayHoverPause:true
});

$("#dc3").owlCarousel({
	items:5,
	loop:true,
	nav:true,
	dots:false,
	autoplayTimeout:2500,
	autoplayHoverPause:true,
    responsive : {
    0: {
       items: 2  
    },
    576:{
    	items:3
    },
    768 : {
    	items:4

    },
    992 : {
    	items:4
    },
    1200 : {
    	items:5
    }
}

});
$('[data-fancybox="gallery"]').fancybox({
	loop: true,
	infobar: false,
	animationEffect: "zoom-in-out",
	transitionEffect: "rotate",
	parentEl: ".br_items"
});


$('input:radio,input:checkbox,input:file, select').styler();


$( "#datepicker" ).datepicker();


$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );



//News
$('.br_newsitem .btn.red').click(function(){
	if($(this).text()=='Подробнее'){
		$('.br_newsitem .btn.red').text('Подробнее');
		$(this).text('Скрыть');
		$('.br_newsitem .hide_2').slideUp();
		$(this).parents('.br_newsitem').find('.hide_2').slideDown();
	}else{
		$(this).text('Подробнее');
		$(this).parents('.br_newsitem').find('.hide_2').slideUp();
	}
});



$('.br_toplist li a').click(function(){
	if($(this).hasClass('black')){
		$(this).removeClass('black');
	}else{
		$('.br_toplist li a').removeClass('black');
		$(this).addClass('black');                        
	}
});

$('.br_sideblock ul li a').click(function(){
	if($(this).parent('li').hasClass('active')){
		$(this).parent('li').removeClass('active');
		$(this).next().slideUp();
	}else{
		$('.br_sideblock ul li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.br_sideblock ul li ul').slideUp();
		$(this).next().slideDown();
	}
});

$('.br_collapse ul li:last a').click(function(){
	$(this).next().slideToggle();
});



	$('.br_input input, .br_input textarea').focus(function(){
		$(this).parent().addClass('focus');
	});

	$('.br_input input, .br_input textarea').blur(function(){

		if($(this).val()!=''){

    	}else{
    		$(this).parent().removeClass('focus');
    	}

	});

	$('.br_input input, .br_input textarea').change(function(){
    	if ($(this).val()!='') {
    		$(this).parent().addClass('focus');
    		$(this).parent().removeClass('error');
    		$(this).parent().find('span small').remove();
    	}else{
    		$(this).parent().addClass('error');
    		$(this).parent().find('span').append('<small>* - Заполните поле</small>');
    	}
    });

// Placeholder
	$('input[placeholder], textarea[placeholder]').placeholder();


	$('.br_password_hidden').click(function(){
	  if($(this).find('i').attr('class')=="icon-eye"){
	    $(this).find('i').removeAttr('class').attr('class','icon-eye-blocked');
	    $(this).parent().find('input:password').removeAttr('type').attr('type','text');
	  }else{
	    $(this).find('i').removeAttr('class').attr('class','icon-eye');
	    $(this).parent().find('input:text').removeAttr('type').attr('type','password');
	  }

	});


//Totop
  $(window).scroll(function() {
    if($(this).scrollTop() > 150){
      $('.toTop').stop().animate({bottom: '15px'}, 500);
    }else{
      $('.toTop').stop().animate({bottom: '-150px'}, 500);
    }
  });

   $('.toTop').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 500, 

    function() {
        $('.toTop').stop().animate({bottom: '-150px'}, 500);
    });

  });



});