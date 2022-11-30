const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: { 
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      // type: DataTypes.DATEONLY
    },
    rating:{
      type: DataTypes.FLOAT,
    },
    platforms:{
      // type: DataTypes.ARRAY(DataTypes.TEXT),
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING
    },
    is_Db: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },{timestamps : false});
};

/* 
, freezeTableName: true 
- ID: * No puede ser un ID de un videojuego ya existente en la API rawg
- Nombre *
- Descripción *
- Fecha de lanzamiento
- Rating
- Plataformas *  */