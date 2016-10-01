var http = require('http');
var url = require('url');

function start (route,handle){
	function onRequest (request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Peticion para' + pathname + 'recibida');
		route(handle,pathname,response);
	}

	http.createServer(onRequest).listen(8888);
	console.log('Sevidor Iniciado');
}

exports.start = start;