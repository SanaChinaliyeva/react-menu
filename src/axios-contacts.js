import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://contact-book-sc.firebaseio.com/'
});

export default instance;
