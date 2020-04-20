import axios from 'axios';

const url = "https://rickandmortyapi.com/api/episode";

export const fetchData = async(page)=>{
    try {
        const {data} = await axios.get(`${url}?page=${page}`)
        return data
    } catch (error) {
        console.log(error)
    }
}