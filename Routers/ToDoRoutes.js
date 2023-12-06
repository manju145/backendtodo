const express = require("express");
const routertodo = express.Router();
const { getToDos,
   saveToDo,
    updateToDo,
     deleteToDo } = require("../controllers/ToDoController");


routertodo.get("/get", getToDos);
routertodo.post("/save", saveToDo);
routertodo.put("/update/:id", updateToDo);
routertodo.delete("/delete/:id", deleteToDo);

module.exports = routertodo;
