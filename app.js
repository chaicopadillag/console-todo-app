const colors = require('colors');
const { menuOpstionsInquirer, pauseInquirer, leerInput, listaTareasBorrar, confirmDelete, marcarTareasCompletadas } = require('./data/inquirer');
const { saveTodo, readTodo } = require('./helpers/saveTodo');
const Tareas = require('./models/tareas');

const main = async () => {
  let opt = '';

  const tareas = new Tareas();
  const dataTodo = readTodo();
  if (dataTodo) tareas.cargarTareasDB(dataTodo);

  do {
    opt = await menuOpstionsInquirer();
    switch (opt) {
      case 1:
        const tarea = await leerInput(colors.bold.yellow('Ingrese una tarea:'));
        tareas.newTarea(tarea);
        break;
      case 2:
        tareas.listarTodos();
        break;
      case 3:
        tareas.listarTodosCompledPending(false);
        break;
      case 4:
        tareas.listarTodosCompledPending(true);
        break;
      case 5:
        const tareasCompletadas = await marcarTareasCompletadas(tareas.getTAreas);
        tareas.toggleCompleteTarea(tareasCompletadas);
        break;
      case 6:
        const id = await listaTareasBorrar(tareas.getTAreas);
        if (id === 0) break;
        const confirm = await confirmDelete('¿Esta seguro de eliminar?');
        if (confirm) tareas.deleteTarea(id);

        break;
    }
    saveTodo(tareas.getTAreas);
    await pauseInquirer();
  } while (opt !== 0);
};

main();
