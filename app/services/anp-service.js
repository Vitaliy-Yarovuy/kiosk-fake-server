var apn = require ('apn');
var path = require('path');
var fs = require('fs');

var service = new apn.connection({
    gateway:'gateway.sandbox.push.apple.com',
    cert: fs.readFileSync(path.join(__dirname, '../certificats/push_key.pem')),
    //key: path.join(__dirname, '../certificats/key_push.pem'),
    //pfx: path.join(__dirname, '../certificats/aps_certificates.pem'),
    //passphrase: 'test'
});

//console.log("PATH",path.join(__dirname, '../certificats/push_key.pem'));

service.on('connected', function() {
    console.log("Connected");
});

service.on('transmitted', function(notification, device) {
    console.log("Notification transmitted to:" + device.token.toString('hex'));
});

service.on('transmissionError', function(errCode, notification, device) {
    console.error("Notification caused error: " + errCode + " for device ", device, notification);
});

service.on('timeout', function () {
    console.log("Connection Timeout");
});

service.on('disconnected', function() {
    console.log("Disconnected from APNS");
});

service.on('socketError', console.error);


exports.service = service;
