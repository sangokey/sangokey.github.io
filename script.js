var express = require('express');
var app = express();

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get("/", function(req, res){
	res.render('home', context);
}