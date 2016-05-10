var _ = require("lodash");
var router = require("express").Router();
var services = require("../services");

// attach our single index route
router.route("/").get(getShows);

function getShows(req, res) {
    services.getShows(function (err, response, body) {
    	console.log("err is: %j", err);
        if (err) {
            res.send(err);
        } else {
        	console.log("body is: %j", body);
            res.render("index", {
                shows: body
            });
        }
    });
};

module.exports = router;