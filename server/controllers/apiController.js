var mongoose = require("mongoose");
var Show = require("../data/showSchema");
var _ = require("underscore");
var React = require("react");
var Show = require("../data/showSchema");
var router = require("express").Router();

// attach our single index route
router.route("/shows/:id?")
    .put(addShow)
    .delete(deleteShow);

function addShow(req, res) {
    var show = new Show(_.extend({}, req.body));
    show.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(show);
        }
    });
}

function deleteShow(req, res) {
    var id = req.params.id;
    Show.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;