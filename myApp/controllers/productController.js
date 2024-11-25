
const db =require("../database/models") 
const op=db.Sequelize.Op; /* cuando queremos filtrar por criterios que no sean igualdad necesitamos utlizar operadores sequelize */

const product ={
    detalle: function (req,res){
      let id = req.params.id;
      let filtro = {
          include: [{association: "user"}]
      }
      db.Product.findByPk (id, filtro)
      .them(function(results) {
        return res.render('product',{producto: results})
      })
      .catch(function(error){
        console.log(error)
      })
    },
    searchProduct:function(req, res) {

      let buscador= req.query.search
      let filtro={
        where:[{nombre_producto: {[op.like]:`%${buscador}%`}}],     
        order:[["created_at","DESC"]],
        include:[{association:"user"}]}
 

      db.Product.findAll(filtro)
        .then(function (results) {
          if (results[0]==null) {
            return res.send("No hay resultados para su criterio de búsqueda.")
          } else {
            return res.render("search-results", {results:results})
          }
            
          
          
         }) /* luego de que reciba los datos ejecuta la promesa */
         .catch(function (err) {
          console.log(err);
          
         })/* si algo sale mal salta error */
      },
      addProduct:function(req, res) {
        res.render('product-add.ejs');
      },
      addProductPost:function(req, res){
        let form = req.body;
        form.id_user = req.session.userLogueado.id;

        if (form.imagen == ''){
          res.send('La imagen no puede estar vacia')
        }else if (form.nombre_producto == ''){
          res.send('El producto no puede estar vacio')
        }else if (form.description == ''){
          res.send('La descripcion no puede estar vacia')
        }else{
          db.Product.create(form)
          .then(function(){
            return res.redirect('/')
          })
          .catch(function(error){
            return console.log(error)
          })
        }
      },
      detallePorduct:function(req, res) {
        let id=req.params.id
        let filtro={ where:[{id:id}],
        include:[{association:"user"}]}
      db.Product.findOne( filtro)
      .then(function (results) {
        return res.render("product",{results:results})
      })
      .catch(function (err) {
        console.log(err);
        })


      }
     
};


module.exports=product