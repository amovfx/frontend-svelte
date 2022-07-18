// import axios from 'axios';
// console.log("From axios interceptors");
// console.log("Setting api base route to: " + process.env.API_BASE_URL);
// axios.defaults.baseURL = process.env.API_BASE_URL || 'http://localhost:3000';

// console.log("Setting api headers to: ");
// axios.interceptors.response.use(resp => resp, async err => {
//     console.log("Interceptor working");
//   if (err.response.status === 401) {
//     const {data, status} = await axios.post('refresh', {}, {withCredentials: true});

//     if (status === 200) {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
//         return axios(err.config);
//     }
//     localStorage.removeItem('token');
//     window.location.reload();
//   }
//   return err;
// });

