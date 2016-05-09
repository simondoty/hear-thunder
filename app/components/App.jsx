var React = require("react");
var ShowList = require("./ShowList.jsx");
var AddShowForm = require("./ShowForm.jsx");

var App = React.createClass({
	render: function() {
		var store = this.props.store;
		return (
			<div className="row">
					<ShowList 
						store={store} 
						shows={store.getState().shows} 
					/>
				{/*
				<div className="col-md-6">
					<AddShowForm 
						onSubmit={function(showData) {
							store.dispatch({
								type: 'ADD_SHOW',
								show: showData
							})
						}}
					/>
				</div>
				*/}
			</div>
		);
	}
});

module.exports = App;