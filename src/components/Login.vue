<template>
    <main class="flex" id="authentication">
        <form @submit.prevent="connect" class="flex" action="" method="">
            <input type="text" v-model="user" aria-label="Login" placeholder="Login">
            <input type="password" v-model="password" aria-label="Mot de passe" placeholder="Mot de passe">
            <button v-on:click="connectFromStore">Connexion</button>
            <button v-on:click="deconnectFromStore">Déconnexion</button>
        </form>
    </main>
</template>

<script>
export default {
  data(){
    return{
      user: ''
    }
  },
    methods: {
        connectFromStore: function (){
            preventDefault()
            this.$store.dispatch('setLogin', this.user)
            //console.log('Connexion : ' + this.user)
        },
        deconnectFromStore: function (){
            this.$store.dispatch('setLogin', null)
        }
    }
}
</script>

<style>

</style>