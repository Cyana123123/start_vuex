<template>
    <div>
        <p v-if="getLogin"> Bonjour {{ getLogin }}</p>
    </div>
</template>

<script>
export default {
    computed: {
            getLogin: function() {
                return this.$store.getters.getLoginFromStore
            }
    }
}
</script>

<style scoped>
    div {
        background-color: lightblue;
        height: 7em;
        width: 100%;
    }
</style>