module.exports =function(sequelize, dataTypes){
    let alias = "Product"; 
    
    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        id_user : {
            type : dataTypes.INTEGER
        },
        imagen_producto:{
            type : dataTypes.STRING
        },
        nombre_producto : {
            type : dataTypes.STRING
        },
        descripcion_producto: {
            type : dataTypes.STRING
        },
        created_at: {
            type : dataTypes.DATE
        },
        updated_at: {
            type : dataTypes.DATE
        }
    
    };
    let config = {
        tableName : "product",
        timestamps : true,
        underscored : true
    }
    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
    Product.belongsTo(models.User, {
        as: "user", /* nombre del modelos a relacionar */
        foreignKey: "id_user" /* la columna que relaciona las 2 tablas */
    });
}
    return Product;
}

