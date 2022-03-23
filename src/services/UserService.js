import axios from "axios";

export class UserService
{

    static getAllUsers()
    {
        let dataURL = `http://jsonplaceholder.typicode.com/users`;
        return axios.get(dataURL);
    }
    static getUserDetails(userId)
    {
        let dataURL = `http://jsonplaceholder.typicode.com/users/${userId}`;
        return axios.get(dataURL);
    }
}