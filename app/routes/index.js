var apn = require("apn");
var service = require("../services/anp-service").service;

/*
 * GET home page.
 */

var bundles = {
    NONE:{ badge:0 }
};


exports.index = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.render('index', { title: 'Kiosk Fake Server',
        bundles: bundles
    });
};

exports.u404 = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.render('404', { title: 'Kiosk Fake Server 404 page' });
};

exports.addToken = function(req, res){
    var token = req.body.token;
    if(token){
        bundles[token] = { badge:0 };

    }
};

exports.addBadge = function(req, res){
    var token = req.body.token;
    if(bundles[token]){
        bundles[token].badge++;

        var note = new apn.notification();
        note.setAlertText("Hello, from Gizomenu!");
        note.badge = bundles[token].badge;

        service.pushNotification(note, token);
    }else{
        var note = new apn.notification();
        note.setAlertText("Hello, new from Gizomenu!");
        note.badge = 3;
        service.pushNotification(note, token);
    }
    res.redirect("/");
};

