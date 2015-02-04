var express = require('express'),
    mongoose = require('mongoose');

// MODELS
var User = require('./models/user');

mongoose.connect('mongodb://myUser:myPassword@ds039441.mongolab.com:39441/learn-nodejs');
var db = mongoose.connection;

var app = express();

app.get('/', function(request, response) {
    var user = new User();
    user.email = 'test1@hotmail.com';
    user.username = 'test1';
    user.password = 'password';
    user.first_name = 'test';
    user.last_name = 'user';
    user.save();

    response.end("User Created");
});

app.get('/api/user/:id', function(request, response) {
    User.getUserById(request.params.id, function(err, doc) {
        if(err) {
            console.error(err);
            return;
        }

        response.json(doc);
    });
});

app.listen(3000);
console.log("Visit your web page at http://localhost:3000");