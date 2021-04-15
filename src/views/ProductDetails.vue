<template>
    <div>
        <b-card class = "main-body">
        <div class = "row">
            <div class="col-sm-4">
                 <img class = "prod-img" :src ="getImg(this.img)" alt= "prod-img"/>
            </div>
            <div class ="col-sm-7">
                <h2 class = "prod-title">{{this.name}}</h2>
                <h2 class = "prod-info">Product ID: {{this.id}}</h2>
                <h2 class = "prod-info">Price: Rp.{{this.price}}</h2>
                <p class = "prod-desc">{{this.desc}}</p>
                <router-link to="/"><button class = "int-button btn btn-danger">&lt;&lt; BACK</button></router-link>
                <button class = " int-button btn btn-primary" type = "button" @click="AddtoCart()">Add to Cart</button>
            </div>
        </div>
        </b-card>
        
    </div>
</template>
<script>
import store from '../store'
import router from '../router'
import 'bootstrap/dist/css/bootstrap.css'
export default{
    name: "ProductDetails",
    props:['productId'],
    data(){
        return{
            productData: {},
            id: this.productId,
            name: "",
            stock: 0,
            price: 0,
            img:"",
            desc:""
        }

    }, methods:{
        AddtoCart(){
            store.commit('AddtoCart')
            router.push('/cart')
        },
        getImg(file){
            console.log(file)
             let images = require.context('../assets/', false, /\.jpg$/)
            return images('./' + file)
        }
       
        
}, created(){
    store.commit('getProduct',this.productId)
    this.productData = store.getters.getProductDetails
    console.log(this.productData)
        console.log(this.name)
        //let storeDetails =
        this.name = this.productData.name
        this.stock = this.productData.stock
        this.price = this.productData.price
        this.img = this.productData.img
        this.desc = this.productData.desc

}
}
</script>
<style>
.prod-title{
    margin-left: 10%;
    font-size: 2.1em;
    font-weight: 650

}
.prod-img{
    margin-left: 10%;
    width: 200px;
    height: 200px
}
.prod-info{
    margin-left: 10%;
    font-size: 1.5em;
    font-weight: 450
}
.main-body{
    width: 60%;
    margin-left: 20%;
    margin-top: 5%
}
.int-button{
    margin-top: 5%;
    margin-left: 5%
}
.prod-info{
    margin-left: 10%;
    font-size: 1em;
    font-weight: 450
}
</style>