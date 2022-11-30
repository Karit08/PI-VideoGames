const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('genre', { 
    // id: { // ----
    //   primaryKey:true, 
    //   type: DataTypes.UUID, 
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },{timestamps : false});
};

/*Genero con las siguientes propiedades:
ID
Nombre
*/