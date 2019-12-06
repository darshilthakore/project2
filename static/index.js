document.addEventListener('DOMContentLoaded', () => {

	//checking the displayname availability
	document.querySelector('[name="displayname"]').onkeyup = () => {
		const displayname = document.querySelector('[name="displayname"]').value;
		const request = new XMLHttpRequest();
		request.open('POST', '/checkdispname');
		request.onload = () => {
			const response = JSON.parse(request.responseText);
			response.forEach(run);


		};

		//send the displayname  along with the request
		const data = new FormData();
		data.append('displayname', displayname);
		//send request

		request.send(data);

	};
	function run(contents) {
		document.querySelector('.validation').innerHTML = contents;
	};


	
	// function checkdispname() {
	// 	const displayname = document.querySelector('[name="displayname"]').value;
		
	// };




});