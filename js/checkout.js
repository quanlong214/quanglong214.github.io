form_login.login_now.onclick = function checkorder() {
	//email
 	var regex_email =/^[a-zA-Z0-9-._]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;

 	if (form_login.email_lgck.value=='') {
 		form_login.email_lgck.style.border = '1px solid red';
 		email_lgckerr.innerHTML='Vui lòng điền thông tin !!!';
 		return false;
 	}else if (!regex_email.test(form_login.email_lgck.value)) {
 		form_login.email_lgck.style.border = '1px solid red';
 		email_lgckerr.innerHTML='Tài khoản không đúng !!!';
 		return false;
 	}else{
 		form_login.email_lgck.style.border = '';
 		email_lgckerr.innerHTML='';
 	}
 	 //pass
 	 var regex_pw=/^[a-zA-Z0-9]{8,}$/;

 	if (form_login.pw_lg.value=='') {
 		form_login.pw_lg.style.border = '1px solid red';
 		pw_lgerr.innerHTML='Vui lòng điền thông tin !!!';
 		return false;
 	}else if (!regex_pw.test(form_login.pw_lg.value)) {
 		form_login.pw_lg.style.border = '1px solid red';
 		pw_lgerr.innerHTML='Password không đúng !!!';
 		return false;
 	}else{
 		form_login.pw_lg.style.border = '';
 		pw_lgerr.innerHTML='';
 	}
 }

 place_order.check_place.onclick = function check_infor() {
 	//first name
 	var regex_fname = /^[a-zA-Z]{2,10}$/;
 	if (place_order.fname.value=='') {
 		place_order.fname.style.border = '1px solid red';
 		firstname_err.innerHTML='Vui lòng điền thông tin !';
 		return false;
 	}else if (!regex_fname.test(place_order.fname.value)) {
 		place_order.fname.style.border = '1px solid red';
 		firstname_err.innerHTML='Name không hợp lệ !';
 		return false;
 	}else {
 		place_order.fname.style.border = '';
 		firstname_err.innerHTML='';
 		
 	}
 	//last name
 	var regex_lname = /^[a-zA-Z]{2,10}$/;
 	if (place_order.lname.value=='') {
 		place_order.lname.style.border = '1px solid red';
 		lastname_err.innerHTML='Vui lòng điền thông tin !';
 		return false;
 	}else if (!regex_lname.test(place_order.lname.value)) {
 		place_order.lname.style.border = '1px solid red';
 		lastname_err.innerHTML='Name không hợp lệ !';
 		return false;
 	}else {
 		place_order.lname.style.border = '';
 		lastname_err.innerHTML='';
 		
 	}

 	//add
 	var regex_add = /^[a-zA-Z0-9,._() ]{5,100}$/;
 	if (place_order.add.value=='') {
 		place_order.add.style.border = '1px solid red';
 		add_err.innerHTML='Vui lòng điền thông tin !';
 		return false;
 	}else if (!regex_add.test(place_order.add.value)) {
 		place_order.add.style.border = '1px solid red';
 		add_err.innerHTML='Address không hợp lệ !';
 		return false;
 	}else {
 		place_order.add.style.border = '';
 		add_err.innerHTML='';
 		
 	}

 	//email
 	var regex_emailadd =/^[a-zA-Z0-9-._]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
 	if (place_order.emailadd.value=='') {
 		place_order.emailadd.style.border = '1px solid red';
 		emailadd_err.innerHTML='Vui lòng điền thông tin !';
 		return false;
 	}else if (!regex_emailadd.test(place_order.emailadd.value)) {
 		place_order.emailadd.style.border = '1px solid red';
 		emailadd_err.innerHTML='Email address không hợp lệ !';
 		return false;
 	}else {
 		place_order.emailadd.style.border = '';
 		emailadd_err.innerHTML='';
 		
 	}

 	//phone
 	var regex_phone = /^[0][9|8|6|3|5][0-9]{8}$/;
 	if (place_order.phone.value=='') {
 		place_order.phone.style.border = '1px solid red';
 		phone_err.innerHTML='Vui lòng điền thông tin !';
 		return false;
 	}else if (!regex_phone.test(place_order.phone.value)) {
 		place_order.phone.style.border = '1px solid red';
 		phone_err.innerHTML='Phone không hợp lệ !';
 		return false;
 	}else {
 		place_order.phone.style.border = '';
 		phone_err.innerHTML='';
 		
 	}



 	//shipping
 	//first name
 	var regex_fname2 = /^[a-zA-Z]{2,10}$/;
 	if (place_order.fname2.value == '') {
 		place_order.fname2.style.border = '1px solid red';
 		fname2_err.innerHTML='Vui lòng điền thông tin !';
 		return false;
 	}else if (!regex_fname2.test(place_order.fname2.value)) {
 		place_order.fname2.style.border = '1px solid red';
 		fname2_err.innerHTML='Name không hợp lệ !';
 		return false;
 	}else {
 		place_order.fname2.style.border = '';
 		fname2_err.innerHTML='';
 		
 	}
 	//last name
 	//last name
 	var regex_lname2 = /^[a-zA-Z]{2,10}$/;
 	if (place_order.lname2.value=='') {
 		place_order.lname2.style.border = '1px solid red';
 		lname2_err.innerHTML='Vui lòng điền thông tin !';
 		return false;
 	}else if (!regex_lname2.test(place_order.lname2.value)) {
 		place_order.lname2.style.border = '1px solid red';
 		lname2_err.innerHTML='Name không hợp lệ !';
 		return false;
 	}else {
 		place_order.lname2.style.border = '';
 		lname2_err.innerHTML='';
 		
 	}

 	//add
 	var regex_add2 = /^[a-zA-Z0-9,._() ]{5,100}$/;
 	if (place_order.add2.value=='') {
 		place_order.add2.style.border = '1px solid red';
 		add2_err.innerHTML='Vui lòng điền thông tin !';
 		return false;
 	}else if (!regex_add2.test(place_order.add2.value)) {
 		place_order.add2.style.border = '1px solid red';
 		add2_err.innerHTML='address không hợp lệ !';
 		return false;
 	}else {
 		place_order.add2.style.border = '';
 		add2_err.innerHTML='';
 	}
 }