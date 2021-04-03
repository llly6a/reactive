import Axios from 'axios';

const GET_USERS = '/users';
const GET_USER_POSTS = '/posts?userId='

const axios = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

export const usersApi ={
    addUser(user){
        return axios.post(GET_USERS, user)
        .then(response => response.data);
    },
    updateUser(user){
        return axios.post(GET_USERS, user)
        .then(response => response.data);
    },
    getUsers(){
        return axios.get(GET_USERS)
        .then(response => response.data);
    },
    getUserById(id){
        return axios.get(`${GET_USERS}/${id}`)
        .then(response => response.data);
    },
    getUserPosts(id){
        return axios.get(`${GET_USER_POSTS}${id}`)
        .then(response => response.data);
    }
}