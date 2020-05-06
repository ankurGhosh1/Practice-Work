var text;

function getInputValue(){
	text = $('.p-check').val();
	console.log(text);
}



// Post request for plagarism check


function check(){

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "/plagspotter-duplicate-content-checking.p.rapidapi.com/v2.add-text-for-checking",
		"method": "POST",
		"headers": {
			"x-rapidapi-host": "plagspotter-duplicate-content-checking.p.rapidapi.com",
			"x-rapidapi-key": "e9255b460cmsh863ffa7bd83b3bep19d626jsne90553c61953",
			"content-type": "application/x-www-form-urlencoded",
			"Access-Control-Allow-Origin": "*"
		},
		"data": {
			"text": text
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
}


// Plagarism result



// var settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: "https://cors-anywhere.herokuapp.com/https://plagspotter-duplicate-content-checking.p.rapidapi.com/v2.get-plagiarism-percent?hash=becd22a50d3a457edd42f6f37cbe81fe",
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-host": "plagspotter-duplicate-content-checking.p.rapidapi.com",
// 		"x-rapidapi-key": "e9255b460cmsh863ffa7bd83b3bep19d626jsne90553c61953",
// 		"Access-Control-Allow-Origin": "*"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

