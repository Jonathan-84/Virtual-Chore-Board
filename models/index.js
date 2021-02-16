const Users = require("./Users");
const Kids = require("./Kids");
const Tasks = require("./Tasks");


  Kids.belongsTo(Users, {
    foreignKey: "users_id",
  });

 Kids.hasMany(Tasks, {
    foreignKey: "kids_id",
  });

  Users.hasMany(Kids, {
    foreignKey: "users_id",
    onDelete: "cascade",
  });

  /*Users.hasMany(Tasks, {
    foreignKey: "users_id"
  });*/
/*
  Tasks.belongsToMany( Kids, {
    through: Users,
    as: "task_name",
    foreignKey: "tasks_id"
  });
*/
/* Tasks.belongsTo(Users, {
    through: Kids,
  as: 'task name',
  foreignKey: 'task_name'
  });
*/
module.exports = { Users, Kids, Tasks };