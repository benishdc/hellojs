var http = require('express').createserver();

app.get('/'. function(req, res) {
	res.send('Hello, world!'); 
});

app.listen(3000);