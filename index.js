const axios = require('axios');

exports.handler = async (event, context, callback) => {
    try {
        const answer = 'yes';
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jd6p6Jc6P1cvMdMSTqUfm1reDHHeLoff&q=${answer}&limit=1`);

        return callback(null, { statusCode: 200, body: JSON.stringify({ answer, url: res.data.data[0].url }) });
    } catch (error) {
        return callback(null, { statusCode: 500, body: 'Something went wrong' });
    }
}
