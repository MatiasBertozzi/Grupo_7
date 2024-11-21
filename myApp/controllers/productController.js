
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
        order:[["created_at","DESC"],]}
 
    


      db.Product.findAll(filtro)/*objeto literario en donde se encuentra las condiciones*/
         
        
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
      detallePorduct:function(req, res) {
        let id=req.params.id
      db.Product.findByPk(id)
      .then(function (results) {
        return res.render("product",{results:results})
      })
      .catch(function (err) {
        console.log(err);
        })


      }
     
};


module.exports=product