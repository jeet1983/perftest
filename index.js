//importing node framework
var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/" test test test test tested tested again test again
//test comment
app.get('/', function (req, res) {
res.send('hi world');
});
//listen to port 3000 by default added comment
app.listen(process.env.PORT || 3001);

module.exports = app;
