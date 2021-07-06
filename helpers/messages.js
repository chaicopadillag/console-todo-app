const colors = require('colors');
const readline = require('readline');
const menuItems = require('../data/menuItems');

const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    let title = `============================\n---Seleccione una opción---\n============================\n`;
    console.log(colors.bold.yellow(title));

    menuItems.forEach((menu) => console.log(`${colors.green(menu.id)} => ${menu.name}`));

    const myReadline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    myReadline.question('Seleccione una opción: ', (opt) => {
      resolve(opt);
      myReadline.close();
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const myReadline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    myReadline.question(`Presione ${colors.green('ENTER')} para continuar: `, (opt) => {
      myReadline.close();
      resolve();
    });
  });
};

module.exports = { showMenu, pause };
