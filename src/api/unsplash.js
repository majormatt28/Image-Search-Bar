import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID mpfPUpOrqwmC52x5NfbfNAHFrPkqPqCejZHJJDiZm4U'
    }
});