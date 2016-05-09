// reacty
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var router = require("express").Router();
var _ = require("lodash");

// datay
var mongoose = require("mongoose");
var Show = require("../data/showSchema");

// attach our single index route
router.route("/").get(renderIndexAndShows);

// TODO: move entire mongoDB service to separate project and connect to API that way
function getShowsByDate(callback) {
    Show.find(function (err, shows) {
        callback(err, shows);
    }).sort({date: 1});
};

function renderIndexAndShows(req, res) {
    // retrieve shows from mongoDB
    getShowsByDate(function(err, shows) {
        if (err) {
            res.send(err);
        } else {
            res.render("index", {
                shows: JSON.stringify(shows)
            });
        }
    });
};

module.exports = router;