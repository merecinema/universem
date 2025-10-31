
// 메뉴 클릭시 스크롤 스피드
$(function () {
	$("#header .menu li a").mPageScroll2id({	
		scrollSpeed:900,
		offset:0,
		highlightSelector:"#header .menu li a"
	});
});


// top 버튼
$(function(){
    $(".topBtn").click(function(){
        $('html,body').animate({'scrollTop':0},500,'easeInCubic');
    });

})

// 스크롤다운 스피드
$(window).load(function(){
	$("a.mouse_wheel").mPageScroll2id({		
	scrollSpeed:900
	});
});


//GNB fixed
	var didScroll; 
	var lastScrollTop = 0; 
	var delta = 5; 
	var navbarHeight = $('header').outerHeight(); 

	$(window).scroll(function(event){ 
		didScroll = true;
	}); 

	setInterval(function() { 
		if (didScroll) { 
			hasScrolled(); 
			didScroll = false; 
		} 
	}, 250); 

	function hasScrolled() { 
		var st = $(this).scrollTop(); 
		// Make sure they scroll more than delta 
		if(Math.abs(lastScrollTop - st) <= delta) return; 
		// If they scrolled down and are past the navbar, add class .nav-up. 
		// This is necessary so you never see what is "behind" the navbar. 
		if (st > lastScrollTop && st > navbarHeight){ 
			// Scroll Down 
			$('#header').addClass('fixed'); 
		} else if (st == 0){ 
			$('#header').removeClass('fixed'); 
		} else { 
			// Scroll Up 
			if(st + $(window).height() < $(document).height()) { 
				$('#header').addClass('fixed'); 
			}
		} 
		lastScrollTop = st;
	}
//GNB fixed