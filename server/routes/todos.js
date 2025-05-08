const router = require('express').Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST create todo
router.post('/', async (req, res) => {
  const newTodo = new Todo(req.body);
  const saved = await newTodo.save();
  res.status(201).json(saved);
});

module.exports = router;
