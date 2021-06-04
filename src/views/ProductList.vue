<template>
<div>
    
    <div class = "background">
        <router-link to="/cart"><button class = "btn btn-info cart-button">Cart</button></router-link>
        <h2 class = "page-header">LIST OF AVAILABLE PRODUCTS</h2>
        <div >
            <div class = "cat-format">
            <div class = "cat-body" :key="index"  v-for="(category, index) in this.categoryList">
                <div type = "e-link" @click = "FilterProd">{{category}}</div>
            </div>
            <div :style ="{width: '15%', float: 'left', marginTop: '2%', marginLeft: '8%', fontWeight: 700, fontSize: '1.2em'}" @click = "ClearFilter">Clear</div>
            </div>
        </div>

            
                
                <div class = "main-format">
                    <div class = "prod-body" :key="products.name" v-for="products in this.DisplayedList">                
                            <img @click ="getDetails(products)" class = "prod-img" :src ="getImg(products.name)" alt= "prod-img"/>
                            <h2 class = "product-header">{{products.name}}</h2>
                            <h2 class = "product-price">Price: Rp. {{products.price}}</h2>
                            
                    </div>
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
    name: 'ProductList',
    data(){
        return{
            ProductList: [],
            DisplayedList: [],
            dummyList: ['a','a', 'b', 'b','c','d'],
            filterWord:"",
            categoryList: []
        }
    },
    async created(){
        this.ProductList = await store.getters.getProducts
        this.DisplayedList = this.ProductList
        //let tempList = this.ProductList
        //this.FilterCategory(this.dummyList, this.categoryList)
        this.categoryList = this.FilterCategory(await this.ProductList)
        console.log(this.categoryList)
    },
    computed:{
        
    },
    methods:{
        ClearFilter(){
            this.DisplayedList = this.ProductList
        },
        getImg(file){
            let images = require.context('../assets/shoes/', false, /\.jpg$/)
            return images('./' + file + '.jpg')
        },
        getDetails(data){
            console.log(data)
            store.commit('getActualProduct', data)
            router.push({name: "ProductDetails", params:{product: data}}, ()=>{})
        },
        CartFromList(id){
            store.commit('AddFromList', id)
            router.push('/cart')
        },
        FilterCategory(arr){
            let categoryTemp = []
            for(let items of arr){
            categoryTemp.push(items.category)
            }
            return categoryTemp.filter((item, pos)=>{return categoryTemp.indexOf(item) === pos})
        },
        FilterProd(e){
            this.filterWord = e.target.innerText
            if(this.filterWord !== ""){
                this.DisplayedList = this.ProductList.filter(item => {return item.category === this.filterWord})
            }else if(this.filterWord ===("Clear" )){
                console.log("Clicked Clear")
                //this.DisplayedList = store.getters.getProducts
            }
            

            console.log(this.DisplayedList)
        }
    }
}
</script>
<style scoped>
@media only screen and (max-width: 480px){
.prod-body{
    width: 80px;
    float: left;
    margin-top: 2%;
    margin-left: 5%;
}
.main-format{
    margin-top: 1%;
    margin-left: 5%;
    display: flex;
    flex-wrap:wrap
}
}
.background{
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: #ffffff;
    
}
.product-body{
    margin-left: 10%;
    border-radius: 10px
}
.cart-button{
    float: right;
    margin-right: 11%;
    width: 15vh
}
.cat-body{
    width: 15%;
    float: left;
    margin-top: 2%;
    margin-left: 3%;
    font-weight: 700;
    font-size: 1.2em
}
.prod-body{
    width: 20%;
    float: left;
    margin-top: 2%;
    margin-left: 3%;
}
.page-header{
    text-align: center;
    font-weight: 550;
    margin-bottom: 2%
}
.cat-format{
     margin-top: 1%;
    margin-left: 25%;
    display: flex;
    flex-wrap:wrap
}
.main-format{
    margin-top: 1%;
    margin-left: 5%;
    display: flex;
    flex-wrap:wrap
}
.cat-header{
    margin-left: 5%;
    font-weight: 700;
    font-size: 1.2em;
    width: 20%;
    float: left
}
.product-header{
    margin-left: 5%;
    font-weight: 600;
    font-size: 1.5em;
    width: 100%;
    float: left
}
.product-price{
    margin-left: 5%;
    font-weight: 500;
    font-size: 1.1em;
    width: 50%
}
.det-button{
    width: 15vh;
    margin-right: 2%;
    margin-top: 4%;
}
.prod-img{
    width: 90%;
    height: 70%;
    margin-left: 2%;
    margin-bottom: 5%
}
</style>