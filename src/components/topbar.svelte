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
    
    
    let topAppBar: TopAppBarComponentDev;
    export let title = "Title"
  </script>

<TopAppBar bind:this={topAppBar} variant="fixed">
    <Row>
      <Section>
        <IconButton class="material-icons">menu</IconButton>
        <Title>{title}</Title>
      </Section>
      
      <Section align="end" toolbar>
        <Button>Login</Button>
        <Button>Register</Button>
        <IconButton class="material-icons" aria-label="Download"
          >file_download</IconButton
        >
        <IconButton class="material-icons" aria-label="Print this page"
          >print</IconButton
        >
        <IconButton class="material-icons" aria-label="Bookmark this page"
          >bookmark</IconButton
        >
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
