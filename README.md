WP7Push 0.0.1
=============

## What's WP7Push

WP7Push is a Node library to send Push Notifications to Windows Phone 7 Apps using Node. 

## What types of notifications do you support?

At the moment of the very initial version we only support Toast Notifications, but in a near future we'll support:


* Toast Notifications
	
* Raw Notifications
	
* Tile Notifications

## How can I get WP7Push

Starting with 0.1, you'll be able to install it using npm:

```bash
$ npm install wp7push
```

## Syntax
```javascript
var push = require('wp7push');
var purl = "Push URL provided by the WP7 Application";
push.sendToastNotification("title", "subtitle", purl);
```


	
	
