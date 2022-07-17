<script lang="ts">
    import FormField from '@smui/form-field';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import Button from '@smui/button';
    import {goto} from '$app/navigation'
    import axios from 'axios';

    let email = '', password = '';

    async function handleSubmit() {
        try {
            const {data} = await axios.post('/api/v1/login', {
                email,
                password
            }, {withCredentials: true});

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            goto('/');
        } catch (e) {
            console.error(e);
        }
        
    }
</script>



<div class='stack'>
    <h5>Login</h5>
    <Textfield variant="outlined" bind:value={email} label="Email">
        <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
    <Textfield variant="outlined" bind:value={password} label="Password">
        <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
    <Button on:click={handleSubmit}>Log In</Button>
</div>


<style>
    .stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        heihgt: auto;


    }
</style>



