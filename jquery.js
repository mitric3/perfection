$(document).ready(function () {

	var initPageCounter = true;
	
	// intro animation page
	$('.red').animate({'margin-top': 0 },2000, function  () {
		$('.hide').fadeIn(1500);	

	});
	
	$('.logo').animate({'margin-top': 0}, 2000);

	//span button, ulaz u sajt
	setInterval(function () {
		$('.span').toggleClass('zebra', 2000);
	}, 1000);

	// slajderi
	setTimeout(function () {
		$('.sideCool1').show().animate({"margin-left": '-=150%'}, 2000);
	}, 1800);

	setTimeout(function () {
		$('.sideCool2').show().animate({"margin-left": '+=100%'}, 1900);
	}, 2000);

	setTimeout(function () {
		$('.from_top').show().animate({"margin-top": "+=110%"}, 1700)
	}, 2000);

	setTimeout(function () {
		$('.from_bottom').show().animate({"margin-top": "-=110%"},1700)
	},2000);

	//=========================================================================
	// animated background function


	// dodati return na kraju
	// end of animated background

	//=====================================================================


	$('.dva').animate({'opacity': 1, 'left': '0px'},2250);
	$('.tri').animate({'opacity': 1, 'right': '0px'},2250);
	

	$('.jedan').animate({'opacity': 1, 'left': '0px'},3200);
	$('.cetiri').animate({'opacity': 1, 'right': '0px'},3200);
	
	$('.pet').animate({'opacity': 1, 'right': '-500px'}, 2500);
	$('.sest').animate({'opacity': 1, 'left': '0px'}, 2500);

	//TOSRUS LIGHTBOX OVO ONO


	function tosrus(){
		$('#links a').tosrus({
			buttons: 'inline',
			pagination: {
				add: true,
				type: 'thumbnails'
			}
		});
	}
	

/*========= NAVIGATION BAR ON CLICK  ADD CLASS ================== */

	$("#main-menu a").bind('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		var pageName = $(this).attr('id');

		$("a.keep").removeClass("keep");
		$(this).addClass("keep");

		if(pageName === 'alati.html' || pageName === 'products.html'){
			$('.header2').attr('class', 'header');
			$('body').addClass('body-top');
		}
		else {
			$('.header').attr('class','header2');
			$('body').removeClass('body-top');
		}

		$('#main-container').load('./'+ pageName, function(){
			if(pageName === 'products.html'){
				bindProductDetails();
			}
			tosrus();
		});
	});

	function bindProductDetails(){
		$("#products-wrapper a").unbind('click');
		$("#products-wrapper a").bind('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			var pageName = $(this).attr('id');

			$('#main-container').load('./'+ pageName, function(){
				tosrus();
			});
		});
	}

	

	if(initPageCounter){
		$("#main-menu li:first a").trigger('click');
		initPageCounter = false;
	}

	//

});