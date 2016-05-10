module.exports = {
	port: 7777,
	api: {
		routes: {
			getShows: {
				url: "https://radiant-gorge-28948.herokuapp.com/api/v1/shows",
				// url: "http://localhost:9090/api/v1/shows",
				headers: {
					"Content-Type" : "application/json"
				}
			}
		}
	}
};