var routeConfig = require("../config").api.routes;
var requestPromise = require("request-promise");
var Promise = require("es6-promise").Promise;

function getShows() {
	return new Promise(function(fulfill, reject) {
		
		var options = {
		  url: routeConfig.getShows.url,
		  headers: routeConfig.getShows.headers
		};

		// make request promise call
		requestPromise(options)
			.then(fulfill)
			.catch(reject);
	});
};

module.exports = {
	getShows: getShows
};