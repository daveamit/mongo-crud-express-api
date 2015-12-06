//Fetches express module
var express = require('express');
//creates routes, using which we'll define our routes
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //Send response back
  res.json({message: 'Hello World'});
});

//export the router with the configured routes.
module.exports = router;
