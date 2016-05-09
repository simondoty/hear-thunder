var React = require("react");

var Show = React.createClass({
	render: function() {
		var data = this.props.data;
		return (
		<div className="panel panel-default">
			<div className="panel-heading">
				{data.band}
				<span 
					className="pull-right text-uppercase delete-button" 
					onClick={this.props.onClickDelete}>&times;
				</span>
			</div>
			{/* TODO: consider configuring this or get list of attributes from server */}
			<div className="panel-body">
				venue: {data.venue}, 
				price: {data.price} dkk,
				time: {data.time},
				<a href="{data.link}">tickets</a>
			</div>
		</div>
		)
	}
});

module.exports = Show;
