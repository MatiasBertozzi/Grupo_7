var express = require('express');
var router = express.Router();
const userController=require("../controllers/userControler")

/* GET users listing. */
router.get('/', userController.index);

/* registro del usuario */
router.get('/registro', userController.showRegistro);
router.post('/registro', userController.registro);

/* login */
router.get('/login', userController.login);
router.post('/login', userController.loginPost);

/* logout */
router.get('/logout', userController.logout);
router.post('/logout', userController.logout);

/* perfil */
router.get('/perfil/id/:id', userController.perfil);
router.get('/perfilUsuario', userController.perfilUsuario);



module.exports = router;
