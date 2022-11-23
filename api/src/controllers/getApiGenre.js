const axios = require('axios');
const { API_KEY } = process.env;

const getApiGames = async() => {
    const api_Games= await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    
};

module.exports = getApiGames;