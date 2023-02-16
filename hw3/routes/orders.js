var express = require('express');
var router = express.Router();
//array of objects
myArray = {"data":[    
	{"topping":"cherry", "quantity":1},   
	{"topping":"chocolate", "quantity":2},
	{"topping":"plain", "quantity":3}
]};

/* POST orders */
router.post('/', function(req, res, next) {
	res.send(JSON.stringify(myArray));
});

module.exports = router;