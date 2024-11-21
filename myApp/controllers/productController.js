const db =require("../database/models") 
const Op=db.Sequelize.Op; /* cuando queremos filtrar por criterios que no sean igualdad necesitamos utlizar operadores sequelize */

const product={
    searchProduct:function(req, res) {

      db.product.findall({
        where:[{title:{[op.like]:""}}]
      })/* entre las comillas va a ir la busqueda del usuario */
         res.render("search-results.ejs");
      },
      addProduct:function(req, res) {
        res.render('product-add.ejs');
      },
};


module.exports=product