document.getElementById('submit-btn').addEventListener('click', function () {
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const email = document.getElementById('email').value;
	const confirmEmail = document.getElementById('confirm-email').value;
	const question = document.getElementById('question').value;

	if (email !== confirmEmail) {
		alert('Email and Confirm Email do not match!');
		return;
	}

	if (firstName === '' || lastName === '' || email === '' || question === '') {
		alert('Please fill out all required fields.');
		return; // Stop processing if any required fields are missing
	}

	console.log('Form Data:');
	console.log('First Name:', firstName);
	console.log('Last Name:', lastName);
	console.log('Email:', email);
	console.log('Question:', question);

	alert('Thank you for your submission, ' + firstName + '!');
});
