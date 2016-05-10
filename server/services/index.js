var routeConfig = require("../config").api.routes;
var request = require("request");

var getShows = function(callback) {
	var options = {
	  url: routeConfig.getShows.url,
	  headers: routeConfig.getShows.headers
	};
	console.log("in getShows service, options are: %j", options);
	request(options, callback);
};

module.exports = {
	getShows: getShows
};