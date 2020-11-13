import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com', 
    headers:{
        Authorization: 'Client-ID xBplbekh4bjJsETC8VHDcndN2J592BL5_X8tNc6b1HI'
    }
});