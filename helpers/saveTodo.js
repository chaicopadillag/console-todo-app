const fs = require('fs');

const fileDB = './data/db.json';
const saveTodo = (data) => {
  fs.writeFileSync(fileDB, JSON.stringify(data, null, 2));
};

const readTodo = () => {
  if (!fs.existsSync(fileDB)) return null;
  const fileContent = fs.readFileSync(fileDB, { encoding: 'utf-8' });
  const data = JSON.parse(fileContent);
  return data;
};

module.exports = { saveTodo, readTodo };
