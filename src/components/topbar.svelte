

<script lang="ts">
    import type { TopAppBarComponentDev } from '@smui/top-app-bar';
    import TopAppBar, {
      Row,
      Section,
      Title,
      AutoAdjust,
    } from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    
    import Button from '@smui/button';

    import {goto} from '$app/navigation'
    import { onMount } from 'svelte';
    import axios from 'axios';
    
    
    let topAppBar: TopAppBarComponentDev;
    export let title = "Title"

    let auth = false;

    onMount(async () => {
      try {
        await axios.get('user');
        auth = true;
      } catch(e) {
        auth = false;
      }
    })

  </script>

<TopAppBar bind:this={topAppBar} variant="fixed">
    <Row>
      <Section>
        <IconButton class="material-icons">menu</IconButton>
        <Title>{title}</Title>
      </Section>
      
      <Section align="end" toolbar>
        {#if !auth}
        <Button on:click={()=> {goto('/login')}}>Login</Button>       
        <Button on:click={()=> {goto('/register')}}>Register</Button>
        {:else}
        <Button on:click={()=> {goto('/logout')}}>Logout</Button>
        {/if}

      </Section>
    </Row>
  </TopAppBar>
  <AutoAdjust {topAppBar}>
    <slot/>
  </AutoAdjust>

<style>
  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>


  

  


