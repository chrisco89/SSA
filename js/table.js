$('document').ready( function() {
	var flag = true;
	var editType = "";
	var nextLabel = "";
	var lastValue = "";
	var  prevLastValue = "";
	
	$('table .thumb').click( function() {
		$('.lightbox.image').fadeIn();
	});
	
	$('body').keyup(function(e) {
		if(flag==false){
		    var code = e.keyCode || e.which;
	    	if (code == '9') {
		    	closeLock();
		    	if($('td.editable').hasClass('nextEditable')){
					$('td.nextEditable').trigger("click");
		    	}
	    	}
    	}
	});	
	
	
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
			$(this).parent('tr').removeClass('lastEditable');
			
			lastValue = $(this).parent('tr').find('td:eq(7)').html();
			prevLastValue = $(this).parent('tr').find('td:eq(6)').html();
			
			nextLabel = $(this).closest('td').next().text(); //Saves value of next label
			$(this).closest('td').next().addClass('nextEditable');
			
			if (prevLastValue != ""){
				$(this).closest('td').next().addClass('lastEditable');
			}
			
			
			if($(this).hasClass('nextEditable')){
				$(this).removeClass('nextEditable');
			}
			
			if($("tr:last"))
			
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
	
	//Checks that the table rows are valid or not
	//checkRows();
	
	function checkRows(){
		$('table tr').each(function(){
		    $('td',this).each(function() {
		        if($("td:empty")) {
		            $(this).parent().addClass('invalid');
		        }
		        else{
		        	$(this).parent().addClass('valid');
		        }
		    });	
		});
	}
	
	
	//If pressing enter
	$(document).keypress(function(e) {
		var code = e.keyCode || e.which;
   		if(e.which == 13 && flag == false) { //the input is activated
			closeLock();
		}
		if(e.which == 9 && flag == false) { //the input is activated
			alert("its a tab");
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
	
	
	function closeLock(){
		if (editType=="textA"){
			var newVal = $('td.editable').find('textarea').val();
			var thisIs = $('td.editable').find('textarea');        	
        	
	        thisIs.parent().append(newVal);
	        thisIs.remove('textarea'); 
	        flag = true; 
	        
	        if(lastValue != ""){
	        	$('td.editable').parent().addClass('valid');	    
	        }

		}
		else{
			var newVal = $('td.editable').find('input').val();
			var thisIs = $('td.editable').find('input');        	
        	
	        thisIs.parent().append(newVal);
	        thisIs.remove('input');
	        flag = true; 
	        
	        if(lastValue != ""){
	        	$('td.lastEditable').parent().addClass('valid');
	        	$('td.lastEditable').parent().removeClass('added');
	        }
	        
		}
		
		
	}
});

