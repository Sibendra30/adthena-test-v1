import axios from 'axios';

export const getUser = (filter) => axios.get(`https://jsonplaceholder.typicode.com/users${filter ? `?username=${encodeURIComponent(filter)}` : ''}`);
