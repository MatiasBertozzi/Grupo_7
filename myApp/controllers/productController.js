const db = require('../database/models')
const db =require("../database/models") 
const Op=db.Sequelize.Op; /* cuando queremos filtrar por criterios que no sean igualdad necesitamos utlizar operadores sequelize */

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
    searchProduct:function(req, res, next) {
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