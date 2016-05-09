var mongoose = require("mongoose");
var Show = require("../data/showSchema");
var _ = require("underscore");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var router = require("express").Router();
var ShowList = require("../../app/components/ShowList.jsx");
var SubmitForm = require("../../app/components/SubmitForm.jsx");

// attach our single index route
router.route("/").get(getSubmitPage);

function getShowListHTML(callback) {

    // retrieve shows from local mongoDB
    Show.find(function (err, shows) {
        if (err) {
            callback(err); 
        }
        else {
            var showListFactory = React.createFactory(ShowList);
            var showListHTML = ReactDOMServer.renderToString(showListFactory({shows: shows}));
            callback(null, showListHTML, shows);
        }
    });
};

function getSubmitPage(req, res) {
    // get HTML for the show list and html for the submission form
    getShowListHTML(function(err, showHTML, shows) {
        if (err) {
            res.send(err);
        } else {
            var submitFormFactory = React.createFactory(SubmitForm);
            var formHTML = ReactDOMServer.renderToString(submitFormFactory());
            var showJSON = JSON.stringify(shows);
            console.log(showJSON);
            res.render("submit", {shows: showHTML, form: formHTML, state: {shows: showJSON}});
        }
    })
};

module.exports = router;