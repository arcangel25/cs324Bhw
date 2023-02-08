$(document).ready(function(){
	//hides the message that will be displayed upon pressing order
	$(".message").hide();
	//listens for a click on the order button
	//if 'vegan' is found in text box, an alert will display
		$(".button").click(function(){
		var text = $("#textField").val();
		if(text.includes("vegan")){
		  alert("Cheesecake contains dairy.");
		}else{
		//finds flavor, quantiity, and text from user
		//hides order form, displays thank you message
		var flavor = $("input[type='radio']:checked").val();
		var quant = $('select#dropdown option:selected').val();
		$(".order").hide();
		$("#details").text("Flavor: " + flavor + "  | Quantity: " + quant + " | Notes: " + text);
		$(".message").show();
	  }
	});
	//Determines which div in the drop down menu was clicked
	//changes the label accordingly
	$('div.drop').click(function() {
	  var month = $(this).text();
	  $(".dropbtn").text(month);
  });
  });