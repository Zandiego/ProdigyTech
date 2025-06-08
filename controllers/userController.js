const { v4: uuidv4 } = require('uuid');
const users = require('../models/userModel');

exports.createUser = (req, res) => {
  const { name, email, age } = req.body;
  const id = uuidv4();
  users[id] = { id, name, email, age };
  res.status(201).json(users[id]);
};

exports.getAllUsers = (req, res) => {
  res.json(Object.values(users));
};

exports.getUser = (req, res) => {
  const user = users[req.params.id];
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

exports.updateUser = (req, res) => {
  const user = users[req.params.id];
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { name, email, age } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;
  if (age !== undefined) user.age = age;

  res.json(user);
};

exports.deleteUser = (req, res) => {
  const user = users[req.params.id];
  if (!user) return res.status(404).json({ error: 'User not found' });

  delete users[req.params.id];
  res.json({ message: 'User deleted successfully' });
};
