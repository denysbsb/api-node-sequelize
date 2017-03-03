var express = require('express');
var app = express();

var Sequelize = require('sequelize');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var user = 'postgres';
var pw = 'a1920212223';
var host = 'localhost';
var database = 'siconv';

 var sequelize = new Sequelize(database, user, pw, {
        host: host,
        port: "5432", 
        dialect: 'postgres',
        pool: {
            max: 50,
            min: 0,
            idle: 10000
        }
 });

 var User = sequelize.define('programas', {
  nome: {
    type: Sequelize.STRING,
    field: 'nome' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  tipo: {
    type: Sequelize.STRING
  },
  local: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: false // Model tableName will be the same as the model name
});

function horaDoShow(){



sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  

User.sync({force: false}).then(function () {
  // Table created
  return User.create({
    nome: 'Eike',
    tipo: 'Hancock',
    local: 'CE'
  });
});

}

horaDoShow();

app.get('/api/programas',function(req, res){
    User.findAll().then(function (resp) {
      res.status(200).json(resp);
    });
});

app.get('/api/programas/:userId',function(req, res){
  
  var userId = req.params.userId;

    User.findAll({
        where: {
            id: userId
        }
    }).then(function (data) {
        res.status(200).json(data);
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});