/* despues hay requerir la base de datos  */

const users={
    index:function(req, res, next) {
        res.send('respond with a resource');
      },
      registro:function(req, res, next) {
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