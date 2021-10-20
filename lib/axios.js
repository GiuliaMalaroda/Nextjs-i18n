import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://60b7546917d1dc0017b89b26.mockapi.io/api/'
});

export default instance;