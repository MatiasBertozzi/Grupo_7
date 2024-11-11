/* despues hay requerir la base de datos  */

const users={
    index:function(req, res, next) {
        res.send('respond with a resource');
      },
      registro:function(req, res, next) {

        let form = req.body;/* capturo datos del formulario, tienen que coincidir los datos del formulario con las columnas de a base de datos */
        form.password = bcryptjs.hashSync(form.password, 10);
      
        db.User.create(form)  /* modelo de usuario para guardar la info del form en la base de datos */
        .then((results) =>{
            return res.redirect("/");
        })
        .catch((err) => {
            return console.log(err);
            ;
        });       
        
        
        res.render('register.ejs');
      },
      login:function(req, res, next) {
        res.render('login.ejs');
      },
      logout:function(req, res, next) {
        res.send('respond with a resource');
      },
}

module.exports=users