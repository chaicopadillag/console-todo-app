const Tarea = require('./tarea');
const colors = require('colors');
class Tareas {
  constructor() {
    this._lista = {};
  }

  cargarTareasDB(tareas = []) {
    tareas.forEach((tarea) => (this._lista[tarea.id] = tarea));
  }

  get getTAreas() {
    const tareas = [];
    Object.keys(this._lista).forEach((key) => tareas.push(this._lista[key]));
    return tareas;
  }

  deleteTarea(id) {
    delete this._lista[id];
  }

  newTarea(todo = 'Test') {
    const tarea = new Tarea(todo);
    this._lista[tarea.id] = tarea;
  }

  listarTodos() {
    console.log();
    this.getTAreas.forEach((todo, index) =>
      console.log(
        `${colors.green(index + 1)}.- ${colors.blue(todo.name)} :: ${todo.complete !== null ? colors.green('Completada') : colors.red('Pendiente')}`
      )
    );
  }
  listarTodosCompledPending(pending = true) {
    console.log();
    if (pending) {
      this.getTAreas.filter((todo, index) => {
        if (todo.complete === null) {
          console.log(`${colors.green(index + 1)}.- ${colors.blue(todo.name)} :: ${colors.red('Pendiente')}`);
        }
      });
    } else {
      this.getTAreas.filter((todo, index) => {
        if (todo.complete !== null) {
          console.log(`${colors.green(index + 1)}.- ${colors.blue(todo.name)} :: ${colors.green(todo.complete)}`);
        }
      });
    }
  }

  toggleCompleteTarea(idsTareas = []) {
    idsTareas.forEach((id) => {
      const todo = this._lista[id];
      if (!todo.complete) todo.complete = new Date().toISOString();
    });

    this.getTAreas.forEach((tarea) => {
      if (!idsTareas.includes(tarea.id)) this._lista[tarea.id].complete = null;
    });
  }
}

module.exports = Tareas;
