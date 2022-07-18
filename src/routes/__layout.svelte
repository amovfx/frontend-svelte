<script lang='ts'>
    import Topbar from "../components/topbar.svelte";
    import { onMount } from 'svelte';
    import axios from 'axios';


    console.log("Running layout...")
    console.log(import.meta.env.VITE_MESSAGE)


    onMount( async () => {
        // console.log("Mounting app....")
        

        // console.log("Setting api base route to: " + base_url);
        // axios.defaults.baseURL = base_url || 'http://localhost:3000';

        // console.log("Setting api headers to: ");
        // axios.interceptors.response.use(resp => resp, async err => {
        //     console.log("Interceptor working");
        //     if (err.response.status === 401) {
        //         const {data, status} = await axios.post('refresh', {}, {withCredentials: true});

        //         if (status === 200) {
        //             axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        //             return axios(err.config);
        //         }
        //         localStorage.removeItem('token');
        //         window.location.reload();
        //     }
        //     return err;
        // });
    })
</script>
<div class='stack'>
    <Topbar title='Login'/>
    <slot/> 
</div>










<style>
    .stack{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position:relative;

}
</style>


