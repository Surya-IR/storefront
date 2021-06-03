<template>
    <div class = "background">
        
        <h2 class = "cart-title">ITEMS IN CART:</h2>

           
         <div class = "row cart-container">
                    <span class = "col-sm-2" v-bind:style = "{fontSize: '1.2em',
    fontWeight: 600,
    marginLeft: '1%'}">Preview</span>
                    <span class = "col-sm-2"  v-bind:style = "{fontSize: '1.2em',
    fontWeight: 600,
    marginLeft: '1%'}">Name</span>
                    <span class = "col-sm-1"  v-bind:style = "{fontSize: '1.2em',
    fontWeight: 600,
    marginLeft: '1%'}">Price</span>
                    <span class = "col-sm-2"  v-bind:style = "{fontSize: '1.2em',
    fontWeight: 600,
    marginLeft: '1%'}">Color</span>
                    <span class = "col-sm-2"  v-bind:style = "{fontSize: '1.2em',
    fontWeight: 600,
    marginLeft: '1%'}">Size</span>
                    <span class = "col-sm-1"  v-bind:style = "{fontSize: '1.2em',
    fontWeight: 600,
    marginLeft: '1%'}"></span>
                    
                </div>
        <div :key="index" v-for="(products, index) in this.CartList">
            
                <div class = "row cart-content">
                    <div class = "col-sm-2">
                        <img class = "prod-img" :src ="getImg(products.name)" alt= "prod-img"/>
                    </div>
                    
                    <h2 class = "col-sm-2 prod-title">{{ products.name }}</h2>
                    <h2 class = "col-sm-1 prod-title">{{ products.price }}</h2>
                    <h2 class = "col-sm-2 prod-title">{{ products.selectedColor }}</h2>
                    <h2 class = "col-sm-2 prod-title">{{ products.selectedSize }}</h2>
                    
                    
                    <div class = "col-sm-1">
                        <button class = "btn btn-danger rm-button" type="button" @click="RemoveFromCart(index)">X</button>
                    </div>
                    
                </div>

        </div>
        
        <div class = "row">
            <div class = "col-sm-12">
                <h2 v-if = "Empty" class = "empty-notif">Cart Is Empty!</h2>
                <h4 class = "total">TOTAL: Rp.{{this.totalPrice}}</h4>
                <button class = "btn btm-button" type="button" @click = "Checkout()">Check Out</button>
                
            </div>
            <div class = "col-sm-12">
                <router-link to ="/"><button class = " btn bck-button" type="button">Back</button></router-link>
        
            </div>

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
            let images = require.context('../assets/shoes/', false, /\.jpg$/)
            return images('./' + file + '.jpg')
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
.cart-container{
    margin-left: 10%;
    margin-right: 10%;
    background-color: #ececec;
    text-align: center
}
.cart-title{
    font-size: 0.8em;
    font-weight: 500;
    margin-left: 1%;
    margin-top: 2%
}
.cart-content{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
    margin-bottom: 2%;
    text-align: center
}
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
    text-align: right;
    margin-right: 10%
}
.btm-button{
    float: right;
    margin-top: 1%;
    margin-right: 10%;
    width: 25vh;
    height: 5vh;
    background-color: black;
    color: white;
}
.bck-button{
    float: right;
    margin-top: 1%;
    margin-right: 10%;
    width: 25vh;
    height: 5vh;
    border: 1px solid black;
    background-color: white;
    color: black;
}
.rm-button{
    margin-top: 35%;
    border-radius: 50%;
    float: right
}
.prod-title{
    font-size: 1em;
    font-weight: 550;
    margin-left: 1%;
    margin-top: 3%
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
    width: 150px;
    height: 150px
}
</style>