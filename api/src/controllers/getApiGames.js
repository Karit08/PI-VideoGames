const axios = require('axios');
const { API_KEY } = process.env;

//Solicito a la API los 100 VideoGAmes que ocupo ------------------------------------------------

const getApiGames = async() => {
    const all_Games = [];
    try{
        for (let i = 1; i <= 5; i++) {
            const api_Games= await axios.get(`https://api.rawg.io/api/games?key=ba49bbfc3edd4f1188d933cedeffaf5d&page=${i}`);
            api_Games.data.results.map(game => {
                all_Games.push({
                    id: game.id,
                    image: game.background_image,
                    name: game.name,
                    genres: game.genres?.map(g => g.name),
                    rating: game.rating,
                    platforms: game.platforms?.map(e => e.platform.name),
                });
            }); 
            // console.log(all_Games)
        };
        return all_Games;
    } catch(e){
        console.error(e);
    };
};

module.exports = getApiGames;