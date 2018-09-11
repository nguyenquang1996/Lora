var userName = document.getElementById("input-username");
var errorUserNamePicture = document.getElementById("error-username-picture");
var errorUserNameText = document.getElementById("error-username");
var lblUserName = document.getElementById("lbl-username");
var checkInputTextBoxOk = 0;

var regExpr = /[^a-zA-Z0-9-. ]/g;

var checkUserName = (function() {

	function checkText() {
		if(userName.value === "") {
			checkEmpty();
		} else {
			if(!userName.value.match(regExpr)) {
				if(userName.value.length < 3) {
					checkTextMiniSize();
				} else {
					if(userName.value.length > 8) {
						checkTextMaxSize();
					} else {
						checkTextOk();
					}
				}
			} else {
				checkSpecialCharater();
			}			
		}
	}

	function checkSpecialCharater() {
		userName.style.borderBottomColor = "#E7AA49";
		errorUserNamePicture.style.content = "url('images/pacman.png')";
		errorUserNamePicture.style.display = "inline";
		errorUserNameText.style.display = "inline";
		errorUserNameText.textContent = "Please do not use special characters";
		errorUserNameText.style.color = "#E7AA49";
		lblUserName.style.color = "#E7AA49";
		checkInputTextBoxOk = 0;
	}

	function checkEmpty() {
		userName.style.borderBottomColor = "#D80022";
		errorUserNamePicture.style.content = "url('images/close.png')";
		errorUserNamePicture.style.display = "inline";
		errorUserNameText.style.display = "inline";
		errorUserNameText.textContent = "Please enter a username.";
		errorUserNameText.style.color = "#D80022";
		lblUserName.style.color = "#D80022";
		checkInputTextBoxOk = 0;
	}

	function checkTextMiniSize() {
		userName.style.borderBottomColor = "#0295AA";
		errorUserNamePicture.style.content = "url('images/arrow.png')";
		errorUserNamePicture.style.display = "inline";
		errorUserNameText.style.display = "inline";
		errorUserNameText.textContent = "Username must be 3-8 characters";
		errorUserNameText.style.color = "#0295AA";
		lblUserName.style.color = "#0295AA";
		checkInputTextBoxOk = 0;
	}

	function checkTextMaxSize() {
		userName.style.borderBottomColor = "#CCE4FF";
		errorUserNamePicture.style.content = "url('images/width.png')";
		errorUserNamePicture.style.display = "inline";
		errorUserNameText.style.display = "inline";
		errorUserNameText.textContent = "Username must be 3-8 characters";
		errorUserNameText.style.color = "#CCE4FF";
		lblUserName.style.color = "#CCE4FF";
		checkInputTextBoxOk = 0;
	}

	function checkTextOk() {
		userName.style.borderBottomColor = "#02F59A";
		errorUserNamePicture.style.content = "url('images/tick.png')";
		errorUserNamePicture.style.display = "inline";
		errorUserNameText.style.display = "inline";
		errorUserNameText.textContent = "";
		errorUserNameText.style.color = "#02F59A";
		lblUserName.style.color = "#02F59A";
		checkInputTextBoxOk = 1;
	}

	return {
		check1:checkText
	};

})();

function checkTextWarning() {
	userName.style.borderBottomColor = "yellow";
	errorUserNamePicture.style.content = "url('images/warning.png')";
	errorUserNamePicture.style.display = "inline";
	errorUserNameText.style.display = "inline";
	errorUserNameText.textContent = "warning";
	errorUserNameText.style.color = "yellow";
	lblUserName.style.color = "yellow";
	checkInputTextBoxOk = 0;
}

userName.addEventListener("click", function() {
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkUserName.check1();
});

userName.addEventListener("focus", function() {
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkUserName.check1();
});

userName.addEventListener("keyup", function() {
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkUserName.check1();
});

var passWord = document.getElementById("input-password");
var lblPassWord = document.getElementById("lbl-password");
var errorPassWordPicture = document.getElementById("error-password-picture");
var errorPassWordText = document.getElementById("error-password");
var checkInputPassWordOk = 0;

var lowercaseLetter = /[a-z]/g;
var uppercaseLetter = /[A-Z]/g;
var numberLetter = /[0-9]/g;

