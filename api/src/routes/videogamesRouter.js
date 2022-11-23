const { Router } = require('express');
const videogamesRouter = Router();
const getAllGames = require('../controllers/getAllGames');
const getApiQuery = require('../controllers/getApiQuery');
const getDbGames = require('../controllers/getDbGames');

videogamesRouter.get('/', async (req,res, next)=>{
    // res.send('Estoy en videogames');
    const { name } = req.query;
    const allGames = await getAllGames();
    if(name) { 
        try { 
            const apiByName = await getApiQuery(name);
            // console.log(apiByName);
            const dbByName = await getDbGames();
            // console.log(dbByName);
            let foundGamesDB =  dbByName.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
            let allGameByName = foundGamesDB.concat(apiByName);
            allGameByName.length ? res.status(200).send(allGameByName.slice(0,15)) : res.status(400).send('The game by that name was not found');
        } catch(err) {
            next(err);
        }
    }
    else {
        return res.status(200).send(allGames);
    };
});

module.exports = videogamesRouter;