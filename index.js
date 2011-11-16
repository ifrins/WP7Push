var url = require('url');
var http = require('http');

exports.version = "0.0.1";

var sendNotification = function(msg, pushUrl, type) {
	var uri = url.parse(pushUrl);
	var notificationClass;

	var headers = {
		"Content-Type" : "text/xml",
		"Content-Length" : msg.length,
		"X-NotificationClass" : 2,
		"X-WindowsPhone-Target" : type
	};
	var options = {
	  host: uri.host,
	  port: 80,
	  path: uri.pathname,
	  method: 'POST',
	  headers: headers
	};
	console.log("Content lenght: "+ msg.length);
	var req = http.request(options, function(res) {
	  console.log('STATUS: ' + res.statusCode);
	  console.log('HEADERS: ' + JSON.stringify(res.headers));
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	  });
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	req.write(msg);
	req.end();
	
}

exports.sendToastNotification = function (title, subtitle, url) {
	var msg = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
					"<wp:Notification xmlns:wp=\"WPNotification\">" +
					"<wp:Toast>" +
					"<wp:Text1>" + title +"</wp:Text1>" +
					"<wp:Text2>"+ subtitle +"</wp:Text2>" +
					"</wp:Toast>" +
					"</wp:Notification>";
	return sendNotification(msg, url, 'toast');
};