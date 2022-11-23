const { Router } = require('express');
const genresRouter = Router();

genresRouter.get('/', (req,res)=>{
    res.send('Estoy en genres');
});

module.exports = genresRouter;