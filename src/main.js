const origin_usr = "root";
const origin_pwd = "admin1234";

let next = false;

document.getElementById("show-pwd-box").checked = false;
document.getElementById("username").value = "root";
document.getElementById("password").value = "admin1234";

function login() {
	let info = document.getElementById("login-status-info");
	let block = document.getElementById("login-status");
	let info_block = document.getElementById("login-status-block");


	let usr = document.getElementById("username");
	let pwd = document.getElementById("password");

	let usr_input = usr.value;
	let pwd_input = pwd.value;

	console.log(usr_input);
	console.log(pwd_input);
    console.log(next);

	if (next) {
		block.classList.remove("status");

		void info_block.offsetHeight;

		block.classList.add("status");
	}

	let isEmpty = false;

	if (usr_input.length <= 0) {
		usr.style.borderColor = "#fc5353";
		isEmpty = true;
	} else {
		usr.style.borderColor = "#acaaaa";
	}

	if (pwd_input <= 0) {
		pwd.style.borderColor = "#fc5353";
		isEmpty = true;
	} else {
		pwd.style.borderColor = "#acaaaa";
	}

	if (isEmpty) {
        console.log("est");
		return;
	}

	if (usr_input == origin_usr && pwd_input == origin_pwd) {
		usr.style.borderColor = "#48dc7cff";
		pwd.style.borderColor = "#48dc7cff";
		info_block.style.borderColor = "#53fc8eff";
		info.style.color = "#000000ff";
		info_block.style.backgroundColor = "#d2f5d5ff";

		info.innerText = "Login Successfully";
		block.style.display = "inline";

		next = true;
		return;
	}

	usr.style.borderColor = "#fc5353";
	pwd.style.borderColor = "#fc5353";

	info_block.style.borderColor = "#c31e1e";
	info.style.color = "#ff1e1e";
	info_block.style.backgroundColor = "#f7dcdc";

	info.innerText = "Failed to login, please try again!";
	block.style.display = "inline";

	next = true;
	return;
}

function forget_password() {}

function showPwd() {
	let pwd_input = document.getElementById("password");
	if (pwd_input.type == "password") {
		pwd_input.type = "text";
		return;
	}

	pwd_input.type = "password";
}
