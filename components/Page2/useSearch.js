import axios from 'axios';
import { useState } from 'react';

const url = 'https://526664dde57d.ngrok.io'
function useSearch(term) {
    const [data, setData] = useState(null)

    const sendFlaskMessage = { message: term }
    axios.post(url, sendFlaskMessage)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error))
    console.log('it works!')
    
    return { data }
}
export default useSearch