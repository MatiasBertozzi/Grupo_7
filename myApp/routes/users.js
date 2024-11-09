var express = require('express');
var router = express.Router();
const userController=require("../controllers/userControler")

/* GET users listing. */
router.get('/', userController.index);

/* registro del usuario */
router.get('/registro', userController.registro);

/* login */
router.get('/login', userController.login);

/* logout */
router.get('/logout', userController.logout);

module.exports = router;
