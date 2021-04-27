<template>
  <div>
    <navbar></navbar>
    <login></login>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'

export default {
  name: 'App',
  components: {
    Navbar,
    Login
  }
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
}
</style>
