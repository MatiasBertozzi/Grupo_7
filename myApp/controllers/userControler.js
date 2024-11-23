
const db =require("../database/models") 
const bcryptjs=require("bcryptjs");

const users={
    index:function(req, res) {
        res.send('respond with a resource');
      },
      showRegistro:function(req, res) {
        res.render('register.ejs');
      },
      registro:function(req, res) {
        /*capturo datos del formulario, tienen que coincidir los datos del formulario con las columnas de a base de datos */
        let form = req.body;
        
        if (form.email== "") {
          res.send ("el campo email no puede estar vacio")
        } else if(form.password_user== ""){
          res.send ("el campo password no puede estar vacio")
        };
        
        form.password_user = bcryptjs.hashSync(form.password_user, 10);
        
         db.User.create(form) /* modelo de usuario lo usamos para guardar la info del form en la base de datos */
        .then((results) =>{
          return res.redirect("/users/login")
        })
        .catch((err) => {
            return console.log(err);
            ;
        });       
       
      },
      login:function(req, res, next) {
        res.render('login.ejs');
      },
      loginPost:function(req,res){
        let form = req.body;
        let filtro = {
          where: {email : form.email}
        }

        db.User.findOne(filtro)
        .then(function(results){
          if (!results) {
            return res.send('No hay mail')
          } else {
            let check =bcryptjs.compareSync(form.password, results.password_user)
            if (check) {
              //Debo poner el usuario de inicio de session//
              req.session.userLogueado = results.dataValues; //para guardar los datos importentes de la tabla//
              
              return res.redirect('/');
            } else {
              return res.send("La contraseña es incorrecta")
            }
          }
        }).catch(function(error){
        return console.log(error)
        });
      },
      logout:function(req, res, next) {
        req.session.destroy();
        res.clearCookie("id_user");
        return res.redirect("/")
      },
}

module.exports=users