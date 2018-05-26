function myFunction()
{
	
	//Get all the radio buttons, create an array of radio buttons 
	var radioButtons = document.getElementsByName("sizeOption");

	//get all elements that have input tag name 
	var inputTags = document.getElementsByTagName("input");

	//output 
	var outputTextBox = document.getElementById("txtOutput");
	var toppingselected="";
	var size;

	//loop through the radio button array determine what size pizza
	for(var index  = 0; index < radioButtons.length; index++)
	{
		if(radioButtons[index].checked)
		{
			//output the value
			 size = radioButtons[index].value;
			 
		}
	}
	

	//loop through the checkbox determine which option is selected
	for (var i=0, length = inputTags.length; i<length; i++)
   {
     if ((inputTags[i].type == 'checkbox') &&(inputTags[i].checked))
	 {
		 
        toppingselected+=inputTags[i].value;
		toppingselected+="\n";
		
     }
  }
    
	outputTextBox.value = "Size: " + size+ "\n" + "Toppings: " + "\n" + toppingselected;
	

}