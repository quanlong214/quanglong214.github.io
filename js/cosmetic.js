form_register.click_me.onclick=function check_register() {
	//name
	var regex_name=/^[a-zA-Z0-9 ]{3,20}$/;
	if (form_register.my_name.value=='') {
		form_register.my_name.style.border = '1px solid red';
		name_err.innerHTML=' Tên không hợp lệ!';
		return false;
	}else if (!regex_name.test(form_register.my_name.value)) {
		form_register.my_name.style.border = '1px solid red';
		name_err.innerHTML='Sai cú pháp !';
		return false;
	}else {
		form_register.my_name.style.border = '';
		name_err.innerHTML='';
	}

	//email
	var regex_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (form_register.email.value=='') {
		form_register.email.style.border = '1px solid red';
		email_err.innerHTML='Vui lòng điền thông tin !';
		return false;
	}else if (!regex_email.test(form_register.email.value)) {
		form_register.email.style.border = '1px solid red';
		email_err.innerHTML='Email không hợp lệ';
		return false;
	}else {
		form_register.email.style.border = '';
		email_err.innerHTML='';
	}

	//password
	var regex_pw=/^[a-zA-Z0-9]{8,}$/;
	if (form_register.pw.value=='') {
		form_register.pw.style.border = '1px solid red';
		pw_err.innerHTML='Vui lòng điền thông tin !';
		return false;
	}else if (!regex_pw.test(form_register.pw.value)) {
		form_register.pw.style.border = '1px solid red';
		pw_err.innerHTML='Password phải chứ ít nhất 8 ký tự , không ký tự đặc biệt';
		return false;
	}else {
		form_register.pw.style.border = '';
		pw_err.innerHTML='';
	}

	//repeat password
	var firstpass = document.form_register.pw.value;
	var lastpass = document.form_register.rp_pw.value;
	if (form_register.rp_pw.value=='') {
		form_register.rp_pw.style.border = '1px solid red';
		rp_err.innerHTML='Vui lòng điền thông tin !';
		return false;
	}else if (firstpass!=lastpass) {
		form_register.rp_pw.style.border = '1px solid red';
		rp_err.innerHTML='Password không khớp !!!';
		return false;
	}else {
		form_register.rp_pw.style.border = '';
		rp_err.innerHTML='';
	}
}
form_lg.login_in.onclick=function check_login() {

	var firstemail = document.form_register.email.value;
	var lastemail = document.form_lg.email_lg.value;

	  if (form_lg.email_lg.value=='') {
		form_lg.email_lg.style.border = '1px solid red';
		email_lgerr.innerHTML='Vui lòng điền thông tin !';
		return false;
	}else if (firstemail!= lastemail) {
		form_lg.email_lg.style.border = '1px solid red';
		email_lgerr.innerHTML='Email không đúng ';
		return false;
	}else {
		form_lg.email_lg.style.border = '';
		email_lgerr.innerHTML='';
	}

	var firstpass = document.form_register.rp_pw.value;
	var lastpasslg = document.form_lg.pw_lg.value;

	  if (form_lg.pw_lg.value=='') {
		form_lg.pw_lg.style.border = '1px solid red';
		pw_lgerr.innerHTML='Vui lòng điền thông tin !';
		return false;
	}else if (firstpass!= lastpasslg) {
		form_lg.pw_lg.style.border = '1px solid red';
		pw_lgerr.innerHTML='Sai password !!!';
		return false;
	}else {
		form_lg.pw_lg.style.border = '';
		pw_lgerr.innerHTML='';
	}


}
 