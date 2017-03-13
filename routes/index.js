var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
  res.status(201);
  res.json({'name':'Romulo', 'email': 'wromulo@gmail.com'});
});

router.post('/login',function(req, res, next) {

  var username = req.body.username;
  var password = req.body.password;

  if(username === 'rebel' && password === '123') {
    res.json({'token':'123'});
  }else{
    var err = new Error('Unauthorized');
    err.status = 401;
    next(err);
  }

  

});
module.exports = router;