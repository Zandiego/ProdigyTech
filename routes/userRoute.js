const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser, validateUpdate } = require('../middlewares/validateUser');

router.post('/', validateUser, userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/:id', validateUpdate, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
