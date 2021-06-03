<template>
    <div>
        
        <div class = "row" v-bind:style="{marginTop: '5%'}">
            <div class="col-sm-5">
                 <iframe class = "vidframe" controls id = "thumb" type = "video/mp4" :src = this.productData.video>
                 </iframe>
            </div>
            <div class ="col-sm-6">
                <h4 class = "prod-cat">{{this.productData.category}}</h4>
                <h2 class = "prod-title">{{this.productData.name}}</h2>
                <h2 class = "prod-info">Price: Rp.{{this.productData.price}}</h2>
                <p class = "prod-desc">{{this.productData.description}}</p>
                <h3  class = "attrib-heading">SELECT SIZE</h3><br/>
                <div class = "size-format">
                
                <div @click = " pickSize(shoesize)" class = "size-grid" :key = "index" v-for="(shoesize, index) in productData.sizes">{{shoesize}}</div>
                <h3 v-bind:style="{width: '150px', height: '10px',  fontSize: '0.8em', marginLeft: '5%', float: 'left', }">SELECTED SIZE:{{this.productSize}}</h3>
                </div>
                <h3  class = "attrib-heading">SELECT COLOR</h3><br/>
                <div class = "color-format">
                    
                    <div :style = "{marginLeft: '5%'}" :key = "index" v-for="(colors, index) in productData.colors">
                        <div @click = " pickColor(colors.name)" v-bind:style="{width: '50px',
    height: '50px',
    paddingTop: '5%',
    float: 'left',
    marginLeft: '10%',
    borderRadius: '50%', backgroundColor: colors.color_hash}">&nbsp;</div>
    
                    </div>
                    <h3 v-bind:style="{width: '150px',
    height: '70px',
    paddingTop: '2%',
    fontSize: '0.8em',
    marginLeft: '5%',
    float: 'left', }">SELECTED COLOR:<br/>{{this.productColor}}</h3>
                </div>
                <div class ="row">
                    <div class = "col-sm-12">
                        <button class = " int-button btn " type = "button" @click=";AddtoCart(productData)">ADD TO CART</button>
                    </div>
                </div>
                <div class ="row">
                    <div class = "col-sm-12">
                        <router-link to="/"><button class = "bck-button btn"> BACK</button></router-link>
                    </div>
                </div>
                
            </div>
        </div>

        
    </div>
</template>
<script>
import store from '../store'
import router from '../router'
import 'bootstrap/dist/css/bootstrap.css'
export default{
    name: "ProductDetails",
    props:['product'],
    data(){
        return{
            productData: {},
            productSize: "",
            productColor:"",
            cartPrice:0,
            name: "",
            category: "",
            description: "",
            price:0,
            sizes:[],
            colors:[],
            video:""
        }

    }, 
    methods:{
        pickColor(color){
            console.log(color)
            
            this.productColor = color
            console.log(this.productColor)
        },
        pickSize(shoesize){
            this.productSize = shoesize
            console.log(this.productColor)
        },
        AddtoCart(prod){
            prod.selectedColor = this.productColor
            prod.selectedSize = this.productSize
            console.log(prod)
            store.commit('AddtoCart', prod)
            router.push('/cart')
        },
        getImg(file){
            console.log(file)
             let images = require.context('../assets/', false, /\.jpg$/)
            return images('./' + file)
        },
        playVid(){
            console.log("playing Video")
            document.getElementById("thumb").get[0].play()
        }
       
        
}, created(){
    console.log(this.product.video)
    //store.commit('getProduct',this.productName)
    this.productData = store.getters.getProductDetails
    this.productColor = this.productData.colors[0].name
    this.productSize = this.productData.sizes[0]
    this.cartPrice = store.getters.getTotalPrice
    //this.productData = this.product
    console.log(this.productData)
        //console.log(this.name)
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
.attrib-heading{
    margin-left: 10%;
    margin-top: 5%;
    font-weight: 550;
}
.vidframe{
    width: 100%;
    height: 70vh;
    margin-left: 5%
}
.color-name{
    font-size: 0.8em;
    text-align: center;
    text-align: center;
    margin-left: '10px'
}
.color-format{
    margin-top: 1%;
    margin-left: 5%;
    display: flex;
    flex-wrap:wrap
}
.size-format{
    margin-left: 10%;
    display: flex;
    flex-wrap:wrap
}
.size-grid{
    border: 1px solid black;
    margin-left: 2%;
    padding: 2px
}
.palette-grid{
    padding-top: 5%;
    margin-top: 2%;
}
.prod-cat{
    margin-left: 10%;
    font-size: 1.1em;
    font-weight: 350
}
.prod-title{
    margin-left: 10%;
    font-size: 3em;
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
    margin-top: 5%;
    margin-bottom: 5%
}
.int-button{
    margin-top: 2%;
    margin-left: 5%;
    background-color: black;
    color: white;
    float: right;
    width: 30vh
}
.bck-button{
    margin-top: 2%;
    margin-left: 5%;
    background-color:white;
    border: 1px solid black;
    color:black;
    float: right;
    width: 30vh
}
.prod-info{
    margin-left: 10%;
    font-size: 1em;
    font-weight: 450
}
.prod-desc{
    margin-left: 10%;
    margin-top: 2%;
    font-size: 1.2em
}
</style>