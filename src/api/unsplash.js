import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 1CzZQm6v5gtVxnIS2--2SCrH743K89rooLg1wCJO4oI'
    }
})