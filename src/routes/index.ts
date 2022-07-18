import axios from 'axios'
console.log("Running index.ts")
export const get = async () => {
    console.log("Working endpoint ")
    console.log(process.env.API_BASE_URL)
    let endpoint : string = process.env.API_BASE_URL || 'http://localhost:8001/'
    const {data, status} = await axios.get('http://auth-server:8001/', {});
    console.log(data)
    return {
        body: {
            message: data,
            base_url: endpoint
        }
    }
}