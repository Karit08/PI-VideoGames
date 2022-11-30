const axios = require('axios');
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');

// ---------------------------------- GET/videogame ----------------------------------

const gameByParamsApi = async (id) => {
    try {
        const idApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        if(idApi) {
            const infoID = await idApi.data;
            const inf = {
                id: infoID.id,
                image: infoID.background_image,
                name: infoID.name,
                genres: infoID.genres?.map(g => g.name),
                description: infoID.description,
                released: infoID.released,
                rating: infoID.rating,
                platforms: infoID.platforms?.map(el => el.platform.name),
            };
            return inf;
        } else {
            throw new Error (`Failed to find game with Id: ${id}`);
        };
    } catch(e) {
        throw new Error( e.message);
    };
};


const gameByParamsDb = async (id) => {
    try {
        return await Videogame.findByPk(id, {
            include: [{
                model: Genre, 
                atributes: ['name'], 
                throught: { 
                    attributes: [] 
                },
            }],
        });
    } catch(e) {
        throw new Error(e.message);
    };
};


const getAllParams = async (id) => {
    const dbID = id.includes("-");
    if(dbID) { 
        const paramsDb = await gameByParamsDb(id);
        return paramsDb;    
    } else {
        const paramsApi = await gameByParamsApi(id);
        return paramsApi;
    };
};

module.exports ={
    gameByParamsApi,
    gameByParamsDb,
    getAllParams,
};