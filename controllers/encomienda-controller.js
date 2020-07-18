const { getConnection } = require("../database");
const { v4 } = require("uuid");

const getEncomiendas = (req, res) => {
  const encomiendas = getConnection()
    .get("encomienda")
    .value();
  res.json(encomiendas);
};

const createEncomienda = (req, res) => {
  const newEncomienda = {
    id: v4(),
    name: req.body.name,
    description: req.body.description
  };
  getConnection()
    .get("encomienda")
    .push(newEncomienda)
    .write();
  res.json(newEncomienda);
};

const getEncomiendas = (req, res) => {
  const task = getConnection()
    .get("encomiendas")
    .find({ id: req.params.id })
    .value();
  res.json(task);
};

const updateTask = async (req, res) => {
  const result = await getConnection()
    .get("tasks")
    .find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json(result);
};

const deleteTask = async (req, res) => {
  const result = await getConnection()
    .get("tasks")
    .remove({ id: req.params.id })
    .write();
  res.json(result);
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};