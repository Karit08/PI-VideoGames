const getApiGames = require('./getApiGames');
const getDbGames = require('./getDbGames');

const getAllGames = async()=>{
    try{
        const api = await getApiGames();
        const db = await getDbGames();
        // const games = [...api, ...db];
        const games = db.concat(api);
        return games;
    } catch(e){
        console.error(e);
    };
};

module.exports = getAllGames;