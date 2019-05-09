function myValidation()
{
  	if (document.forms["jobForm"]["Fname"].value == "") 
  	{
    alert("Name must be filled out");
    return false;
	}
	else if (document.forms["jobForm"]["Lname"].value == "") 
  	{
    alert("Name must be filled out");
    return false;
	}
	else if (document.forms["jobForm"]["email"].value == "") 
  	{
    alert("Email must be filled out");
    return false;
	}
	else if (document.forms["jobForm"]["phone"].value == "") 
  	{
    alert("Contact information must be filled out");
    return false;
	}
	else 
	{
		alert("Form submitted");
		return true;
	}
}