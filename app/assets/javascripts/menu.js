(function($){
   
 'use strict';
	
$(document).ready(function(){
	
	var $menu_item = $("#menu-items li"); 
	var $menu_toggle_button = $("#menu-toggle-button"); 
	var menu_toggle_icon = ".menu-toggle-icon"; 
	var $user_profile = $(".user-profile");
	var menuItemNum=$menu_item.length; 
	var angle=120;
	var distance=120;
	var startingAngle=180+(-angle/2);
	var slice=angle/(menuItemNum-1);
	var on=false, i = 0;
	
	TweenMax.globalTimeScale(0.8);

	/* Initialze transform animation for social media menus*/ 
	for(i; i < menuItemNum; i++){ 
		var sAngle=startingAngle+(slice*i); 
		
		$menu_item.eq(i).css({ 
			transform:"rotate("+(sAngle)+"deg)"
		})
		$menu_item.eq(i).find(".menu-item-icon").css({
			transform:"rotate("+(-sAngle)+"deg)"
		})		
	}
	
	/* Open profile card */ 
	var openProfile = function (){
		$user_profile.addClass("show")
	}
	
	/* Close profile card */
	var closeProfile = function(){
		$user_profile.removeClass("show")
	} 
	
	/* Open and animate Social media menus  */
	var openMenu = function(){

		openProfile();  
		
		$(".menu-item").each(function(i){
			
			var delay = i*0.08; 
			var $bounce = $menu_item.eq(i).children("div");

			TweenMax.fromTo($bounce,0.2,{
				transformOrigin:"50% 50%"
			},{
				delay:delay,
				scaleX:0.8,
				scaleY:1.2,
				force3D:true,
				ease:Quad.easeInOut,
				onComplete:function(){ 
					TweenMax.to($bounce,0.15,{ 
						scaleY:0.7,
						force3D:true,
						ease:Quad.easeInOut,
						onComplete:function(){ 
							TweenMax.to($bounce,3,{ 
								scaleY:0.8,
								force3D:true,
								ease:Elastic.easeOut,
								easeParams:[1.1,0.12]
							})
						}
					})
				}
			});

			TweenMax.to($menu_item.eq(i).children("a"),0.5,{
				delay:delay,
				y:distance,
				force3D:true,
				ease:Quint.easeInOut
			});
		})		 
		 	
	}
	
	/* Reset and animate Social media menus  */
	var closeMenu = function(){
		$(".menu-item").each(function(i){
			
			var delay = i*0.08; 
			var $bounce = $menu_item.eq(i).children("div");

			TweenMax.fromTo($bounce,0.2,{
				transformOrigin:"50% 50%"
			},{
				delay:delay,
				scaleX:1,
				scaleY:0.8,
				force3D:true,
				ease:Quad.easeInOut,
				onComplete:function(){
					TweenMax.to($bounce,0.15,{ 
						scaleY:1.2,
						force3D:true,
						ease:Quad.easeInOut,
						onComplete:function(){
							TweenMax.to($bounce,3,{ 
								scaleY:1,
								force3D:true,
								ease:Elastic.easeOut,
								easeParams:[1.1,0.12]
							})
						}
					})
				}
			});
			 
			TweenMax.to($menu_item.eq(i).children("a"),0.3,{
				delay:delay,
				y:0,
				force3D:true,
				ease:Quint.easeIn, 
			});
			
			TweenMax.delayedCall(0.4,closeProfile)
		}) 
		
	}	
	
	/* Toggle the event for opening and closing the Card */
	var pressHandler = function (e){
		on=!on; 
		/*Rotate each social media menu*/
		TweenMax.to($menu_toggle_button.children(menu_toggle_icon),0.4,{
			rotation:on?45:0,
			ease:Quint.easeInOut,
			force3D:true
		});

		on?openMenu():closeMenu();
		
		e.preventDefault();
		e.stopPropagation();		
		return false;
	} 	
	
	/* On click of the toggle button, icon becomes smaller */ 
	$menu_toggle_button.on('mousedown',function(e){ 
		TweenMax.to($(menu_toggle_icon),0.1,{
			scale:0.65
		}) 
	}).on('mouseup',function(){
		TweenMax.to($(menu_toggle_icon),0.1,{
			scale:1
		})
	});
	
	 /*When toggle button clicked, do all the function*/
	$menu_toggle_button.on("click",pressHandler); 
	
});
}(jQuery))