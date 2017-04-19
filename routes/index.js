var express = require('express');
var Twitter = require('twitter');
var OAuth2 = require('oauth').OAuth2;
var config = require('../config');
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
    var oauth2 = new OAuth2(
        config.twitter.api_key,
        config.twitter.api_secret,
        'https://api.twitter.com/',
        null,
        'oauth2/token',
        null
    );
    oauth2.getOAuthAccessToken(
        '',
        {'grant_type': 'client_credentials'},
        function (e, bearer_token) {
            var client = new Twitter({
                consumer_key: config.twitter.api_key,
                consumer_secret: config.twitter.api_secret,
                bearer_token: bearer_token
            });

            // client.
        }
    );

    res.render('scan', {});
});

module.exports = router;