var checkPassWord = (function() {

	function checkPass() {
		if(passWord.value === "") {
			checkPassEmpty();
		} else {
			if(!passWord.value.match(regExpr)) {
				if(passWord.value !== rePassWord.value || (passWord.value === rePassWord.value && checkInputPassWordOk === 0)) {
					checkrePassWarning();
					if(!passWord.value.match(lowercaseLetter)) {
						checkPasswordLowercaseLetter();
					} else {
						if(!passWord.value.match(uppercaseLetter)) {
							checkPasswordUppercaseLetter();
						} else {
							if(!passWord.value.match(numberLetter)) {
								checkPasswordNumberLetter();
							} else {
								if(passWord.value.length < 6) {
									checkPassMiniSize();
								} else {
									if(passWord.value.length > 16) {
										checkPassMaxSize();
									} else {
										if(passWord.value === rePassWord.value) {
											checkRePassOk();
										}
										checkPassOk();
									}
								}
							}			
						}	
					}	
				}
			} else {
				checkSpecialCharater();
			}			
		}
	}

	function checkPasswordNumberLetter() {
		passWord.style.borderBottomColor = "#FC00FF";
		errorPassWordPicture.style.content = "url('images/cubes.png')";
		errorPassWordPicture.style.display = "inline";
		errorPassWordText.style.display = "inline";
		errorPassWordText.textContent = "Passwords must least one number";
		errorPassWordText.style.color = "#FC00FF";
		lblPassWord.style.color = "#FC00FF";
		checkInputPassWordOk = 0;
	}

	function checkPasswordUppercaseLetter() {
		passWord.style.borderBottomColor = "#366DB6";
		errorPassWordPicture.style.content = "url('images/uppercase.png')";
		errorPassWordPicture.style.display = "inline";
		errorPassWordText.style.display = "inline";
		errorPassWordText.textContent = "Passwords must least one capital letter";
		errorPassWordText.style.color = "#366DB6";
		lblPassWord.style.color = "#366DB6";
		checkInputPassWordOk = 0;
	}

	function checkPasswordLowercaseLetter() {
		passWord.style.borderBottomColor = "white";
		errorPassWordPicture.style.content = "url('images/lowercase.png')";
		errorPassWordPicture.style.display = "inline";
		errorPassWordText.style.display = "inline";
		errorPassWordText.textContent = "Passwords must least one regular letter";
		errorPassWordText.style.color = "white";
		lblPassWord.style.color = "white";
		checkInputPassWordOk = 0;
	}

	function checkSpecialCharater() {
		passWord.style.borderBottomColor = "#E7AA49";
		errorPassWordPicture.style.content = "url('images/pacman.png')";
		errorPassWordPicture.style.display = "inline";
		errorPassWordText.style.display = "inline";
		errorPassWordText.textContent = "Please do not use special characters";
		errorPassWordText.style.color = "#E7AA49";
		lblPassWord.style.color = "#E7AA49";
		checkInputPassWordOk = 0;
	}

	function checkPassEmpty() {
		passWord.style.borderBottomColor = "#D80022";
		errorPassWordPicture.style.content = "url('images/close.png')";
		errorPassWordPicture.style.display = "inline";
		errorPassWordText.style.display = "inline";
		errorPassWordText.textContent = "Please enter a password.";
		errorPassWordText.style.color = "#D80022";
		lblPassWord.style.color = "#D80022";
		checkInputPassWordOk = 0;
	}
	function checkPassMiniSize() {
		passWord.style.borderBottomColor = "#0295AA";
		errorPassWordPicture.style.content = "url('images/arrow.png')";
		errorPassWordPicture.style.display = "inline";
		errorPassWordText.style.display = "inline";
		errorPassWordText.textContent = "Password must be 6-16 characters";
		errorPassWordText.style.color = "#0295AA";
		lblPassWord.style.color = "#0295AA";
		checkInputPassWordOk = 0;
	}

	function checkPassMaxSize() {
		passWord.style.borderBottomColor = "#CCE4FF";
		errorPassWordPicture.style.content = "url('images/width.png')";
		errorPassWordPicture.style.display = "inline";
		errorPassWordText.style.display = "inline";
		errorPassWordText.textContent = "Password must be 6-16 characters";
		errorPassWordText.style.color = "#CCE4FF";
		lblPassWord.style.color = "#CCE4FF";
		checkInputPassWordOk = 0;
	}

	function checkPassOk() {
		passWord.style.borderBottomColor = "#02F59A";
		errorPassWordPicture.style.content = "url('images/tick.png')";
		errorPassWordPicture.style.display = "inline";
		errorPassWordText.style.display = "inline";
		errorPassWordText.textContent = "";
		errorPassWordText.style.color = "#02F59A";
		lblPassWord.style.color = "#02F59A";
		checkInputPassWordOk = 1;
	}

	return {
		check2:checkPass
	};

})();

