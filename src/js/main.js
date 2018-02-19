$(function(){

	var $navbar = $(".navbar");
	var $mobileButton = $navbar.find(".mobile-button");
	var $menu = $navbar.find("#navbarCollapse");
	var $buttons = $navbar.find(".nav-link");
	var $abilities = $("#abilities-section");

// Navigation link action
	
	$buttons.on("click", function(e){	
		$buttons.removeClass("active-link");
		if($(window).width() < 768)
			$mobileButton.click();
		$(this).addClass("active-link");
		
		var href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(href).offset().top
		}, 700);

		e.preventDefault();
	
	});	
		
// Transition mobile navigation 
	
	$mobileButton.on("click", triggerButton);
	
	function triggerButton(){
		
		//$mobileButton.off("click");
		$("body").toggleClass("noscroll");
		$menu.toggle(200);
		$navbar.toggleClass("mobile-nav").delay(200).promise().then(function(){
			$mobileButton.on("click");	
		});
		
	/*	if($navbar.hasClass("mobile-nav"))
			$(window).on("click", function(){
				$mobileButton.click();
				$(window).off("click");
			}); */
	}

// Navigation transition

	function scroll(){
		var ypos = window.pageYOffset;
		if(ypos > 524) {
			$navbar.addClass("nav-fixed");
			$buttons.removeClass("active-link");
			$buttons.eq(3).addClass("active-link");
		}
		else if (ypos > 50) {
			$navbar.removeClass("nav-fixed");
			$buttons.removeClass("active-link");
			$buttons.eq(0).addClass("active-link");
		}
	}
	window.addEventListener("scroll", scroll);	

// Quotes slider
	
/*	var quotes = $abilities.find(".abilities-text-slider").children();
	var cnt = 0;
	setInterval(function(){
		quotes.eq(cnt % 3).fadeOut(1000);
		quotes.eq((cnt + 1) % 3).fadeIn(1000);
		cnt++;
			}, 6000);

*/


});

