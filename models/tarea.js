const { v4: uuid } = require('uuid');

class Tarea {
  constructor(name) {
    this.id = uuid();
    this.name = name;
    this.complete = null;
  }
}
module.exports = Tarea;
