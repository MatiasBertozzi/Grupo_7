module.exports =function(sequelize, dataTypes){
    let alias = "User";
    
    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        usuario : {
            type : dataTypes.STRING(50)
        },
        email : {
            type : dataTypes.STRING,
        },
        password_user : {
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
        tableName : "users",
        timestamps : true,
        underscored : true
    }
    let Users = sequelize.define(alias, cols, config);
    return Users;
}