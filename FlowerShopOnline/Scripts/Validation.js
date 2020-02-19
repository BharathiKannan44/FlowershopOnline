function ValidateForm() {
	
	var flag = true;
	
	//card Number Validation
	var x = document.getElementById("txtCardNumber");
	var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/; 
	if( x.value.trim() ==  ""){ 
		document.getElementById("requireCard").style.display = "block";
		document.getElementById("validateCard").style.display = "none";
		flag = false;
	} 
	else if(!x.value.match(regex)) {
		document.getElementById("requireCard").style.display = "none";
		document.getElementById("validateCard").style.display = "block";
		flag = false;
	}	
	else{
		document.getElementById("requireCard").style.display = "none";
		document.getElementById("validateCard").style.display = "none";
	}
	
	//Seurity Code Validation
	x = document.getElementById("txtCode");
	regex = /[0-9][0-9][0-9]/;
	if( x.value.trim() ==  ""){
		document.getElementById("requireCode").style.display = "block";
		document.getElementById("validateCode").style.display = "none";
		flag = false;
	} 
	else if(!x.value.match(regex)) {
		document.getElementById("requireCode").style.display = "none";
		document.getElementById("validateCode").style.display = "block";
		flag = false;
	}
	else{
		document.getElementById("requireCode").style.display = "none";
		document.getElementById("validateCode").style.display = "none";
	}
	
	// Expiry Date Validation
	var month = document.getElementById("txtMonth").selectedIndex;
	var year = document.getElementById("txtYear").selectedIndex;
	if( month == 0 || year == 0){
		document.getElementById("requireDate").style.display = "block";
		flag = false;
	} 
	else{
		document.getElementById("requireDate").style.display = "none";
	}
	
	//Name Validation
	x = document.getElementById("txtName");
    regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	if (x.value.trim() == "") {
		document.getElementById("requireName").style.display = "block";
		document.getElementById("validateName").style.display = "none";
		flag = false;
    }
	else if(!x.value.match(regex)) {
		document.getElementById("requireName").style.display = "none";
		document.getElementById("validateName").style.display = "block";
		flag = false;
	}
	else{
		document.getElementById("requireName").style.display = "none";
		document.getElementById("validateName").style.display = "none";
	}
	
	//Address Validation
	x = document.getElementById("txtAddress");
    if (x.value.trim() == "") {
        document.getElementById("requireAddress").style.display = "block";
		flag = false;
    }
	else{
		document.getElementById("requireAddress").style.display = "none";
	}
	
	//City validation
	x = document.getElementById("txtCity");
	regex = /[a-zA-Z]+(([a-zA-Z ]))$/;
	if (x.value.trim() == "") {
		document.getElementById("requireCity").style.display = "block";
		document.getElementById("validateCity").style.display = "none";
		flag = false;
    }
	else if(!x.value.match(regex)) {
		document.getElementById("requireCity").style.display = "none";
		document.getElementById("validateCity").style.display = "block";
		flag = false;
	}
	else{
		document.getElementById("requireCity").style.display = "none";
		document.getElementById("validateCity").style.display = "none";
	}
	
	x = document.getElementById("txtCountry").selectedIndex;
	if( x == 0 ){
		document.getElementById("requireCountry").style.display = "block";
		flag = false;
	} 
	else{
		document.getElementById("requireCountry").style.display = "none";
	}
	//Region validation
	x = document.getElementById("txtRegion");
	regex = /[a-zA-Z]+(([a-zA-Z ]))$/;
	if (x.value.trim() != "" && !x.value.match(regex)) {

		document.getElementById("validateRegion").style.display = "block";
		flag = false;
    }
	else{
		document.getElementById("validateRegion").style.display = "none";
	}
	
	//Validate Phone Number
	x = document.getElementById("txtPhone");
	regex = /^\+?([6-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	if (x.value.trim() != "" && !x.value.match(regex)) {
		document.getElementById("validateTelephone").style.display = "block";
		flag = false;
    }
	else{
		document.getElementById("validateTelephone").style.display = "none";
	}
	//Zip code valiation
	x = document.getElementById("txtZipCode");
    regex = /[0-9]{6}/;
    if (x.value.trim() == "") {
		document.getElementById("requirePostalCode").style.display = "block";
		document.getElementById("validatePostalCode").style.display = "none";
		flag = false;
    }
	else if(!x.value.match(regex)) {
		document.getElementById("requirePostalCode").style.display = "none";
		document.getElementById("validatePostalCode").style.display = "block";
		flag = false;
	}
	else{
		document.getElementById("requirePostalCode").style.display = "none";
		document.getElementById("validatePostalCode").style.display = "none";
	}
	
	//ValidateFax
	x = document.getElementById("txtFax");
	regex = /^\+?[0-9]{6,13}$/;
	if (x.value.trim() != "" && !x.value.match(regex)) {
		document.getElementById("validateFax").style.display = "block";
		flag = false;
    }
	else{
		document.getElementById("validateFax").style.display = "none";
	}
	
	//Email Validation
	x = document.getElementById("txtEmail");
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (x.value.trim() == "") {
		document.getElementById("requireEmail").style.display = "block";
		document.getElementById("validateEmail").style.display = "none";
		flag = false;
    }
	else if(!x.value.match(regex)) {
		document.getElementById("requireEmail").style.display = "none";
		document.getElementById("validateEmail").style.display = "block";
		flag = false;
	}
	else{
		document.getElementById("requireEmail").style.display = "none";
		document.getElementById("validateEmail").style.display = "none";
	}
	
	if(flag == true){
		alert("Paid Sucessfully");
	}
	
}


