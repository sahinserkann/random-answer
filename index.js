const axios = require('axios');

exports.handler = async () => {
    try {
        const answer = 'yes';
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jd6p6Jc6P1cvMdMSTqUfm1reDHHeLoff&q=${answer}&limit=1`);

        return {
            status: 200,
            body: JSON.stringify({ answer, url: res.data.data[0].url })
        }
    } catch (error) {
        return {
            status: 500,
            body: JSON.stringify({ message: 'Something went wrong' })
        }
    }
}
