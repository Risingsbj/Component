$(document).ready(function(){
		$(".topbar-care").mouseenter(function(){  
		$(".care-menu").slideToggle() 
		$(".kong").addClass("kong-change"); 
		$(".topbar-care").addClass("care-change"); 
	});
	$(".topbar-care").mouseleave(function(){  
		setTimeout(function(){$(".care-menu").slideToggle();}, 300);  
		setTimeout(function(){$(".kong").removeClass("kong-change");}, 400);
		setTimeout(function(){$(".topbar-care").removeClass("care-change");}, 500);
	});
	$(".header-nav").mouseenter(function(){  
		$(".zhanwei-div").show()
	});
	$(".header-nav").mouseleave(function(){  
		$(".zhanwei-div").hide()
	});

	$(".header-nav-li").mouseenter(function(){  
		if ($(".zhanwei-div").css("display") == "none") { 
			$(this).children("div").slideDown()
		} else {  
			$(this).children("div").show()
		}
	});
	$(".header-nav-li").mouseleave(function(){  
			$(this).children("div").hide()
	});
	var menus=new Array(".menu-guide-1",".menu-guide-2",".menu-guide-3",".menu-guide-4",".menu-guide-5",".menu-guide-6",".menu-guide-7",".menu-guide-8",".menu-guide-9",".menu-guide-10");
	for (var i = 0; i < 10; i++) {
		$(menus[i]).mouseenter(function(){  
		$(this).children("div").show() 	
		})
		$(menus[i]).mouseleave(function(){ 
		$(this).children("div").hide()	
		})
	};
		$(".rolling").click(function(){  
			$(".rolling").removeClass("touch");  
			$(this).addClass("touch"); 
			var n= $(this).text()  
			$(".rolling0").fadeTo(300,0.0)    
			$(".rolling0").eq(n).fadeTo(100,1.0)  
			var ahref=$(".rolling0").eq(n).attr("href");  
			$(".rolling0").eq(4).attr("href",ahref) 
  			return false;  
		});
		$(".rolling").mouseenter(function(){ 
			clearInterval(timer) 
		});
	//轮播定时器
	var oclick=new Array(".click-0",".click-1",".click-2",".click-3",".click-4")
  	var iNow=0;  
  	timer=setInterval(function(){  
   		iNow++;       
	   	if(iNow>4){
	    	iNow=0;
	   	}
   		$(oclick[iNow]).trigger("click");
  	},4000);
  	//小米明星单品展示切换
  	$(".con-bottom-onclick").click(function(){
  		$(".carousel-one").fadeIn(500)
  		$(".carousel-tow").fadeOut(500)
  		return false;  
  	});
  	$(".con-bottom-unclick").click(function(){
  		$(".carousel-tow").fadeIn(800)   
  		$(".carousel-one").fadeOut(800)
  		return false;  
  	});
  	var rclick=new Array(".con-bottom-onclick",".con-bottom-unclick")
  	var R=0;  
  	Rclick=setInterval(function(){  
   		R++;      
	   	if(R>1){ 
	    	R=0;
	   	}
   		$(rclick[R]).trigger("click"); 
  	},5000);
  	//搭配内容切换
  	for (var i = 0; i < 4; i++) { 
  		$(".top-button-click").eq(i).mouseenter(function(){ 
  			var atext=$(this).text()
  			if (atext=="热门") {  
  				$(".hot-headset").show() 
  				$(".hot-headset").siblings().hide() 
  			};
  			if (atext=="耳机音箱") {
  				$(".headset").siblings().hide()
  				$(".headset").show()
  			};
  			if (atext=="电源") {
  				$(".source").siblings().hide()
  				$(".source").show()
  			};
  			if (atext=="电池存储卡") {
  				$(".memory").siblings().hide()
  				$(".memory").show()
  			};
  			$(".top-button-click").removeClass("top-button-color")  
  			$(".top-button-click").removeClass("top-button-border")
  			$(this).addClass("top-button-color") 
  			$(this).addClass("top-button-border") 
  			$(this).removeClass("toptitle")
  		})
  	};
  	$(".top-button-click").click(function(){
  		return false; 
  	})
  	//配件内容切换
  	for (var i = 0; i < 5; i++) {  

  		$(".tow-top-button-click").eq(i).mouseenter(function(){ 
        var atext=$(this).text()
        if (atext=="热门") {  
          $(".hot-protect").show() 
          $(".hot-protect").siblings().hide() 
        };
        if (atext=="保护套") {
          $(".protect").siblings().hide()
          $(".protect").show()
        };
        if (atext=="后盖") {
          $(".lid").siblings().hide()
          $(".lid").show()
        };
        if (atext=="贴膜") {
          $(".film").siblings().hide()
          $(".film").show()
        };
        if (atext=="其他配件") {
          $(".parts").siblings().hide()
          $(".parts").show()
        };
  			$(".tow-top-button-click").removeClass("top-button-color")  
  			$(".tow-top-button-click").removeClass("top-button-border")
  			$(this).addClass("top-button-color") 
  			$(this).addClass("top-button-border") 
  			$(this).removeClass("toptitle")
  			return false; 
  		})
  	};
  	//周边内容切换
  	for (var i = 0; i < 5; i++) { 
  		$(".three-top-button-click").eq(i).mouseenter(function(){ 
        var atext=$(this).text()
        if (atext=="热门") {  
          $(".hot-clothes").show() 
          $(".hot-clothes").siblings().hide() 
        };
        if (atext=="服装") {
          $(".clothes").siblings().hide()
          $(".clothes").show()
        };
        if (atext=="米兔") {
          $(".rabbit").siblings().hide()
          $(".rabbit").show()
        };
        if (atext=="生活周边") {
          $(".periphery").siblings().hide()
          $(".periphery").show()
        };
        if (atext=="箱包") {
          $(".bag").siblings().hide()
          $(".bag").show()
        };
  			$(".three-top-button-click").removeClass("top-button-color")  
  			$(".three-top-button-click").removeClass("top-button-border")
  			$(this).addClass("top-button-color") 
  			$(this).addClass("top-button-border") 
  			$(this).removeClass("toptitle")
  			return false; 
  		})
  	}; 

})
