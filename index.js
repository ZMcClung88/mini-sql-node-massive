var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');


var app = module.exports = express();
var connectionString = 'postgres://postgres:@localhost/sandbox'
var massiveInstance = massive.connectSync({connectionString : connectionString})

app.set('db', massiveInstance);
var db = app.get('db');

app.use(bodyParser.json());
app.use(cors());

var controller = require('./controller.js');

// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });

// db.get_planes(function(err, planes){
//     console.log(err, planes)
// });


app.get('/airplanes', controller.getPlanes);



const port = 3000;
app.listen(port, function(){
  console.log("Ship Docked On", port)
})
