// JavaScript Document
		$(document).ready(function(){
				
				$('.house').hide();
	
				
				$('.boxgrid').hover(function(){
					$(".boxcaption", this).stop().animate({bottom:'0px'},{queue:false,duration:160});
					
				}, function() {
					$(".boxcaption", this).stop().animate({bottom:'-100px'},{queue:false,duration:160});
					
					
					
					});
				});