var React = require("react");
var Guid = require("guid");
var serialize = require("form-serialize");

var ShowForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var data = serialize(e.target, {hash: true});
		this.props.onSubmit(data);
	},
	render: function() {
		{/* TODO: consider receiving configuration from the server.
			Add form validation, (require date, band and venue information) */}
		return (
			<div>
				<h1> Add Show </h1>
				<form className="form" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label className="control-label">Band:</label>
						<input 
							className="form-control" 
							type="text" 
							placeholder="Band Name" 
							name="band" 
						/>
					</div>
					<div className="form-group">
						<label className="control-label">Venue:</label>
						<input 
							className="form-control" 
							type="text" 
							placeholder="Venue Name" 
							name="venue" 
						/>
					</div>
					<div className="form-group">
						<label className="control-label">Ticket / Info URL:</label>
						<input 
							className="form-control" 
							type="text" 
							placeholder="http://buytickets.com" 
							name="link" 
						/>
					</div>
					<div className="form-group">
						<label className="control-label">Price:</label>
						<input 
							className="form-control" 
							type="number" 
							placeholder="60" 
							name="price" 
						/>
					</div>
					<div className="form-group">
						<label className="control-label">Date:</label>
						<input 
							className="form-control" 
							type="date" 
							placeholder="02/11/2016" 
							name="date" 
						/>
					</div>

					<div className="form-group">
						<button type="submit" className="btn">Add Show</button>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = ShowForm;
