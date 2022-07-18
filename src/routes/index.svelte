<script lang='ts'>
  import axios from 'axios'
    import Button from '@smui/button';
import { onMount } from 'svelte';
    export let base_url : string;
    type Message = {
        message: string
    };
    
    export let message : Message;
    console.log("RUnning index.svelte")
    export let client_side : string = "No message"

    onMount(async () => {
      const {data, status} = await axios.get('/', {});
      if (status === 200) {
        console.log("Got message: " + data.message);
        client_side= data.message.message;
      }
    })
</script>

  
<section>
  <div>
  <h1>Welcome</h1>
  <h2>{base_url}</h2>
  <h2>{`Server side message: ${message.message}`}</h2>
  <h2>{`Client side message: ${client_side}`}</h2>
</div>
</section>

<style lang='scss'>
  div {
    display: flex;
    flex-direction: column;

  }
</style>
  


