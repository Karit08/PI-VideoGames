const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', { // define mi modelo
    id: { // ----
      primaryKey:true, // clave primaria
      type: DataTypes.UUID, // genera un numero random con numeros, letras, unico, especifico y no se refpite. Es datatype de sequelize
      defaultValue: DataTypes.UUIDV4, // sequelize te genera el tipo por default, en versión 4
      allowNull: false, // no permite que este vacio, campo requerido
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
    background_image: {
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