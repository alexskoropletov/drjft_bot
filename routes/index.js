var express = require('express');
var twitter = require('twitter');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    var data = {
        title: 'Daily Remote Jobs from Twitter'
    };
    res.render('index', data);
});

/* GET home page. */
router.get('/scan_for_jobs', function (req, res, next) {
    var client = new Twitter({
        consumer_key: config.twitter.api_key,
        consumer_secret: config.twitter.api_secret,
        bearer_token: config.twitter.api_key + ":" + config.twitter.api_secret
    });

    res.render('scan', {});
});

module.exports = router;
