(function($){
	'use strict'
	// Our Code

	//$('h1').hide();
	$('p.content').show();
	$('h2').html('Downloading <em>jQuery</em>');

	$('p.content').prepend('<b>Good Evening!</b> ');

	$('h1.xyz').removeClass('xyz');
	$('h1').addClass('abc');

	//$('.container').find('p').show();

	//$('p.content').parent('.container').css('background', 'red');

	$('p.content b').css({ 
		color : '#fbc531',
		backgroundColor : '#353b48',
		fontSize : 20
	 });


	/*$('h1').on('click', function () {
		$('.post').show();
	})

	$('p.content b').on('click', function(){
		$('.post').hide();
	} );*/

	$('.post button').on( 'click', function(){
		$('.photo').fadeIn();
	} )

	$('.photo i').on( 'click', function(){
		$('.photo').fadeOut();
	} );

	



	// End
}) (jQuery);