$.fn.carouselHeights = function() {	
    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    var normalizeHeights = function() {
        items.each(function() { //add heights to array			
            heights.push($(this).actual("height")); 
        });
        tallest = Math.max.apply(null, heights)+10; //cache largest value
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        heights.length = 0;

        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        }); 
        normalizeHeights(); //run it again 
    });

};
homepage_docready = function () {	
	fnCalculateTransparentLayers();
	var homeSectionOpened = false;
	var homeSliderPrevClicked = false;
	var homeSliderNextClicked = false;
	function fnCalculateTransparentLayers(){
		var clientBrowserWidth = $(window).width();
		var containerWidth = $("section.content").width();
		var remainingWidth = clientBrowserWidth - containerWidth;
		var eachColumnWidth = (remainingWidth/2);
		$("#outsideContainerLeft").width(eachColumnWidth)+10;	
		$("#outsideContainerRight").width(eachColumnWidth)+10;
		$("#outsideContainerLeft").css('left', -$("#outsideContainerLeft").width()+1);
		$("#outsideContainerRight").css('right', -$("#outsideContainerRight").width());
	}	
	function initColumns(){
		window.location.reload();
		if(window.innerWidth < 768){
			//MOBILE
		} else if(window.innerWidth == 768){
			//IPAD
		} else {
			//WEB

		}
	}
	$( window ).resize(function() {
		initColumns();
		fnCalculateTransparentLayers();
	});
	$("#mapClick").click(function(e){
		if(window.innerWidth >= 768){
			blueBoxSectionAnimation();
		} else {
			blueBoxMobileSectionAnimation();
		}
	});
	$(window).bind( 'orientationchange', function(e){
		//Function handle orientation change
		initColumns();
	});
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	if(isiPad && window.innerWidth==768){
		$("#contentPart").css("width","477px");
		$("#middleBluePart").css("left","477px");
		$("#sideCol2").css("width","288px");
		$("#sideCol3").css("width","482px");
		$("#sideCol4").css("width","300px");
	}
	function blueBoxSectionAnimation(){
		if(!homeSectionOpened){
			if(!homeSliderNextClicked){
				$("#prevBt").addClass("disabled");
				homeSectionOpened = true;
				$("#middleBluePart").show();
				if(window.innerWidth == 768){
					$('#keoSlideColumn1').animate({ left:'-=288px'},"slow");
					$('#middleBluePart').animate({ left:'-=283px'},"slow");	
				} else {
					$('#keoSlideColumn1').animate({ left:'-=40.57735402295438%'},"slow");
					$('#middleBluePart').animate({ left:'-=28.48553505909405%'},"slow");	
				}
			}
		} else {
			fnCloseHomeSection();
		}
	}
	function fnCloseHomeSection(){
		homeSectionOpened = false;
		$("#prevBt").removeClass("disabled");
		if(window.innerWidth == 768){
			$('#keoSlideColumn1').animate({ left:'+=288px'},"slow");
			$('#middleBluePart').animate({ left:'+=283px'},"slow");				
		} else {
			$('#keoSlideColumn1').animate({ left:'+=40.57735402295438%'},"slow");
			$('#middleBluePart').animate({ left:'+=28.48553505909405%'},{
				complete: function () {
					$("#middleBluePart").hide();					
				}
			},"slow");	
		}
	}
	$("#nextBt").click(function(){		
		if(homeSectionOpened){
			fnCloseHomeSection();
		} else {
			if(!homeSliderNextClicked){
				$("#nextBt").addClass("disabled");
				$("#prevBt").removeClass("disabled");
				homeSliderPrevClicked = false;
				homeSliderNextClicked = true;
				if(window.innerWidth == 768){
					$('#contentPart').animate({ left:'-=769px'},"slow");
					$('#sideCol2').animate({ left:'-=769px'},"slow");
					$('#sideCol4').animate({ left:'-=769px'},"slow");
					if(isiPad){
						$('#sideCol3').animate({ left:'-=781px'},"slow");
					}else{
						$('#sideCol3').animate({ left:'-=769px'},"slow");
					}


				}else{
					$('#contentPart').animate({ left:'-=71.22448979591837%'},"slow");
					$('#sideCol2').animate({ right:'+=71.7%'},"slow");
					$('#sideCol3').animate({ right:'+=71.5%'},"slow");
					$('#sideCol4').animate({ left:'-=71.22448979591837%'},"slow");
				}
			}
		}
	});
	$("#prevBt").click(function(){	
		if(homeSliderNextClicked){
			$("#prevBt").removeClass("disabled");
			$("#nextBt").removeClass("disabled");
			homeSliderPrevClicked = true;
			homeSliderNextClicked = false;
			if(window.innerWidth == 768){
					$('#contentPart').animate({ left:'+=769px'},"slow");
					$('#sideCol2').animate({ left:'+=769px'},"slow");
					$('#sideCol4').animate({ left:'+=769px'},"slow");
					if(isiPad){
						$('#sideCol3').animate({ left:'+=781px'},"slow");
					}else{
						$('#sideCol3').animate({ left:'+=769px'},"slow");
					}
			}else{
				$('#contentPart').animate({ left:'+=71.22448979591837%'},"slow");
				$('#sideCol2').animate({ right:'-=71.7%'},"slow");
				$('#sideCol3').animate({ right:'-=71.5%'},"slow");
				$('#sideCol4').animate({ left:'+=71.22448979591837%'},"slow");
			}
		} else {
			blueBoxSectionAnimation();
		}
	});
	
	/*For mobile screens*/
	$("#nextMBt").click(function(){
		if(homeSectionOpened){
			fnCloseMobileHomeSection();
		} else {
			if(!homeSliderNextClicked){
				homeSliderPrevClicked = false;
				homeSliderNextClicked = true;
				$("#nextMBt").addClass("disabled");
				$("#prevMBt").removeClass("disabled");
				$('#contentPart,#sideCol2').animate({ left:'-=100%'},"slow");
				$("#sideCol3,#sideCol4").animate({ left:'-=100%'},"slow");
			}
	   }
	});
	function blueBoxMobileSectionAnimation(){
		if(!homeSectionOpened){
			if(!homeSliderNextClicked){
				$("#prevMBt").addClass("disabled");
				homeSectionOpened = true;
				$('#middleBluePart').css("top",$("#contentPart").height());
				$('#sideCol2').animate({ left:'+=100%'},"slow");
				$('#middleBluePart').animate({ left:'+=100%'},"slow");
			}
		} else {
			fnCloseMobileHomeSection();
		}
	}
	function fnCloseMobileHomeSection(){	
		$("#prevMBt").removeClass("disabled");
		$('#sideCol2').animate({ left:'-=100%'},"slow");
		$('#middleBluePart').animate({ left:'-=100%'},"slow");
		homeSectionOpened = false;
	}
	$("#prevMBt").click(function(){
		if(homeSliderNextClicked){
			homeSliderPrevClicked = true;
			homeSliderNextClicked = false;
			$("#prevMBt").removeClass("disabled");
			$("#nextMBt").removeClass("disabled");
			$('#contentPart,#sideCol2').animate({ left:'+=100%'},"slow");
			$("#sideCol3,#sideCol4").animate({ left:'+=100%'},"slow");
		} else {
			blueBoxMobileSectionAnimation();
		}
	});
	
	/*$("#mapExplore").click(function(){
		if(window.innerWidth <= 768){
			homeSectionOpened = true;
			$( "#middleBluePart" ).slideToggle( "slow", function() {
		    });
		}			
	});*/
	$(".closeBt").click(function(){
		if(window.innerWidth==768){
			fnCloseHomeSection();
		}else{
			fnCloseMobileHomeSection();
		}
	});
	$(window).resize(function() {
		if(window.innerWidth > 768){
			if($("#middleBluePart").is(":visible")){
				//$("#middleBluePart").hide();
				//fnCloseHomeSection();
			}
		}
	});
}


