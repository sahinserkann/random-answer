const axios = require('axios');

exports.handler = async (event, context, callback) => {
    try {
        const apiKey = 'SnFkIteqzCUpPW5eHU6mFodmMPAkxUPu';
        const answers = ['yes', 'no'];
        const answer = answers[Math.floor(Math.random()*answers.length)];
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${answer}`);
        const items = res.data.data;
        const item = items[Math.floor(Math.random()*items.length)];

        return callback(null, { statusCode: 200, body: JSON.stringify({ answer, url: item.url }) });
    } catch (error) {
        if (error.response.status === 429) {
            return callback(null, { statusCode: 429, body: JSON.stringify(error.response.data.meta.msg) });
        }

        return callback(null, { statusCode: 500, body: 'Something went wrong!' });
    }
}
