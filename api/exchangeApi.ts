import axios from "axios";

// const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const exchangeApi = axios.create({
    baseURL: 'https://api.exchangerate.host'
    /* params: {
        access_key: apiKey
    }, */
});

export default exchangeApi;