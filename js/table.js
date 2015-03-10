$('document').ready( function() {
	var flag = true;
	
	$('table .thumb').click( function() {
		$('.lightbox.image').fadeIn();
	});
	
	
	$('td').click(function (){
		if($('td.thumb') < 0) {
			return false;
		}
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
	
	
	$(document).keypress(function(e) {
   		if(e.which == 13 && flag == false) { //the input is activated
        	var newVal = $('td.date').find('input').val();
			var thisIs = $('td.date').find('input');
			var newValG = $('td').find('input').val();
			var thisIsG = $('td').find('input');
			
        	thisIs.parent().append(newVal);
        	thisIs.remove('input');
        	
        	
        	thisIsG.parent().append(newValG);
        	thisIsG.remove('input');        				
        	
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
