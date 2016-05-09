var React = require("react");
var ReactDOM = require("react-dom");
var Provider = require("react-redux").Provider;
var createStore = require("redux").createStore;
var showReducer = require("./reducers/showReducer");
var App = require("./components/App.jsx");

// TODO: render server-side and then hydrate state here
var initialState = {
	shows: JSON.parse(document.getElementById("showData").innerHTML),
};

var store = createStore(showReducer, initialState);

// TODO: use Provider with react-redux
function render () {
	ReactDOM.render(
		<App store={store}/>,
	  document.getElementById('appContainer')
	);
};

store.subscribe(render);
render();