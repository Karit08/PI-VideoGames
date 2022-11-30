const { Router } = require('express');
const genresRouter = Router();

const getGenresGames = require('../controllers/genre.controllers');

genresRouter.get('/', async (req,res)=>{
    // res.send('Estoy en genres');
    try{
        const genre = await getGenresGames();
        res.status(200).send(genre);
    }catch(e){
        res.json({ error: e.message});
    };
});

module.exports = genresRouter;