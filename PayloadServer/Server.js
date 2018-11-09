/**
 * http://usejsdoc.org/
 */

const secret = "supersecret";
const proccessExe = "home/pi/proccess/notify";

const http = require ('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

console.log('WE RUNNIN');

http.createServer((request, response) => {
	if(request.method === 'POST'){
		console.log('POST Proccessed');
		exec('cd ' + proccessExe);
	}
}).listen(8080);