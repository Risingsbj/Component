// JavaScript Document
	var i=1;
	function overChangDivColor(obj){
	obj.style.backgroundImage="url(images/changcolor_05.jpg)";
	}
	function outChangDivColor(obj){
	obj.style.backgroundImage="url(images/right_color_05.jpg)";
	}
	function shouyeOutChangDivColor(obj){
	obj.style.backgroundImage="url(images/shouye_03.jpg)";
	}
	function changeMainTopCenter(){
		if(i>4){
			i=0;
		}
		i++;
		for(h=1;h<6;h++){
			if(h==i){
			document.getElementById("img"+h).style.borderColor="#FF3333";
			}
			else{
			document.getElementById("img"+h).style.borderColor="#eeeeee";
			}
		}
		document.getElementById("main_top_center").style.backgroundImage="url(shopimages/"+i+".jpg)";
	}
	setInterval(changeMainTopCenter, 5000);
	function overChangColor(obj){
		obj.style.borderColor="#FF3333";
	}
	function outChangColor(obj){
		var a=document.getElementById("img"+i);
		if(obj!=a){
		obj.style.borderColor="#eeeeee";
		}
	}
	function clickChangeImg(num){
		i=num-1;
		changeMainTopCenter();
	}