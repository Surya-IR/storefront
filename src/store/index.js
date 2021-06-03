import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
async function getProductData(){
  let shoesData = await axios.get('https://my-json-server.typicode.com/megasuartika/fe-assignment/db')
  .then((res)=>res.data).then(data=> data.shoes)
  return shoesData
}
export default new Vuex.Store({
  state: {
    currentProduct: {},
    CartList:[],
    totalPrice: 0,
    products: getProductData()/*[
      {
        id: 1,
        name: "Product 1",
        price: 50000,
        img: 'cake1.jpg',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        id: 2,
        name: "Product 2",
        price: 55000,
        img: 'cake2.jpg',
        desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature"
      },
      {
        id: 3,
        name: "Product 3",
        price: 70000,
        img: 'cake3.jpg',
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        id: 4,
        name: "Product 4",
        price: 65000,
        img: 'cake4.jpg',
        desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      },
    ]*/
  },
  getters:{
    getProductDetails(state){
      return state.currentProduct
    },
    getCartList(state){
      return state.CartList
    },
    getTotalPrice(state){
      return state.totalPrice
    },
    getProducts(state){
      return state.products
    }
  },
  mutations: {
    getActualProduct(state, data){
      state.currentProduct = data
      console.log(state.currentProduct)
    },
    getProduct(state, name){
      console.log('initiating getProduct ' + name)
      for (let product of state.products){
        if(product.name === name){
          state.currentProduct = product
        }
      }//state.currentProduct = state.products.find(data => data.name === name)
      console.log('this here is return ')
      console.log(state.currentProduct)
      return state.currentProduct//state.currentProduct
    },
    AddtoCart(state, prod){
      state.CartList.push(prod)
      console.log(state.CartList)

    },
    AddFromList(state, id){
      state.CartList.push(state.products.find(data=> data.id === id))
    },
    removeFromCart(state, index){
      state.CartList.splice(index, 1)
    },
    totalPrice(state){
      let allPrice = state.CartList.filter(data=>{return data.price})
      console.log(allPrice)
      state.totalPrice = allPrice.reduce((a, b)=> a + b, 0 )
    }
  },
  actions: {
  },
  modules: {
  }
})
