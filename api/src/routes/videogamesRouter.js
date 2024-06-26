const { Router } = require('express');
const videogamesRouter = Router();
const { getAllGames, getAllQuery } = require('../controllers/videogames.controllers');
const { Videogame, Genre } = require('../db.js')

videogamesRouter.get('/', async (req,res)=>{
    // res.send('Estoy en videogames');
    const { name } = req.query;
    try{
        if(name) { 
            const queryName = await getAllQuery(name);
            return res.status(200).send(queryName);
        } else { 
            const allGames = await getAllGames();
            return res.status(200).send(allGames);
        };
    } catch(e){
        // return res.status(400).json({ error: e.message});
       res.json({ error: e.message});
    }
    
});

videogamesRouter.post('/', async ( req, res)=>{
    let { name, description, released, rating, platforms, genres, image, is_Db } = req.body;
    if(!name && !description && !released && !rating && !platforms && !genres && !image){
        throw new Error ('Los campos requeridos no se llenaron correctamente');
    }else{
        try{
            if(name && description && platforms && genres && image){
                let newGame = await Videogame.create({ 
                    name,
                    description,
                    released,
                    rating, 
                    platforms,
                    image,
                    is_Db,
                });
                const relation = await Genre.findAll({ 
                    where: { 
                        name: genres,
                    }
                });
                await newGame.addGenre(relation);
                res.status(200).send('Game has been successfully created');
                // res.send(200).json({sucess: 'Game has been successfully created !!!'});
            }else{
                throw new Error('A required field is missing');
            };
        }catch(e){
            // console.log(e);
           res.json({ error: e.message});
        };
    }
});


module.exports = videogamesRouter;

/* Prueba -----------------
{
    "name": "Karla",
    "description": "Mi post",
    "released": "2019-08-18",
    "rating": "10.3",
    "platforms": ["henry", "PC"],
    "image": "https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-controlador-palo-playstation-vector-premium_262962-161.jpg?w=2000",
    "genres": ["Card", "Board Games", "Racing"]
} 
*/