$('document').ready( function() {
	var flag = true;
	
	$('table .thumb').click( function() {
		$('.lightbox.image').fadeIn();
	});
	
	$('td.date').click( function() {
		if(flag){
			var value = $(this).text();
			var inputElem = "<input type='text'value='"+value+"'/>"; 
			$(this).text("");
			$(this).append(inputElem); 
			flag=false;
			e.stopPropagation(); // This is the preferred method.
			return false;
		}
		else{
				
		}	
		
		//$(this).attr('contentEditable', 'true');
	});
	
	$(document).keypress(function(e) {
   		if(e.which == 13 && flag == false) { //the input is activated
        	var newVal = $('td.date').find('input').val();
        	//var label = "<input type='text'value='"+value+"'/>";
			var thisIs = $('td.date').find('input');
			
        	thisIs.parent().append(newVal);
        	
        	thisIs.remove('input');
        	
        	flag=true;
		}
	});
	
});
