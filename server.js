// COPYRIGHT 2017 EVOSUS, INC. ALL RIGHTS RESERVED
// GOOGLE APP ENGINE DEPLOYMENT SERVER

// REQUIRE DEPENDENCIES
var express = require('express');
var subdomain = require('express-subdomain');
// CREATE EXPRESS APP
var app = express();
app.use(logger('dev'));
// SUBDOMAIN
app.use(subdomain('*', router));
// APP DIRECTORY SETTINGS
app.set('trust proxy', true);
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/src/app'));
app.use('/lib', express.static(__dirname + '/node_modules'));
// SAY MY NAME
console.log('DEV Evosus Pro Landing App!');
// EXPORT APP
module.exports = app;
