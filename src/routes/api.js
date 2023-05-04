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
router.get("/SelectTodo",AuthMiddleware,TodoController.SelectTodo);
// router.post("/UpdateTodo",TodoController.UpdateTodo);
router.post("/UpdateTodo",AuthMiddleware,TodoController.UpdateTodo);
router.post("/UpdateTodoStatus",AuthMiddleware,TodoController.UpdateTodoStatus);
router.post("/DeleteTodo",AuthMiddleware,TodoController.DeleteTodo);
router.post("/SelectTodoByStatus",AuthMiddleware,TodoController.SelectTodoByStatus);
router.post("/SelectTodoByDate",TodoController.SelectTodoByDate);

module.exports = router;