# rv-test

## Usage

- In a Node.js REPL, start a websocket:

```javascript
const WebSocket = require('ws');
let url = 'file:///path/to/built/glimmer/index.html'
let socket = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080
});
```
- Load up a renderer:

```javascript
const { Renderer } = require('render-vendor');
Renderer.load(url);
```

- Find & render your page's HTML:

```javascript
let page = Renderer.find(url);

page.render().then((data) => console.log(data));
```

- Set a name & render to PDF:

```javascript
socket.clients.forEach((ws) => ws.send(JSON.stringify({
  name: 'Ember Night'
})));

page.render({ filename: './rv-with-name.pdf' });
```

- Set all data & render to PNG:

```javascript
socket.clients.forEach((ws) => ws.send({
  name: 'Ember Night',
  body: '<img src="http://lorempixel.com/400/200">'
}));

page.render({ filename: './rv-with-img.png' });
```
