import axios from 'axios';

const url = "https://rickandmortyapi.com/api/episode";

export const fetchData = async()=>{
    try {
        const {data} = await axios.get(url)
        return data
        
    } catch (error) {
        console.log(error)
    }
}