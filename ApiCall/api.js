import axios from 'axios';
import { BASE_URL } from '../config.js';

let getAllUsers = async () => {

    try {
        let response = await axios.get(`${BASE_URL}/users`)
        return response
    }
    catch (error) {
        console.log(error);
        throw new Error ("Failed to get all Users")
    }
}


let addUser = async (formData) => {
    try {
        let response = await axios.post(`${BASE_URL}/users/`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response

    } catch (error) {
        console.log(error);
        throw new Error ("Failed to add User")
    }
}

let deleteUser = async (id) => {
    try {
        let response = await axios.delete(`${BASE_URL}/users/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response

    } catch (error) {
        console.log(error);
        throw new Error ("Failed to delete User")
    }
}


let patchUser = async (formData) => {
    try {
        let response = await axios.patch(`${BASE_URL}/users/`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response

    } catch (error) {
        console.log(error);
        throw new Error ("Failed to patch User")
    }
}

export { getAllUsers, addUser, deleteUser, patchUser }