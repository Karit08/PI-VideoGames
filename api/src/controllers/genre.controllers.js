const axios = require('axios');
require("dotenv").config();
const { API_KEY } = process.env;
const { Genre } = require('../db');

const getGenresGames = async() => {
    try{
        const genreApi= await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres = await genreApi.data.results.map(g => g.name);
        
        genres.map(g => Genre.findOrCreate({
                    where: {name: g}
                })
        );
        // const allGenres = await Genre.findAll();
        return await Genre.findAll();
    }catch(e){
        return e.massege;
    };
};

module.exports = getGenresGames;