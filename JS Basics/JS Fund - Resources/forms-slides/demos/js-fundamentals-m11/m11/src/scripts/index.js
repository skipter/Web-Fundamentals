
import $ from 'jquery';

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {

	let user = form.elements['user'];
	let avatarFile = form.elements['avatar-file'];

	let posting = {
		user: user.value,
		avatarFile: avatarFile.value
	};
	
	let promise = $.post(
		"http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", posting
	);
	promise.then(
	    data => console.log('success: ', data),
	    error => console.log('error: ', error)
	);
	

	event.preventDefault();

});