default_docready = function () {	
	//header search
	$('#searchBtn a').click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$('.searchDropp').slideToggle();
		
		$('.loginDropp').hide();
		$('.logInBtn a').removeClass("active");
		
	});
	//header login
	$('.logged').click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$('.loginDropp').slideToggle();
		
		$('.searchDropp').hide();
		$('#searchBtn a').removeClass("active");
		
	});
  //footer site map
	$('.footerplan ').click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$('.siteMap').slideToggle();
	});
	//placeholder
	$('input, textarea').placeholder();
	
	$('.carousel').carousel({
		interval: 5000,
		pause: "false"
	});
	 $(".carousel").swiperight(function() {  
      $(".carousel").carousel('prev');  
    });  
   $(".carousel").swipeleft(function() {  
      $(".carousel").carousel('next');  
   });
    $(window).on('load', function(){	   
        $('#intranetCarousel .item').carouselHeights();
    });
	 
	//minus margin inner
	/*var innerMinusMargin = $('.innerSmallImg').height();
	$('.sideAddBox').css('margin-top', -innerMinusMargin-7);*/
	
	var innerSocialBigWidth = $('.innerSocialBig a').width();
	$('.innerSocialBig a').height(innerSocialBigWidth);
	
	$( window ).resize(function() {
		/*var innerMinusMargin = $('.innerSmallImg').height();
		$('.sideAddBox').css('margin-top', -innerMinusMargin-7);*/
		
		var innerSocialBigWidth = $('.innerSocialBig a').width();
		$('.innerSocialBig a').height(innerSocialBigWidth);
	});	
	//intranet  -------------------------
	//intranet carousel
	var n = $(".carousel .item").length;
	//alert(n);
	if(n<2){
		$(".carousel .tools").hide();
	}	
	
	//career heights
	  if(window.innerWidth > 768){
			$('.career .cntWrapp').css('min-height', '100%');
			$(".career .cntWrapp section.content, .career .cntWrapp section.content .container").css('height', ($(".career .cntWrapp").height()-69));
		}else if(window.innerWidth == 768){
			var tabletHeight = $(window).height();
			$('.career .cntWrapp, .career .cntWrapp section.content, .career .cntWrapp section.content .container').css('height', (tabletHeight-134));
		}
		
		$( window ).resize(function() {
			if(window.innerWidth > 768){
				$('.career .cntWrapp').css('min-height', '100%');
				$(".career .cntWrapp section.content, .career .cntWrapp section.content .container").css('height', ($(".career .cntWrapp").height()-69));
			}else if(window.innerWidth == 768){
				var tabletHeight = $(window).height();
				$('.career .cntWrapp, .career .cntWrapp section.content, .career .cntWrapp section.content .container').css('height', (tabletHeight-134));
			}
		});
		
		
}


