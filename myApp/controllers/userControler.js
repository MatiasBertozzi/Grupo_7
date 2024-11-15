
const bcryptjs=require("bcryptjs")

const users={
    index:function(req, res, next) {
        res.send('respond with a resource');
      },
      showRegistro:function(req, res, next) {
        res.render('register.ejs');
      },
      registro:function(req, res, next) {
        /*capturo datos del formulario, tienen que coincidir los datos del formulario con las columnas de a base de datos */
        let form = req.body;
      
        if (form.email== "") {
          res.render("register.ejs",{respuesta:"el campo no puede estar vacio"})
        } else if(form.password == ""){
          res.send ("el campo no puede estar vacio")
        };

          form.password = bcryptjs.hashSync(form.password, 10);
       
         db.User.create(form) /* modelo de usuario lo usamos para guardar la info del form en la base de datos */
        .then((results) =>{
            return res.redirect("/");
        })
        .catch((err) => {
            return console.log(err);
            ;
        });       
       
      },
      login:function(req, res, next) {
        res.render('login.ejs');
      },
      logout:function(req, res, next) {
        res.send('respond with a resource');
      },
}

module.exports=users