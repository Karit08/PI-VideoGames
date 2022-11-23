const { Videogame, Genre } = require('../db');

//Traigo Videogames de la Base de Datos ------------------------------------------------

const getDbGame = async() => {
    try{
        return await Videogame.findAll({ 
            include: [{
                model: Genre, 
                atributes: ['name'], 
                throught: { 
                    attributes: [] 
                }
            }]
        })
    } catch(e){
        console.error(e);
    };
};

module.exports = getDbGame;