const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const TodoController = require('../controllers/TodoController');
const AuthMiddleware = require('../middleware/AuthMiddleware');

router.post("/UserRegister",UserController.UserRegister);
router.post("/UserLogin",UserController.UserLogin);
router.get("/UserProfile",AuthMiddleware,UserController.UserProfile);
router.post("/UpdateProfile",AuthMiddleware,UserController.UpdateProfile);
router.post("/CreateTodo",AuthMiddleware,TodoController.CreateTodo);


module.exports = router;