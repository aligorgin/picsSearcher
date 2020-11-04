import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID IasfFm6alEOxtrZ-O3__2M5ZrfZRM5x6EWDsuwJHEo4'
    }
})

