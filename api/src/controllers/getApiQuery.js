const axios = require('axios');

const gameByQuery = async(name) =>{
    const query = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=ba49bbfc3edd4f1188d933cedeffaf5d`);
    // console.log(query);
    try{
        const videogameSearch = await query.data.results.map(game => {
            return {
                id: game.id,
                image: game.background_image,
                name: game.name,
                genres: game.genres?.map(g => g.name),
                rating: game.rating,
                platforms: game.platforms?.map(e => e.platform.name),
            }
        });
        return videogameSearch;
    }catch(e){
        console.error(e);
    };
};

module.exports = gameByQuery;