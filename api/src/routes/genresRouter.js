const { Router } = require('express');
const genresRouter = Router();

const getGenresGames = require('../controllers/genre.controllers');

genresRouter.get('/', async (req,res)=>{
    // res.send('Estoy en genres');
    try{
        const genre = await getGenresGames();
        res.status(200).send(genre);
    }catch(e){
        res.status(404).json({ error: e.message});
    };
});

module.exports = genresRouter;

/*
200 solicitud existosa
201 exitosa y se creo post put
400 no se interpreso lo que se solicito 
404 algo que no se encontro 
500 error de servidor (conexión, sequelize)
*/ 