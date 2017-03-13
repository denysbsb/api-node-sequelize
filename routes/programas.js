var express = require('express');
var router = express.Router();

var ProgramasController = require('../controllers/ProgramasController');

router.get('/', ProgramasController.getAll);
router.get('/:_id', ProgramasController.getById);
router.post('/', ProgramasController.create);
router.put('/:_id', ProgramasController.update);
router.delete('/:_id', ProgramasController.remove);

module.exports = router;