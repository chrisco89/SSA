$('document').ready( function() {
	
// Logout	
	$('.logout > a').click( function(e) {
		$(this).next().slideDown('fast');
		e.preventDefault();
	});
	$('.logout').mouseleave( function() {
		$(this).find('.dropdown').slideUp('fast');
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
	
	/*$('table .thumb').click( function() {
		$('.lightbox.image').fadeIn();
	});
	
	$('td.date').click( function() {
		$(this).attr('contentEditable', 'true');
	});*/
	
	$('#bottompanel .add').click( function(e) {
		$('.lightbox.adding').fadeIn('fast');
		$('.adding .addschool').attr('href', '/logged-in-2.html');
		e.preventDefault();
	});
	
	$('.showfaq').click( function() {
		$('.wrapper').toggleClass('faqactive');
	});
	
	
	$('.btn-holder.send').click( function(e) {
		$('.module.sendexample table, .module.sendexample .btn, .module.sendexample .uploader, .module.sendexample .footer').hide();
		$('.module.sendexample .sent').fadeIn('fast');
		e.preventDefault();
	});
	
	
});