/* despues hay requerir la base de datos  */


const product={
    searchProduct:function(req, res, next) {
         res.render("search-results.ejs");
      },
      addProduct:function(req, res, next) {
        res.render('product-add.ejs');
      },
};


module.exports=product