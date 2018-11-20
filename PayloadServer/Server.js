/**
 * Server.js
 * Node.JS application to create webserver. Recieves webhooks from github
 * Author: Austin Johanningsmeier
 */

const secret = "supersecret";
const proccessExe = "home/pi/proccess/notify";

const http = require ('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

console.log('Application Started');

http.createServer((request, response) => {
    if(request.method === 'POST'){
        console.log('Webhook recieved');
    }
}).listen(8080);