import Axios from 'axios';

const GET_USERS = '/users';

const axios = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const usersApi ={
    getUsers(){
        return axios.get(GET_USERS)
        .then(response => response.data);
    }
}