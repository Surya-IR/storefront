<template>
    <div class = "background">
        
        <h2 class = "cart-title">ITEMS IN CART:</h2>

           

        <div :key="index" v-for="(products, index) in this.CartList">
            <b-card class = "prod-body">
                <div class = "row">
                    <div class = "col-sm-3">
                        <img class = "prod-img" :src ="getImg(products.img)" alt= "prod-img"/>
                    </div>
                    <div class = "col-sm-6">
                    <h2 class = "prod-title">{{ products.name }}</h2>
                    <h2 class = "prod-info">Product ID: {{ products.id }}</h2>
                    <h2 class = "prod-info">Price: {{ products.price }}</h2>
                    
                    </div>
                    <div class = "col-sm-2">
                        <button class = "btn btn-danger rm-button" type="button" @click="RemoveFromCart(index)">Remove</button>
                    </div>
                    
                </div>
            
            </b-card>
        </div>
        
        <div class = "row">
            <div class = "col-sm-12">
                <h2 v-if = "Empty" class = "empty-notif">Cart Is Empty!</h2>
                <h4 class = "total">TOTAL: Rp.{{this.totalPrice}}</h4>
            </div>
            <div class = "col-sm-5"></div>
            <div class = "col-sm-3">
                <router-link to ="/"><button class = "btn btn-danger btm-button" type="button">&lt;&lt;Back</button></router-link>
        <button class = "btn btn-success btm-button" type="button" @click = "Checkout()">Check Out</button>
            </div>
            <div class = "col-sm-4"></div>

        </div>
        
    </div>
</template>
<script>
import Vue from 'vue'
import store from '../store'
import router from '../router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue)
export default{
    name: 'Cart',
    //props:['CartList'],
    data(){
        return{
            CartList:[],
            Empty: true,
            totalPrice: 0,
        }
    }, created(){
        
        this.CartList = store.getters.getCartList
        if (this.CartList.length !== 0){
             this.Empty = false
        }
        store.commit('totalPrice')
        
        this.totalPrice = store.getters.getTotalPrice
    },mounted(){
        this.priceSum()
    },
     methods:{
        RemoveFromCart(ind){
            store.commit('removeFromCart', ind)
            if(this.CartList.length === 0){
                this.Empty = true

            }
            this.priceSum()
        },
        toList(){
            router.push('/')
        },
        getImg(file){
            let images = require.context('../assets/', false, /\.jpg$/)
            return images('./' + file)
        },
        priceSum(){
            let allPrice = 0
            for ( let i = 0; i<=this.CartList.length - 1; i++){
                allPrice = allPrice + this.CartList[i].price
                
            }
            this.totalPrice = allPrice
        },
        Checkout(){
            if(this.Empty !== true){
                router.push('/checkout')
            }
        }
    }
}
</script>
<style scoped>
.background{
    padding-top: 5%;
    height: 100vh
}
.empty-notif{
    margin-right: '50%';
    font-weight: 700;
    font-size: '1.5em';
    display: 'inline';
    text-align: center
            }
.cart-title{
    text-align: center;
    margin-top: 2%;
    font-size: 2em;
    font-weight: 600
}
.total{
    text-align: center
}
.btm-button{
    float: center;
    margin-top: 1%;
    margin-right: 5%;
    width: 15vh;
    height: 5vh
}
.rm-button{
    margin-top: 15%
}
.prod-title{
    font-size: 2em;
    font-weight: 550;
    margin-left: 5%;
    margin-top: 2%
}
.prod-info{
    font-size: 1.5em;
    font-weight: 450;
    margin-top: 2%;
    margin-left: 5%
}
.prod-body{
    margin-left: 10%;
    width: 80%;
    background-color: white;
    min-height: 20vh;
}
.prod-img{
    width: 200px;
    height: 200px
}
</style>