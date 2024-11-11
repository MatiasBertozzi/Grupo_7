module.exports =function(sequelize, dataTypes){
    let alias = "Producto"; 
    
    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        id_user : {
            type : dataTypes.INTEGER
        },
        nombre_producto : {
            type : dataTypes.STRING
        },
        created_at: {
            type : dataTypes.DATE
        },
        updated_at: {
            type : dataTypes.DATE
        },
        descripcion: {
            type : dataTypes.STRING
        }
        /* Falta la referens para foreign key*/

    };
    let config = {
        tableName : "product",
        timestamps : true,
        underscored : true
    }
    let Products = sequelize.define(alias, cols, config);
    return Products;
}