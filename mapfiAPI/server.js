var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://user-steve:j4L90YA5FnMAzI9u@cluster0-tf9jc.gcp.mongodb.net/mapfi?retryWrites=true", { useNewUrlParser: true });

// mongoose instance connection url connection
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
