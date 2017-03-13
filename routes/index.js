var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
  res.status(201);
  res.json({'name':'Romulo', 'email': 'wromulo@gmail.com'});
});

module.exports = router;