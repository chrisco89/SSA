$('document').ready( function() {
	var flag = true;
	
	$('table .thumb').click( function() {
		$('.lightbox.image').fadeIn();
	});
	
	
	$('td.editable').click(function (){
		if (flag){
			var value = $(this).text();
			var inputElem = "<input type='text' id='edit' value='"+value+"'/>"; 
			$(this).text("");
			$(this).append(inputElem);

			$('#edit').focus();
			$('#edit').setCursorToTextEnd();
			
			flag = false;
			e.stopPropagation();
			return false;
		}
		else{
			return false;
		}

	});
	
	//Checks that the table rows are valid or not
	$('table tr').each(function(){
	    $('td',this).each(function() {
	        if($(this).html() != '') {
	            $(this).parent().addClass('valid');
	        }
	        else{
		        $(this).parent().addClass('invalid');
	        }
	    });	
	});
	
	$(document).keypress(function(e) {
   		if(e.which == 13 && flag == false) { //the input is activated
			var newVal = $('td.editable').find('input').val();
			var thisIs = $('td.editable').find('input');        	
        	
        	thisIs.parent().append(newVal);
        	thisIs.remove('input');        				
        	
        	flag=true;
		}
	});
	
	$("table tr").each(function () {
		
  	});
	
	
	//Function to set the cursor to the end
	(function($){
    $.fn.setCursorToTextEnd = function() {
        var $initialVal = this.val();
        this.val($initialVal);
    };
	})(jQuery);
});
