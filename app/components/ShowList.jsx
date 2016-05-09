var React = require("react");
var ShowGroup = require("./ShowGroup.jsx");

// TODO: use connect and react-redux to make this better organized
// Function to modify show list data so shows are grouped by display date
var formatShowList = function(shows) {
	var sortedShows = [];

	// sort shows by date first
	shows = _.sortBy(shows, function(show) {
		return new Date(show.date);
	});

    _.each(shows, function(show) {
        var simpleDate = new Date(show.date).toString().substring(0,10);
        var obj = _.filter(sortedShows, {headline: simpleDate})[0];
        
        if (obj) {
            obj.shows.push(show);
        } else {
            sortedShows.push({
                headline: simpleDate,
                shows: [show]
            });
        }
    });

    return sortedShows;
};

var ShowList = React.createClass({
	render: function() {
		var store = this.props.store;
		var shows = this.props.shows;
		shows = formatShowList(shows);
		return (
			<div>
			<h1> Show List </h1>
				{
					shows.map(function(group, index) {
						return (
							<ShowGroup 
								data={group} 
								key={index}
								store={store}
							/>
						)
					})
				}
			</div>
		);
	}
});

module.exports = ShowList;