function checkPassWarning() {
	passWord.style.borderBottomColor = "yellow";
	errorPassWordPicture.style.content = "url('images/warning.png')";
	errorPassWordPicture.style.display = "inline";
	errorPassWordText.style.display = "inline";
	errorPassWordText.textContent = "warning";
	errorPassWordText.style.color = "yellow";
	lblPassWord.style.color = "yellow";
	checkInputPassWordOk = 0;
}

passWord.addEventListener("click", function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkPassWord.check2();
});

passWord.addEventListener("focus", function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkPassWord.check2();
});

passWord.addEventListener("keyup", function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkPassWord.check2();
});

var checkHideShowPassword = document.getElementById("hide-show-password");

var checkShowOrHidePassWord = (function() {

	function ShowOrHide() {
		checkShowHide();
	}

	function checkShowHide() {
		if(passWord.type == "password") {
			passWord.type = "text";
			checkHideShowPassword.style.content = "url('images/view.png')";
		} else {
			passWord.type = "password";
			checkHideShowPassword.style.content = "url('images/hide.png')";
		}
	}

	return {
		checkShowOrHide:ShowOrHide
	};

})();

checkHideShowPassword.addEventListener("click", function() {
	checkShowOrHidePassWord.checkShowOrHide();
});

var rePassWord = document.getElementById("input-re-password");
var reLblPassWord = document.getElementById("lbl-re-password");
var reErrorPassWordPicture = document.getElementById("error-re-password-picture");
var reErrorPassWordText = document.getElementById("error-re-password");
var reCheckInputPassWordOk = 0;

var checkRePassWord = (function() {

	function checkRePass() {
		if(rePassWord.value === "") {
			checkRePassEmpty();
		} else {			
			if(rePassWord.value !== passWord.value) {
				checkRePasswordError();
			} else {
				checkRePassOk();
			}
		}
	}

	function checkRePassEmpty() {
		rePassWord.style.borderBottomColor = "#D80022";
		reErrorPassWordPicture.style.content = "url('images/close.png')";
		reErrorPassWordPicture.style.display = "inline";
		reErrorPassWordText.style.display = "inline";
		reErrorPassWordText.textContent = "Please enter a re - password.";
		reErrorPassWordText.style.color = "#D80022";
		reLblPassWord.style.color = "#D80022";
		reCheckInputPassWordOk = 0;
	}

	function checkRePasswordError() {
		rePassWord.style.borderBottomColor = "#E7AA49";
		reErrorPassWordPicture.style.content = "url('images/alarm.png')";
		reErrorPassWordPicture.style.display = "inline";
		reErrorPassWordText.style.display = "inline";
		reErrorPassWordText.textContent = "Retype the password correctly";
		reErrorPassWordText.style.color = "#E7AA49";
		reLblPassWord.style.color = "#E7AA49";
		reCheckInputPassWordOk = 0;
	}

	return {
		check3:checkRePass
	};

})();

function checkRePassOk() {
	rePassWord.style.borderBottomColor = "#02F59A";
	reErrorPassWordPicture.style.content = "url('images/tick.png')";
	reErrorPassWordPicture.style.display = "inline";
	reErrorPassWordText.style.display = "inline";
	reErrorPassWordText.textContent = "";
	reErrorPassWordText.style.color = "#02F59A";
	reLblPassWord.style.color = "#02F59A";
	reCheckInputPassWordOk = 1;
}

function checkrePassWarning() {
	rePassWord.style.borderBottomColor = "yellow";
	reErrorPassWordPicture.style.content = "url('images/warning.png')";
	reErrorPassWordPicture.style.display = "inline";
	reErrorPassWordText.style.display = "inline";
	reErrorPassWordText.textContent = "warning";
	reErrorPassWordText.style.color = "yellow";
	reLblPassWord.style.color = "yellow";
	reCheckInputPassWordOk = 0;
}

rePassWord.addEventListener("click", function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkRePassWord.check3();
});

