//Sophie Arcangel

$(document).ready(function(){
	//hides the message that will be displayed upon pressing order
	$(".message").hide();
	
	//listens for a click on the order button
	//if 'vegan' is found in text box, an alert will display
	vegan = function(){
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
  }
	$(".button").click(vegan);

	//Determines which div in the drop down menu was clicked
	//changes the label accordingly
	dropdown = function(){
		var month = $(this).text();
		$(".dropbtn").text(month);
		//get data from orders.js
		$.post('/orders',function(data){
			//access individual objects from the array for each val
			$("#cherry").text(data.data[0].quantity + " " + data.data[0].topping);
			$("#choc").text(data.data[1].quantity + " " + data.data[1].topping);
			$("#plain").text(data.data[2].quantity + " " + data.data[2].topping);
		}, "json");
  	}
	$("div.drop").click(dropdown);
});