var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render("index");
});

router.get('/tool', function(req, res, next) {
    res.render("tool");
});

router.get('/upload', function(req, res, next) {
    res.render("upload");
});

module.exports = router;
