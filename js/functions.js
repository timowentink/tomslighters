/* preload images function */
var preloaded = new Array();

function preload_images() {
    for (var i = 0; i < arguments.length; i++){
        preloaded[i] = document.createElement('img');
        preloaded[i].setAttribute('src',arguments[i]);
    };
};


function getHeight() {
	var myHeight = 0;
	if( typeof( window.innerHeight ) == 'number' ) {
	//Non-IE
	myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientHeight ) ) {
	//IE 6+ in 'standards compliant mode'
	myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientHeight ) ) {
	//IE 4 compatible
	myHeight = document.body.clientHeight;
	}
	return [myHeight];
}

$(window).resize(function() {
	var current_height = getHeight();

	$('.mobile_menu').height( current_height );

});

$(window).scroll(function() {

	var current_height_scrolled = 200;

	if ($(this).scrollTop()>current_height_scrolled) {
		//alert('scrolled');
    //$('#menuicon_desktop').removeClass('active');
    //$('.desktop_menu').removeClass('active');
    //$('#header').removeClass('menu_active');


	} else {

    //$('#menuicon_desktop').addClass('active');
    //$('.desktop_menu').addClass('active');

    //$('#header').addClass('menu_active');
	}

});

jQuery(document).ready(function() {

  //add height variable
	var current_height = getHeight();

	/* MOBILE NAV */
	//  -- start mobile menu functions -- //
	$('#menuicon_mobile').click(function() {
    $(this).addClass('active');
		$('.mobile_menu').slideDown();
	});

	$('#mobile_menu_close').click(function() {
		$('.mobile_menu').fadeIn('fast');
	});

	$('.mobile_menu.mobile_only a').click(function(e) {
		$('.mobile_menu.').fadeOut('fast');
	});

  // --  start desktop menu functions -- //

  //  -- start  menu functions -- //
  $('#menuicon_desktop').click(function() {
    //alert('clicked');
    $(this).toggleClass('active');
    $('.desktop_menu').toggleClass('active');
    $('#header').toggleClass('menu_active');

  });

  $('#menu a').click(function(e) {
    $('#menuicon_desktop').removeClass('active');
    $('.desktop_menu').removeClass('active');
    $('#header').removeClass('menu_active');
  });


	// add submenu trigger item
	$( ".mobile_menu .menu-item-has-children" ).append( "<div class='submenu_trigger'>&nbsp;</div>" );

	$( ".mobile_menu .menu-item-has-children" ).hasClass('current-menu-item', function(){
		//$(this).find('.submenu_wrap').addClass('open');
	});

  //on click
	$('.submenu_trigger').click(function() {

		$(this).toggleClass('open');
		$(this).toggleClass('closed');

		// first close all open submenu items
		$('.submenu_wrap.open').slideToggle('fast',  function() {
				$(this).removeClass('open');
				$(this).addClass('closed');
				$(this).next('.submenu_trigger').removeClass('open');
				$(this).next('.submenu_trigger').addClass('closed');
		});

		// then open current item
		$(this).parent().find('.submenu_wrap.closed').slideToggle('fast', function() {
				$(this).toggleClass('open');
				$(this).toggleClass('closed');
		});
	});

	// add container element to sub-menu items
	$( ".sub-menu" ).wrap( "<div class='submenu_wrap closed'><div class='submenu_wrap_inner width_max'></div></div>" );

	// -- end mobile menu functions -- //

	/* TABS */
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$( "#search_trigger").click(function(e) {
		e.preventDefault();
		$( "#search" ).slideToggle();
	});



});
