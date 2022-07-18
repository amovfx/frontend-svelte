import axios from 'axios'
console.log("Running index.ts")

axios.defaults.baseURL = `${process.env.API_BASE_URL}` || 'http://localhost:8001'
console.log(`Setting axios base_url to ${axios.defaults.baseURL}`)
export const get = async () => {
    console.log("Working endpoint")
    console.log(axios.defaults.baseURL)
    let endpoint : string = process.env.API_BASE_URL || 'http://localhost:8001/'
    const {data, status} = await axios.get('/', {});
    console.log(data)
    return {
        body: {
            message: data,
            base_url: endpoint
        }
    }
}