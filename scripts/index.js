window.onload = function(){
	$('.shang').hover(
		function(){$(this).find('.xia').show()},
		function(){$(this).find('.xia').hide()}
	)
	// $('.floor').click(function(){
	// 	var i = $('.floor').index(this);
	// 	var arr = [1210,1663,2126,2693,3146,3599,4176,4629,5092,5659,6112,6565];
	// 	$('body').stop().animate({scrollTop:arr[i]},'slow');
	// })
	$('.floor').each(function(i){
		$($('.floor')[i]).data('index',i);
	})
	$('.floor').click(function(){
		var i = $(this).data('index');
		var top = $($('.section1')[i]).offset().top;
		console.log($(window).scrollTop())
		$({t:$(window).scrollTop()}).animate({t:top},{
			duration:700,
			step:function(){
				$(window).scrollTop(this.t);
				// console.log(this.t);
			}
		})
	})
	var timerId = setInterval(function(){
		if(document.body.scrollTop>=1109&& document.body.scrollTop<=7000){
			$('.left').show();
		}else{
			$('.left').hide()
		}
		if(document.body.scrollTop>=509){
			$('.goTop').show();
		}else{
			$('.goTop').hide();
		}
	},500)
	var hasClass = $('.brand li:first');
	$('.hotbrand-imgzjuchang ul:first').show();
	var chuxian = $('.hotbrand-imgzjuchang ul:first');
	$('.brand li').click(function(){
		hasClass.removeClass('brand-black');
		$(this).addClass('brand-black');
		hasClass = $(this);
		var i = $('.brand li').index(this);
		chuxian.hide();
		$($('.hotbrand-imgzjuchang ul')[i]).show();
		chuxian = $($('.hotbrand-imgzjuchang ul')[i]);
	})
	
	$('.brand-ts').click(function(){
		var arr = [];
		var dict = {};
		var dd = 0;
		var ran;
		var i = $('.brand li').index(hasClass);
		var need_change = $('.hotbrand-imgzjuchang ul')[i];
		var need_src = $(need_change).find('.hot-img');
		for(i=0;i<need_src.length;i++){
			arr[i] = need_src[i].src;
		}
		while(dd<24){
			ran = Math.floor(Math.random()*24);
			if(!dict[arr[ran]]){
				dict[arr[ran]] = true;
				dd++;
			}else{
				ran = Math.floor(Math.random()*24);
			}
		}
		var ddd = 0;
		for( var i in dict){
			need_src[ddd].src = i;
			ddd++;
		}

		
		
	})
	$('.one').find('.contentl-xiao:first').show();
	var aaA = $('.one .contentl-xiao:first');
	var jA = 0;
	var sA = function(){
		jA++;
		if(jA>=3){
			jA=0;
		}
		aaA.hide();
		$($('.one .contentl-xiao')[jA]).show();
		aaA = $($('.one .contentl-xiao')[jA]);
	}
	var timesA = setInterval(sA,1000);
	$('.a-one').click(function(){
		aaA.hide();
		clearInterval(timesA);
		jA = (jA>=2)?0:(jA+1);
		$($('.one .contentl-xiao')[jA]).show();
		aaA = $($('.one .contentl-xiao')[jA]);
	})
	$('.a-one').mouseout(function(){
		clearInterval(timesA);
		timesA = setInterval(sA,1000);
	})
	$('.b-one').click(function(){
		aaA.hide();
		clearInterval(timesA);
		jA = (jA<=0)?2:(jA-1);
		$($('.one .contentl-xiao')[jA]).show();
		aaA = $($('.one .contentl-xiao')[jA]);
	})
	$('.b-one').mouseout(function(){
		clearInterval(timesA);
		timesA = setInterval(sA,1000);
	})

	$('.two').find('.contentl-xiao:first').show();
	var aaB = $('.one .contentl-xiao:first');
	var jB = 0;
	var sB = function(){
		jB++;
		if(jB>=3){
			jB=0;
		}
		aaB.hide();
		$($('.two .contentl-xiao')[jB]).show();
		aaB = $($('.two .contentl-xiao')[jB]);
	}
	var timesB = setInterval(sB,1000);
	$('.a-two').click(function(){
		aaB.hide();
		clearInterval(timesB);
		jB = (jB>=2)?0:(jB+1);
		$($('.two .contentl-xiao')[jB]).show();
		aaB = $($('.two .contentl-xiao')[jB]);
	})
	$('.a-two').mouseout(function(){
		clearInterval(timesB);
		timesB = setInterval(sB,1000);
	})
	$('.b-two').click(function(){
		aaB.hide();
		clearInterval(timesB);
		jB = (jB<=0)?2:(jB-1);
		$($('.two .contentl-xiao')[jB]).show();
		aaB = $($('.two .contentl-xiao')[jB]);
	})
	$('.b-two').mouseout(function(){
		clearInterval(timesB);
		timesB = setInterval(sB,1000);
	})

	$('.three').find('.contentl-xiao:first').show();
	var aaC = $('.one .contentl-xiao:first');
	var jC = 0;
	var sC = function(){
		jC++;
		if(jC>=3){
			jC=0;
		}
		aaC.hide();
		$($('.three .contentl-xiao')[jC]).show();
		aaC = $($('.three .contentl-xiao')[jC]);
	}
	var timesC = setInterval(sC,1000);
	$('.a-three').click(function(){
		aaC.hide();
		clearInterval(timesC);
		jC = (jC>=2)?0:(jC+1);
		$($('.three .contentl-xiao')[jC]).show();
		aaC = $($('.three .contentl-xiao')[jC]);
	})
	$('.a-three').mouseout(function(){
		clearInterval(timesC);
		timesC = setInterval(sC,1000);
	})
	$('.b-three').click(function(){
		aaC.hide();
		clearInterval(timesC);
		jC = (jC<=0)?2:(jC-1);
		$($('.three .contentl-xiao')[jC]).show();
		aaC = $($('.three .contentl-xiao')[jC]);
	})
	$('.b-three').mouseout(function(){
		clearInterval(timesC);
		timesC = setInterval(sC,1000);
	})

	$('.four').find('.contentl-xiao:first').show();
	var aaD = $('.one .contentl-xiao:first');
	var jD = 0;
	var sD = function(){
		jD++;
		if(jD>=3){
			jD=0;
		}
		aaD.hide();
		$($('.four .contentl-xiao')[jD]).show();
		aaD = $($('.four .contentl-xiao')[jD]);
	}
	var timesD = setInterval(sD,1000);
	$('.a-four').click(function(){
		aaD.hide();
		clearInterval(timesD);
		jD = (jD>=2)?0:(jD+1);
		$($('.four .contentl-xiao')[jD]).show();
		aaD = $($('.four .contentl-xiao')[jD]);
	})
	$('.a-four').mouseout(function(){
		clearInterval(timesD);
		timesD = setInterval(sD,1000);
	})
	$('.b-four').click(function(){
		aaD.hide();
		clearInterval(timesD);
		jD = (jD<=0)?2:(jD-1);
		$($('.four .contentl-xiao')[jD]).show();
		aaD = $($('.four .contentl-xiao')[jD]);
	})
	$('.b-four').mouseout(function(){
		clearInterval(timesD);
		timesD = setInterval(sD,1000);
	})

	$('.five').find('.contentl-xiao:first').show();
	var aaE = $('.one .contentl-xiao:first');
	var jE = 0;
	var sE = function(){
		jE++;
		if(jE>=3){
			jE=0;
		}
		aaE.hide();
		$($('.five .contentl-xiao')[jE]).show();
		aaE = $($('.five .contentl-xiao')[jE]);
	}
	var timesE = setInterval(sE,1000);
	$('.a-five').click(function(){
		aaE.hide();
		clearInterval(timesE);
		jE = (jE>=2)?0:(jE+1);
		$($('.five .contentl-xiao')[jE]).show();
		aaE = $($('.five .contentl-xiao')[jE]);
	})
	$('.a-five').mouseout(function(){
		clearInterval(timesE);
		timesE = setInterval(sE,1000);
	})
	$('.b-five').click(function(){
		aaE.hide();
		clearInterval(timesE);
		jE = (jE<=0)?2:(jE-1);
		$($('.five .contentl-xiao')[jE]).show();
		aaE = $($('.five .contentl-xiao')[jE]);
	})
	$('.b-five').mouseout(function(){
		clearInterval(timesE);
		timesE = setInterval(sE,1000);
	})

	$('.six').find('.contentl-xiao:first').show();
	var aaF = $('.one .contentl-xiao:first');
	var jF = 0;
	var sF = function(){
		jF++;
		if(jF>=3){
			jF=0;
		}
		aaF.hide();
		$($('.six .contentl-xiao')[jF]).show();
		aaF = $($('.six .contentl-xiao')[jF]);
	}
	var timesF = setInterval(sF,1000);
	$('.a-six').click(function(){
		aaF.hide();
		clearInterval(timesF);
		jF = (jF>=2)?0:(jF+1);
		$($('.six .contentl-xiao')[jF]).show();
		aaF = $($('.six .contentl-xiao')[jF]);
	})
	$('.a-six').mouseout(function(){
		clearInterval(timesF);
		timesF = setInterval(sF,1000);
	})
	$('.b-six').click(function(){
		aaF.hide();
		clearInterval(timesF);
		jF = (jF<=0)?2:(jF-1);
		$($('.six .contentl-xiao')[jF]).show();
		aaF = $($('.six .contentl-xiao')[jF]);
	})
	$('.b-six').mouseout(function(){
		clearInterval(timesF);
		timesF = setInterval(sF,1000);
	})

	var colors =['#FD572D','#FFE1F1','#BBBBBB','#00579A','#FFD1DC','#0979DD','#FFA800','#DBCEBB','#F54315','#239EDA','#FFC6D5','#29A6FF','#E4E2E3','#3B80F7','#30C4FF']
	$($('.menu-imgchang')[0]).show();
	var showDiv = $($('.menu-imgchang')[0]);
	var showImgs;
	var xiao3,xiao4;
	$('.menu-nav li').hover(function(){
		showImgs = showImg;
		showDiv.hide();
		$('.menu-img-rightxiao').hide();
		var index = $('.menu-nav li').index(this);
		$($('.menu-imgchang')[index]).show();
		showDiv = $($('.menu-imgchang')[index])
		if(index==0){
			$('.menu').css({'background':color[im]});
			$('.menu-circle').show();
			showImg.show();
			xiao1.show();
			xiao2.show();
			clearInterval(times);
    		times = setInterval(imgLunbo,2000);
		}else{
			
			$('.menu-circle').hide();
			clearInterval(times);
			$($('.menu-img-rightxiao')[10+index*2]).show();
			$($('.menu-img-rightxiao')[10+index*2+1]).show();
			$('.menu').css({'background':colors[index-1]});
			showImgs.hide();
			$($('.menu-imgchang')[index].firstElementChild.firstElementChild).show();
			showImgs = $($('.menu-imgchang')[index].firstElementChild.firstElementChild);
		}
	})
	//-------------------------轮播大图-----------------------

	var color = ['#ffd1dc','#f9f389','#dbdbdb','#64c5a4','#e2e2e2','#b90af9'];
	$('.menu-imgchang img:first').show();
	$($('.menu-img-rightxiao')[0]).show();
	$($('.menu-img-rightxiao')[1]).show();
	var xiao1 = $($('.menu-img-rightxiao')[0]);
	var xiao2 = $($('.menu-img-rightxiao')[1]);
	var showImg = $('.menu-imgchang img:first');
	var im = 0;
	$('.menu-circle:first').css({'background':'red'});
	$('.menu').css({'background':color[0]});
	var showColor = $('.menu-circle:first');
	var imgLunbo = function(){
		im++;
		if(im>=6){
			im=0;
		}
		xiao1.hide();
		xiao2.hide();
		showImg.hide();
		$($('.menu-img-rightxiao')[im*2]).show();
		$($('.menu-img-rightxiao')[im*2+1]).show();
		xiao1 = $($('.menu-img-rightxiao')[im*2]);
		xiao2 = $($('.menu-img-rightxiao')[im*2+1]);
		showColor.css({'background':'black'});
		$($('.menu-imgchang img')[im]).show();
		$($('.menu-circle')[im]).css({'background':'red'});
		$('.menu').css({'background':color[im]});
		showImg = $($('.menu-imgchang img')[im]);
		showColor = $($('.menu-circle')[im]);
		
	}
	var times = setInterval(imgLunbo,2000);	
	$('.menu-circle').hover(function(){
		var j = $('.menu-circle').index(this);
		clearInterval(times);
		showImg.hide();
		showColor.css({'background':'black'});
		$($('.menu-imgchang img')[j]).show();
		$(this).css({'background':'red'});
		showImg = $($('.menu-imgchang img')[j]);
		showColor = $(this);
		$('.menu').css({'background':color[j]});
		im = j;
	},function(){
    	clearInterval(times);
    	times = setInterval(imgLunbo,2000);
  	});
  	$('.content-img').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({left:-10},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });

  $('.goTop').click(function(){
  	$({t:$(window).scrollTop()}).animate({t:0},{
  		duration:700,
  		step:function(){
  			$(window).scrollTop(this.t);
  		}
  	})
  })
  var time = setInterval(function(){
  		if(document.body.scrollTop>=500){
  			$('.top').show();
  		}else{
  			$('.top').hide();
  		}
  		var st = $(window).scrollTop()
  		$('.floor').css({'background':'none'});
  		// if(st>=619&&st<=1179){$($('.floor')[1]).css({'background':'#c40000'});}
  		if(st>=1159&&st<=1632){$('.floor').css({'background':'none'});$($('.floor')[0]).css({'background':'#c40000'});}
  		if(st>=1632&&st<=2065){$('.floor').css({'background':'none'});$($('.floor')[1]).css({'background':'#c40000'});}
  		if(st>=2065&&st<=2642){$('.floor').css({'background':'none'});$($('.floor')[2]).css({'background':'#c40000'});}
  		if(st>=2642&&st<=3095){$('.floor').css({'background':'none'});$($('.floor')[3]).css({'background':'#c40000'});}
  		if(st>=3095&&st<=3548){$('.floor').css({'background':'none'});$($('.floor')[4]).css({'background':'#c40000'});}
  		if(st>=3548&&st<=4125){$('.floor').css({'background':'none'});$($('.floor')[5]).css({'background':'#c40000'});}
  		if(st>=4125&&st<=4578){$('.floor').css({'background':'none'});$($('.floor')[6]).css({'background':'#c40000'});}
  		if(st>=4578&&st<=5031){$('.floor').css({'background':'none'});$($('.floor')[7]).css({'background':'#c40000'});}
  		if(st>=5031&&st<=5608){$('.floor').css({'background':'none'});$($('.floor')[8]).css({'background':'#c40000'});}
  		if(st>=5608&&st<=6051){$('.floor').css({'background':'none'});$($('.floor')[9]).css({'background':'#c40000'});}
  		if(st>=6051&&st<=6501){$('.floor').css({'background':'none'});$($('.floor')[10]).css({'background':'#c40000'});}
  		if(st>=6501&&st<=7211){$('.floor').css({'background':'none'});$($('.floor')[11]).css({'background':'#c40000'});}
  },20)



  // var aa = $( '<span>1</span>' );
  // console.dir(aa[0].innerHTML);

  // $({aa:10}).animate({aa:1000},{
  // 	duration:100,
  // 	step:function(){
  // 		console.log(this.aa);
  // 	}
  // })
	

	
	

	






}