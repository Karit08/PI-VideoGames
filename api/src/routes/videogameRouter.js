const { Router } = require('express');
const videogameRouter = Router();
const { getAllParams } = require('../controllers/videogame.controllers');

videogameRouter.get('/:idVideogame', async (req, res) =>{
    const { idVideogame } = req.params;
    const infID = await getAllParams(idVideogame);
    try{
        infID ? 
        res.send(infID) : 
        res.status(404).send(`The ID ${id} does not match with any game`);
    }catch(e){
        res.json({ error: e.message});
    };
});

module.exports = videogameRouter;