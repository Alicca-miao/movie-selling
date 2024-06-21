import axios from 'axios'
export async function playing(){
    const {arr:films}=await axios.get('http://...')
    return films
}