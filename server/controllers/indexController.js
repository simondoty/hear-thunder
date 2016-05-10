var _ = require("lodash");
var router = require("express").Router();
var services = require("../services");
// var Promise = require("es6-promise").Promise;

// attach our single index route
router.route("/").get(getShows);

function getShows(req, res) {
    services.getShows()
    	.then(function (body) {
            res.render("index", {
                shows: body
            });
        })
        .catch(function (err) {
        	console.log("caught error");
        	res.send(err);
        });
};

module.exports = router;