function dataValidation(){
    var fname= document.getElementById("fName").value;
    var lname= document.getElementById("lName").value;
    var age= document.getElementById("age").value;
    var gender= document.getElementById("gender").value;
    
    
    if(/\d/.test(fname)){
                    window.alert("Please write alphabets only in First name field"); 
                    return false;
                }
                
    if(/\d/.test(lname)){
                    window.alert("Please write alphabets only in Last name field"); 
                    return false;
                } 
                
     if(/[a-zA-Z]/.test(age)){
                    window.alert("Please fill out digits only in Age field");
                    return false;
                } 

    else{
                    window.alert("Succesfully sent");
    }
    
                
    
}
