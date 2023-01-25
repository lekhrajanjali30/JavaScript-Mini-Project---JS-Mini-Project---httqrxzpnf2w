
let email = document.getElementById('Email');
let password = document.getElementById('Password');

function validated() {
	// e.preventDefault();
	if(emailIdVerify() && passwordVerify()){
		return true;
	}
	else{
		return false;
	}

}

let emailIdVerify = () => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	} else {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
};

let passwordVerify = ()=> {
	if(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password.value)){
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
	else {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
}
