$('document').ready( function() {
	var flag = true;
	var editType = "";
	
	$('table .thumb').click( function() {
		$('.lightbox.image').fadeIn();
	});
	
	/*$('body').keyup(function(e) {
    	console.log('keyup called');
	    var code = e.keyCode || e.which;
    	if (code == '9') {
	    	alert('Tab pressed');
    	}
	});*/	
	
	
	$('td.editable').click(function (e){
		if($(this).hasClass('textarea')){
			var value = $(this).text();
			var inputElem = "<textarea id='edit'>"+value+"</textarea>"; 
			editType = "textA";
		}
		else{
			var value = $(this).text();
			var inputElem = "<input type='text' id='edit' value='"+value+"'/>"; 
			editType = "input";
		}
		if (flag){
			$(this).text("");
			$(this).append(inputElem);

			$('#edit').focus();
			$('#edit').setCursorToTextEnd();
			if (e.which == 9) {
				alert("tab");
			}
			flag = false;
			e.stopPropagation();			
			return false;
		}
		else{
			return false;
		}
	});	
	
	
	$("#edit").on("keydown", function(e) {
	    var code = e.keyCode || e.which;
	    
	    if ( code == 13 || code == 9 ) {
	        e.preventDefault();
	        alert("sup");
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
	
	//If pressing enter
	$(document).keypress(function(e) {
   		if(e.which == 13 && flag == false) { //the input is activated
			closeLock();
		}
	});	
  	
  	//If click outside the document
  	$(document).click(function(e) {
	  	if(e.button == 0 && flag == false){
        	closeLock();
	  	}
  	});
  	
  	//If click in the table
  	$('table').click(function(e) {
		if(e.button == 0 && flag == false){
        	closeLock();
	  	} 	
  	});
	
	/*$('td').click(function(e) {
		if($(this).children("input").length > 0){			
		
		}
		else{
			closeLock();
			if($(this).hasClass('textarea')){
				var value = $(this).text();
				var inputElem = "<textarea id='edit'>"+value+"</textarea>"; 
				editType = "textA";
			}
			else{
				var value = $(this).text();
				var inputElem = "<input type='text' id='edit' value='"+value+"'/>"; 
				editType = "input";
			}
			if (flag){
				$(this).text("");
				$(this).append(inputElem);
	
				$('#edit').focus();
				$('#edit').setCursorToTextEnd();
				if (e.which == 9) {
					alert("tab");
				}
				flag = false;
				e.stopPropagation();			
				return false;
			}
			else{
				return false;
			}
		}
  	});*/
	
	//Function to set the cursor to the end
	(function($){
    $.fn.setCursorToTextEnd = function() {
        var $initialVal = this.val();
        this.val($initialVal);
    };
	})(jQuery);
	
	function openLock(){
		
	}
	
	function closeLock(){
		if (editType=="textA"){
			var newVal = $('td.editable').find('textarea').val();
			var thisIs = $('td.editable').find('textarea');        	
        	
	        thisIs.parent().append(newVal);
	        thisIs.remove('textarea'); 
	        flag = true; 

		}
		else{
			var newVal = $('td.editable').find('input').val();
			var thisIs = $('td.editable').find('input');        	
        	
	        thisIs.parent().append(newVal);
	        thisIs.remove('input'); 
	        flag = true; 
		}
		
	}
});

