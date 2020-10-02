import { useState, useEffect } from 'react'
import axios from 'axios';

const url ='https://6711f9f0f8a9.ngrok.io'

function useSearch(term) {

    const [data, setData] = useState(null)
    useEffect(() => {
        const sendFlaskMessage = { message: term }
        axios.post(url, sendFlaskMessage)
         .then((response) => setData(response.data))
         .catch((error) => console.error(error))
     console.log('it works!')
    },[term])    

    return {data}
}
export default useSearch