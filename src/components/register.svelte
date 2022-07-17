<script lang="ts">
    import FormField from '@smui/form-field';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import Button from '@smui/button';
    import LinearProgress from '@smui/linear-progress';
    import {goto} from '$app/navigation'
    import axios from 'axios';

    let email = '', password : string = '', password_confirm = '';

    function entropy(str: string) {
        const len = str.length
        
        // Build a frequency map from the string.
        const frequencies = Array.from(str)
            .reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {})
        
        // Sum the frequency of each character.
        return Object.values(frequencies)
            .reduce((sum, f) => sum - f/len * Math.log2(f/len), 0)
        }

    async function handleSubmit() {
        try {
            await axios.post('/api/v1/register', {
                email,
                password
            });

            goto('/');
        } catch (e) {
            console.error(e);
        }
        
    }

    $: isValid = !((password === password_confirm) && (password.length > 0))
    $: progress = Math.min((entropy(password) / 3.5),1.0)
    $: password_strength = Array("Hacked instantly", "Sad", "Ass", "Strong")[Math.floor(progress*3.5)]

    




</script>



<div style="--progress-color: hsl({progress*100},100%,50%,1)">
    <h5>Register</h5>
    <Textfield variant="outlined" bind:value={email} label="Email">
        <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
    <Textfield variant="outlined" bind:value={password} label="Password">
        <HelperText slot="helper">{`Strength: ${password_strength}`}</HelperText>
    </Textfield>
    <div>
    <LinearProgress {progress} />
</div>
    <Textfield variant="outlined" bind:value={password_confirm} label="Verify Password">
        <HelperText slot="helper">Verify your password</HelperText>
    </Textfield>
    <Button on:click={handleSubmit} disabled={isValid}>Sign In</Button>
</div>

<style lang='scss'>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        justify-self: center;
        justify-content: center;
        position:relative;
        width: 200px;
        padding: 20px
    }
    :global(.mdc-linear-progress__bar-inner) {

        border-color: var(--progress-color);
    

    }

</style>



