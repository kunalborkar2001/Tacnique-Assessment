import axios from 'axios';
import { BASE_URL } from '../config.js';

let getAllUsers = async () => {
    let response = await axios.get(`${BASE_URL}/users`)
   return response
    
}

export { getAllUsers }