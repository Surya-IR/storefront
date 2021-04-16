<template>
    <div>
        <h2 class = "notif">ORDER CHECKED OUT!</h2>
        <router-link to = "/"><button class = "btn btn-info  back-button">Back to Products</button></router-link>
    </div>
</template>
<script>
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue)
export default{
    name: "Checkout"
}
</script>
<style scoped>
.notif{
    text-align: center;
    font-size: 2em;
    font-weight: 600;
    margin-top: 5%
}
.back-button{
    margin-left: 45%;
    margin-right: 40%;
    margin-bottom: 20%;
    margin-top: 5%
}
</style>