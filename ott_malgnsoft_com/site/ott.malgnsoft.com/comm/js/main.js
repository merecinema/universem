
$(document).on('ready', function() {

	// 메인비주얼
	$('.visual_in').slick({
		infinite: true,
		speed: 1000,
		fade: true,
		dots: true,
		cssEase: 'linear',       
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,         
		autoplay: true,
		autoplaySpeed: 9000,
		
    });		

	$('.visual_in .slick-active').addClass('action'); 
	$('.visual_in').on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('.slick-slide').removeClass('action');
			setTimeout(function (){ 
					$('.slick-active').addClass('action'); 
			});
	});
	$('.visual_in').on('init', function(event,slick){
			setTimeout(function(){ 
					$('.slick-active').addClass('action'); 
			});
	});					
	

	// 고객 사례
	$('.case_roll').slick({
	  dots: false,
	  arrows: true,
	  infinite: true,
	  speed: 1000,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 681,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});

	setTimeout(function (){ 
		$('.case_roll .slick-active').removeClass("grayscale");
	});
	$('.case_roll').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.case_roll .slick-slide').addClass("grayscale");
		setTimeout(function (){ 
			$('.case_roll .slick-active').removeClass("grayscale");
		});
	});
	$('.case_roll').on('init', function(event,slick){
		setTimeout(function(){ 
			$('.case_roll .slick-active').removeClass("grayscale");
		});
	});


	// 포트폴리오
	$('.portfolio_roll').slick({
	  dots: false,
	  arrows: true,
	  infinite: true,
	  speed: 1000,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 981,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 681,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});


	setTimeout(function (){ 
		$('.portfolio_roll .slick-active').find("dt").removeClass("grayscale");
	});
	$('.portfolio_roll').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.portfolio_roll .slick-slide').find("dt").addClass("grayscale");
		setTimeout(function (){ 
			$('.portfolio_roll .slick-active').find("dt").removeClass("grayscale");
		});
	});
	$('.portfolio_roll').on('init', function(event,slick){
		setTimeout(function(){ 
			$('.portfolio_roll .slick-active').find("dt").removeClass("grayscale");
		});
	});


	
	// 개인정보 수집 동의 팝업
	$('.agree_popup_btn').click(function(){
		$('#agree_popup').fadeIn();
		$('body').addClass('noScroll');
	});
	$('.agree_popup_bg,.agree_popup_close').click(function(){
		$('#agree_popup').fadeOut();
		$('body').removeClass('noScroll');
	});


	// 배경효과
	(function($){
		$(window).on('scroll', function() {
			$('.ani_effect').each(function(index, elem) {
				if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 1.4)) {
					var $this = $(this);
					$this.addClass("action");
				}	
				if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 1.4)) {
					var $this = $(this);
					$this.addClass("action");
				}else{
					var $this = $(this);
				}	
			});
		});
	})(jQuery);


});