import axios from "axios";

const apiKey = process.env.API_KEY;

const exchangeApi = axios.create({
    baseURL: 'http://data.fixer.io/api',
    params: {
        access_key: '111dad6bdf6699a33535315b0d5b25a4'
    },
});

export default exchangeApi;