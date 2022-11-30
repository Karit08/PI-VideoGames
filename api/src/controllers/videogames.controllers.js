const axios = require("axios");
const { query, response } = require("express");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

// ---------------------------------- GET/videogames ----------------------------------

const getApiGames = async () => {
  const all_Games = [];
  try {
    for (let i = 1; i <= 5; i++) {
      const api_Games = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
      );
      api_Games.data.results.map((game) => {
        all_Games.push({
          id: game.id,
          image: game.background_image,
          name: game.name,
          genres: game.genres?.map((g) => g.name),
          rating: game.rating,
          platforms: game.platforms?.map((e) => e.platform.name),
        });
      });
      // console.log(all_Games)
    }
    return all_Games;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getDbGames = async () => {
  try {
    return await Videogame.findAll({
      include: {
        model: Genre,
        atributes: ["name"],
        throught: {
          attributes: [],
        },
      },
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

const getAllGames = async () => {
  try {
    const api = await getApiGames();
    const db = await getDbGames();
    // const games = [...api, ...db];
    const games = db.concat(api);
    return games;
  } catch (e) {
    throw new Error(e.message);
  }
};

// ---------------------------------- /videogames?name='..'  ----------------------------------

const gameByQuery = (name) => {
    const respuesta = axios.get( `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
    .then((reponse) =>{
        let query = reponse.data.results.map((game) =>{
            return {
                id: game.id,
                image: game.background_image,
                name: game.name,
                genres: game.genres?.map((g) => g.name),
                rating: game.rating,
                platforms: game.platforms?.map((e) => e.platform.name),
            }
        });
        return query;
    }).catch((e) => e.message);
    return respuesta;
};

const getAllQuery = async (name) => {
  const apiByName = await gameByQuery(name);
  const dbByName = await getDbGames();

  let findGameDb = dbByName.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );
  // IMPORTANTE ------------//

  let allGameByName = findGameDb.concat(apiByName);

  if (allGameByName.length) {
    return allGameByName.slice(0, 15);
  } else {
    throw new Error(`The ${name} game was not found`);
  }
};

module.exports = {
  getApiGames,
  getDbGames,
  getAllGames,
  gameByQuery,
  getAllQuery,
};



// const gameByQuery = async(name) =>{
//     const query = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
//     // console.log(query);
//     try{
//         const gameSearch = await query.data.results.map(game => {
//             return {
//                 id: game.id,
//                 image: game.background_image,
//                 name: game.name,
//                 genres: game.genres?.map(g => g.name),
//                 rating: game.rating,
//                 platforms: game.platforms?.map(e => e.platform.name),
//             }
//         });
//         return gameSearch;
//     }catch(e){
//         // console.error(e);
//         throw new Error( e.message);
//     };
// };