const Users = require('./Users');
const Kids = require('./Kids');
const Tasks = require('./Tasks');

Kids.hasMany(Tasks, {
    foreignKey: 'Kids_id'
  });

 /* Tasks.belongsTo(Users, {
    through: Kids,
  as: 'task name',
  foreignKey: 'task_name'
  });*/

module.exports = { Users, Kids, Tasks };