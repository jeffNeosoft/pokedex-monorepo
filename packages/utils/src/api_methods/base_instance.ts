import axios from 'axios';
export const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
export const fetchData = (url:string) =>{
    const axiosBaseInstance = axios.create({baseURL:BASE_URL});
    return axiosBaseInstance.get(url)
}