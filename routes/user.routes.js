const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.post('/', controller.createUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
