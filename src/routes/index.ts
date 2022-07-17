import axios from 'axios'

export const get = async () => {
    console.log("Working endpoint ")
    console.log(process.env.API_BASE_URL)
    let endpoint : string = process.env.API_BASE_URL || 'http://localhost:8008'
    const {data, status} = await axios.get(endpoint, {});
    console.log(data)
    return {
        body: {
            message: data,
            base_url: process.env.API_BASE_URL || 'http://localhost:3000'
        }
    }
}