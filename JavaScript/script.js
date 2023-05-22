function Sabin()
{
    var name=document.forms["validation"]["name"].value;
    var name=document.forms["validation"]["email"].value;
    var name=document.forms["validation"]["message"].value;
    if(name=="" || email=="" || message=="")
    {
        alert("Fill up all the space");
    }
    else
    {
        alert("Thank you for filling up the form");
    }
}