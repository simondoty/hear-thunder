var React = require("react");
var Show = require("./Show.jsx");

var ShowGroup = React.createClass({
	render: function() {
		var store = this.props.store;
		var shows = this.props.data.shows;
		var headline = this.props.data.headline;
		return (
			<div>
				<h3> {headline} </h3>
				{
					shows.map(function(show, index) {
						return (
							<Show
								data={show}
								key={index}
								onClickDelete={
									function(){
										store.dispatch({
											type: 'DELETE_SHOW',
											id: show._id
										})
									}
								}
							/>
						)
					})
				}
			</div>
		);
	}
});

module.exports = ShowGroup;