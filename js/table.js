$('document').ready( function() {
	var flag = true;
	
	$('table .thumb').click( function() {
		$('.lightbox.image').fadeIn();
	});
	
	$('td.date').click( function() {
		if(flag){
			var value = $(this).text();
			var inputElem = "<input type='text' value='"+value+"'/>"; 
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
	
	$('td').click(function (){
		if($('td.thumb') < 0) {
			return false;
		}
		if (flag){
			var value = $(this).text();
			var inputElem = "<input type='text' class='focus' value='"+value+"'/>"; 
			$(this).text("");
			$(this).append(inputElem);
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
	
});
