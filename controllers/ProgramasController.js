function ProgramasController() {}

ProgramasController.prototype.getAll = function(request, response, next) {
  response.send('get all programs');
};
ProgramasController.prototype.getById = function(request, response, next) {
  response.send('get a specific programs by id');
};
ProgramasController.prototype.create = function(request, response, next) {
  response.send('create a new programs');
};
ProgramasController.prototype.update = function(request, response, next) {
  response.send('update a programs');
};
ProgramasController.prototype.remove = function(request, response, next) {
  response.send('remove a programs');
};
module.exports = new ProgramasController();