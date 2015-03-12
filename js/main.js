$('document').ready( function() {
	
    var schoolArray = [
		'Skogsbacken',
		'Skogsstjärnan',
		'Skogsgläntan',
		'Skogslandet',
		'Skogsbacken',
		'Skogsbyns Friförskola',
		'Skogsmarken',
		'Skogsåsen',
		'Skogsrosen',
		'Tempeltrappan',
		'Tegeludden',
		'Terrassen',
		'Stormhatten',
		'Terpet',
		'Terrärier',
		'ExempelTer'
		];
		
		$( '#schools' ).autocomplete({
			source: schoolArray
		});
	
		$('#schools').attr('autocomplete', 'on');
	
	
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
		$(this).parents('.lightbox').fadeOut('fast');
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
	
	$('.tools').click( function() {
		$('.lightbox.deleterow').fadeIn();
	});
	
	$('.removetr').click( function() {
		$('#deleteRow').addClass('deleting').fadeOut('slow');
	});
	
	$('.faq-container .item .question').click( function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
	});
	
	$('a.return').click( function(e) {
		e.preventDefault();
		$('.lightbox.return').fadeIn();
	});
	
});