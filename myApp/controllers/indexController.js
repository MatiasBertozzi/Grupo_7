const db = require('../database/models')

module.exports = {
    index: function (req, res) {
        let filtro = {
            include: [{ association: "user" }],
            order: [["createdAt", "DESC"]], 
        };
        db.Product.findAll(filtro)
            .then(function (results) {
                res.render("index", { results });
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    }
    


