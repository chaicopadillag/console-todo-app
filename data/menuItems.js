const colors = require('colors');
const menuItems = [
  {
    type: 'list',
    name: 'option',
    message: 'Seleccione una Opción',
    choices: [
      {
        value: 1,
        name: `${colors.yellow(1)} => Crear tarea`,
      },
      {
        value: 2,
        name: `${colors.yellow(2)} => Listar tareas`,
      },
      {
        value: 3,
        name: `${colors.yellow(3)} => Listar tareas completas`,
      },
      {
        value: 4,
        name: `${colors.yellow(4)} => Listar tareas pendientes`,
      },
      {
        value: 5,
        name: `${colors.yellow(5)} => Completar tarea(s)`,
      },
      {
        value: 6,
        name: `${colors.yellow(6)} => Borrar tarea`,
      },
      {
        value: 0,
        name: `${colors.yellow(0)} => Salir`,
      },
    ],
    placeholder: 'Usa las teclas direcionales',
  },
];
module.exports = { menuItems };
