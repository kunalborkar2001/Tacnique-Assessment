import axios from 'axios';
import { BASE_URL } from '../config.js';

let getAllUsers  = async () => {
    let response = await axios.get(`${BASE_URL}/users`)
    let data = await response.data

    console.log(data);
}
getAllUsers()