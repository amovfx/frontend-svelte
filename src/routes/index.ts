

export const get = () => {
    console.log("Working endpoint ")
    console.log(process.env.test)
    return {
        body: {
            message: 'Hello World!',
            base_url: process.env.API_BASE_URL || 'http://localhost:3000'
        }
    }
}