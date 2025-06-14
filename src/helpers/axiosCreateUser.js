import axios from 'axios';
const url = "localhost:3000/api/usuarios";

const axiosInstanse = axios.create({
    baseURL:'url'
})