// Bring in the express server and create application
/*
    The require function resolves libraries and modules in the Node search path (usually\node_modules)
*/
let express = require('express');

// The express function creates an express application. Many other objects are created from this application object.
let app = express();
let studentRepo = require('./repository/student-repository');

// Use the express Router object
let router = express.Router();

// Create GET to return a list of some data you want
/*
    next is used for the middleware purpose
    / states, if someone comes to this end point execute the function in the
    second parameter of the get function
*/
router.get('/', function(req, res, next) {
    studentRepo.get(function(data){
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All students retrieved.",
            "data": data
        });
    },function(error){
        next(error);
    });
});


// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

// Create a server to listen on port 5000
var server = app.listen(5000, function() {
    console.log('Node server is running on http://localhost:5000');
});