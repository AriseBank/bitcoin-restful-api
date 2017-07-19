// Dogecoin Restful API For aOS Sunshine 
// File: app.js
// Author: Jared Rice Sr. 
// Organization: AriseBank (AriseLabs) [https://arisebank.com] [https://developers.arisebank.com]
// This file contains the application code for the Dogecoin Restful API
// It is commented to guide you through the code.
// Feel free to change whatever you need to, at your own risk. 

// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
// We will use dotenv here, to move the values within the .env file into a process.env file for execution within app.js.
var dotenv      = require('dotenv');
dotenv.load();

// Required Libraries For Dogecoin Restful API. These are mandatory to interact with the RPC-JSON server.
// The Bitcoin library is the most important dependency. Without it, this script will not function or communicate with the RPC-JSON server.
// 
var changeCase  = require('change-case');
var commands    = require('./commands');
var rise        = require('bitcoin');
var _           = require('underscore');

var e           = module.exports;
e.ENV           = process.env.NODE_ENV || 'production';

// We will require Hapi Server to manage multiple port connections and API routes.
// Below, you can change the port number for RPC-JSON, if you have changed it from the default configuration.
var thePort        = parseInt(process.env.PORT) || 22556;
var Hapi        = require('hapi');
//var server      = new Hapi.Server(+port, '0.0.0.0', { cors: true });
var server      = new Hapi.Server();

server.connection({port: +thePort});


// Here we will create a new RISE Client, that will help Hapi Server process API routes and API server information.
var bitclient = new rise.Client({
  host: process.env.RISE_HOST,
  port: process.env.RISE_PORT,
  user: process.env.RISE_USER,
  pass: process.env.RISE_PASS
});

function arrayifyArgsFromQuery(query) {
  var args = [];
  if (query.args) {
    args = query.args.split(","); 
  }

  var newargs = [];
  args.forEach(function(arg) {
    var number_as_float = parseFloat(arg);

    if (isNaN(number_as_float)) {
      newargs.push(arg);
    } else {
      newargs.push(number_as_float);
    }
  });

  return newargs;
}

// 
function handleResponseThunk(request) {
  var ip = request.info.remoteAddress;
  console.log('Incoming request: ' + ip);
  return function(err, data) {
    if (err) { 
      request.reply({code: 500, error: err })
    }
     if ( ip == String(process.env.APP_IP)) {
		request.reply({code: 200, data: data});
	}
	else {
		request.reply({code: 404, error: 'not found'});
		console.log('request denied: ' + ip);
	}
  }
}

// If JSON API response is an array, this handles the response. 
_.each(commands, function(value, cmd) {
  var config = {
    handler: function(request) {
    var args    = arrayifyArgsFromQuery(request.query);
      var handler = handleResponseThunk(request);
      args.push(handler);
      bitclient[cmd].apply(bitclient, args);
    }
}
  server.route({
    method  : 'GET',
    path    : '/aos/'+changeCase.snakeCase(cmd),
    config  : config
  });
});

// This function will start your Dogecoin Sunrise API server. 
server.start(function() {
  console.log('Dogecoin Sunrise API server started at: ' + server.info.uri);
});

