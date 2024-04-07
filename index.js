import axios from 'axios';

export const handler = async () => {
    const answer = 'yes';
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jd6p6Jc6P1cvMdMSTqUfm1reDHHeLoff&q=${answer}&limit=1`);

    return {
        status: 200,
        body: JSON.stringify({ answer, url: res.data[0].url })
    }
}
