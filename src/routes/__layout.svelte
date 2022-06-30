<script>
    import Topbar from "../components/topbar.svelte";
</script>

<Topbar title="Login"/>
<slot/>





<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position:relative
}
</style>