rePassWord.addEventListener("focus", function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkRePassWord.check3();
});

rePassWord.addEventListener("keyup", function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(checkInputEmail === 0) {
		checkEmailWaring();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkRePassWord.check3();
});

var checkReHideShowPassword = document.getElementById("hide-show-re-password");

var checkReShowOrHidePassWord = (function() {

	function ReShowOrHide() {
		RecheckShowHide();
	}

	function RecheckShowHide() {
		if(rePassWord.type == "password") {
			rePassWord.type = "text";
			checkReHideShowPassword.style.content = "url('images/view.png')";
		} else {
			rePassWord.type = "password";
			checkReHideShowPassword.style.content = "url('images/hide.png')";
		}
	}

	return {
		recheckShowOrHide:ReShowOrHide
	};

})();

checkReHideShowPassword.addEventListener("click", function() {
	checkReShowOrHidePassWord.recheckShowOrHide();
});

var email = document.getElementById("input-email");
var lblEmail = document.getElementById("lbl-email");
var errorEmailPicture = document.getElementById("error-email-picture");
var errorEmailText = document.getElementById("error-email");
var formatemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var checkInputEmail = 0;

var checkEmail = (function() {
	
	function checkEmailInput() {
		if(email.value === "") {
			checkEmailEmpty();
		} else {
			if(!formatemail.test(email.value)) {
				checkEmailError();
			}
			else {
				checkEmailOk();
			}
		}
	}

	function checkEmailEmpty() {
		email.style.borderBottomColor = "#D80022";
		errorEmailPicture.style.content = "url('images/close.png')";
		errorEmailPicture.style.display = "inline";
		errorEmailText.style.display = "inline";
		errorEmailText.textContent = "Please enter a email.";
		errorEmailText.style.color = "#D80022";
		lblEmail.style.color = "#D80022";
		checkInputEmail = 0;
	}
	
	function checkEmailError() {
		email.style.borderBottomColor = "#00B7C3";
		errorEmailPicture.style.content = "url('images/gmail.png')";
		errorEmailPicture.style.display = "inline";
		errorEmailText.style.display = "inline";
		errorEmailText.textContent = "The email must be formatted: abc@gmail.com .";
		errorEmailText.style.color = "#00B7C3";
		lblEmail.style.color = "#00B7C3";
		checkInputEmail = 0;
	}

	function checkEmailOk() {
		email.style.borderBottomColor = "#02F59A";
		errorEmailPicture.style.content = "url('images/tick.png')";
		errorEmailPicture.style.display = "inline";
		errorEmailText.style.display = "inline";
		errorEmailText.textContent = "";
		errorEmailText.style.color = "#02F59A";
		lblEmail.style.color = "#02F59A";
		checkInputEmail = 1;
	}

	return {
		check4:checkEmailInput
	};

})();

function checkEmailWaring() {
	email.style.borderBottomColor = "yellow";
	errorEmailPicture.style.content = "url('images/tick.png')";
	errorEmailPicture.style.content = "url('images/warning.png')";
	errorEmailPicture.style.display = "inline";
	errorEmailText.style.display = "inline";
	errorEmailText.textContent = "warning";
	errorEmailText.style.color = "yellow";
	lblEmail.style.color = "yellow";
	checkInputEmail = 0;
}

email.addEventListener("click",function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkEmail.check4();
});

email.addEventListener("focus",function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkEmail.check4();
});

email.addEventListener("keyup",function() {
	if(checkInputTextBoxOk === 0) {
		checkTextWarning();
	}
	if(checkInputPassWordOk === 0) {
		checkPassWarning();
	}
	if(reCheckInputPassWordOk === 0) {
		checkrePassWarning();
	}
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
	checkEmail.check4();
});

var checkTextBox = document.getElementById("mycheckbox");

checkTextBox.addEventListener("click",function() {
	if(checkTextBox.checked === true && checkInputEmail === 1 && reCheckInputPassWordOk === 1 && checkInputPassWordOk === 1 && checkInputTextBoxOk === 1) {
		disableButton.disabled = false;
	}
});

var disableButton = document.getElementById("submitt");

var checkDisabledButton = (function() {

	var checkDisable = function() {
		alert("he");
	}

	return {
		check5:checkDisable
	};

})();

disableButton.addEventListener("click",function() {
	checkDisabledButton.check5();
});
