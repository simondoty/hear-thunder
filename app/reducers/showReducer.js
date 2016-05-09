var _ = require("lodash");

// TODO: separate reducers and combine them into a single reducer with redux
module.exports = function(state, action) {
	switch (action.type) {
		case 'DELETE_SHOW':
			// remove the show ID from the list of shows in the state
			var updatedShows  = _.filter(state.shows, function(show) {
				return show._id !== action.id;
			});	
			return {shows: updatedShows};

		case 'ADD_SHOW':
			var show = action.show;
			var dates = show.date.split("-");
			dates = dates.map(function(date) { return parseInt(date)});
			show.date = new Date(Date.UTC(dates[0], dates[1] - 1, dates[2]));
			var newShows = state.shows.concat(show);
			return {shows: newShows};
		
		default:
			return state;
	}
};