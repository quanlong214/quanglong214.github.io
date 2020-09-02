form_contact.click_send.onclick = function check_contact() {
	
	var rgex_name=/^[a-zA-Z0-9]{2,20}$/;
	if (form_contact.your_name.value=='') {
		form_contact.your_name.style.border = '1px solid red';
		your_name_err.innerHTML='Vui lòng điền thông tin !';
		return false;
	}else if (!rgex_name.test(form_contact.your_name.value)) {
		form_contact.your_name.style.border = '1px solid red';
		your_name_err.innerHTML='Thông tin không hợp lệ!';
		return false;
	}else {
		form_contact.your_name.style.border = '';
		your_name_err.innerHTML='';
	}

	var rgex_email=/^[a-zA-Z0-9-._]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
	if (form_contact.your_email.value=='') {
		form_contact.your_email.style.border = '1px solid red';
		your_email_err.innerHTML='Vui lòng điền thông tin !';
		return false;
	}else if (!rgex_email.test(form_contact.your_email.value)) {
		form_contact.your_email.style.border = '1px solid red';
		your_email_err.innerHTML='Thông tin không hợp lệ!';
		return false;
	}else {
		form_contact.your_email.style.border = '';
		your_email_err.innerHTML='';
	}

	
	if (form_contact.message.value=='') {
		form_contact.message.style.border = '1px solid red';
		message_err.innerHTML='Vui lòng điền thông tin !';
		return false;
	}else {
		form_contact.message.style.border = '';
		message_err.innerHTML='';
	}
}