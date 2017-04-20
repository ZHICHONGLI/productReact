var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
//var fs = require('fs');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

var port = process.env.PORT || 8080;

var router = express.Router();
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
router.get('/react', function(req, res) {
    res.sendFile(path.join(__dirname, '', 'index.html'));
  // res.send("Hello World");
});
/*
router.route('/albums')
    .get(function(req, res) {
        //read json file
        fs.readFile('sample-data.json', function(err, data) {
            if (err)
                throw err;
            var jsonObj = JSON.parse(data);
            res.send(jsonObj);
        });
    });       */

app.use('', router);

app.listen(port);
console.log('Magic happens on port ' + port);