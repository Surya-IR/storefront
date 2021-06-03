<template>
<div>
    
    <div class = "background">
        <router-link to="/cart"><button class = "btn btn-info cart-button">Cart</button></router-link>
        <h2 class = "page-header">LIST OF AVAILABLE PRODUCTS</h2>
        <div :key="products.id" v-for="products in this.ProductList">
            <b-card class = "product-body">
                <div class = "row main-format">
                    <div class = "col-sm-3">
                        <img class = "prod-img" :src ="getImg(products.img)" alt= "prod-img"/>
                    </div>
                    <div class = "col-sm-7">
                        <h2 class = "product-header">{{products.name}}</h2>
                        <h2 class = "product-price">Price: Rp. {{products.price}}</h2>
                    </div>
                    <div class = "col-sm-2">
                        <button class="btn btn-success det-button" type = "button" @click ="getDetails(products.id)">Details</button>
                        <button class="btn btn-primary det-button" type = "button" @click ="CartFromList(products.id)">Add to Cart</button>
                    </div>
            
                </div>
    </b-card>
</div>
    </div>
    
</div>
</template>
<script>
import Vue from 'vue'
import store from '../store'
import {shoeFetch} from '../dataFetch.js'
import router from '../router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue)
export default{
    name: 'ProductList',
    data(){
        return{
            ProductList: store.state.products
        }
    },
    mounted:{
       
    },
    computed:{
        
    },
    methods:{
        getImg(file){
            let images = require.context('../assets/', false, /\.jpg$/)
            return images('./' + file)
        },
        getDetails(id){
            console.log(id)
            router.push({name: "ProductDetails", params:{productId : id}})
        },
        CartFromList(id){
            store.commit('AddFromList', id)
            router.push('/cart')
        }
    }
}
</script>
<style scoped>

.background{
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: #f0ecec;
    
}
.cart-button{
    float: right;
    margin-right: 11%;
    width: 15vh
}
.page-header{
    text-align: center;
    font-weight: 550;
    margin-bottom: 2%
}
.main-format{
    margin-top: 0%;
    height: 15vh;
}
.product-header{
    margin-left: 5%;
    font-weight: 650;
}
.product-price{
    margin-left: 5%;
    font-weight: 500;
    font-size: 1.1em
}
.product-body{
    margin-left: 10%;
    width: 80%;
    border-radius: 10px
}
.det-button{
    float:right;
    width: 15vh;
    margin-right: 2%;
    margin-top: 4%;
}
.prod-img{
    width: 50%;
    height: 80%;
    margin-left: 5%;
    margin-bottom: 5%
}
</style>