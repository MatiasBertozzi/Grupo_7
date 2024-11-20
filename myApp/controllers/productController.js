const db = require('../database/models')

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
         res.render("search-results.ejs");
      },
      addProduct:function(req, res, next) {
        res.render('product-add.ejs');
      },
};


module.exports=product