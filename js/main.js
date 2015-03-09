$('document').ready( function() {
	
// Logout	
	$('.logout > a').click( function(e) {
		$(this).next().slideDown('fast');
		e.preventDefault();
	});
	$('.logout .dropdown').mouseleave( function() {
		$(this).slideUp('fast');
	});
	
	$('.addimage').click( function(e) {
		$(this).slideUp('fast');
		$(this).next().slideDown('fast');
		e.preventDefault();
	});
	
	$('.lightbox .close, .lightbox .overlay, .lightbox .btn').click( function() {
		$(this).parents('.lightbox').fadeOut();
	});
	
	$('.uploader').click( function() {
		$(this).hide();
		$(this).next().fadeIn('slow');
		$('input.focus').focus();
		$('.existing').hide();
	});
	
	$('table .thumb').click( function() {
		$('.lightbox.image').fadeIn();
	});
	
	$('td.date').click( function() {
		$(this).attr('contentEditable', 'true');
	});
	
	
});