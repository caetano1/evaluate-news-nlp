// To perform 'fetch' on Node
const fetch = require('node-fetch');

async function apiResponse (url='') {
    const res = await fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    try {
        const responseBody = await res.json();
        return responseBody;
    } catch (e) {
        console.log(e);
        return {error: e};
    }
};

module.exports = { apiResponse }