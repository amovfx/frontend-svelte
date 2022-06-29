<script>
    import Topbar from "../components/topbar.svelte";
</script>
<div>
<Topbar title="Login"/>
<slot/>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
</style>


