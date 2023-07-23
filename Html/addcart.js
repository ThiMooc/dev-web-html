const data =[
    {
        name: "Vegeta",
        price: 1250
    },
    {
        name: "Master Roshi",
        price: 1050
    },
    {
        name: "Goku VS Frize",
        price: 1000
    },
    {
        name: "Blue VS Black",
        price: 1250
    },
    {
        name: "Jiren x Toppo",
        price: 1550
    },
    {
        name: "Goku SS2",
        price: 1550
    },
    {
        name: "Broly",
        price: 1250
    },
    {
        name: "Vegeta VS Cell",
        price: 1550
    },
]
function slCart(){
    window.open("http://127.0.0.1:5501/cart.html")
}
function add(){
    window.open("http://127.0.0.1:5501/danhsachsanpham.html")
}
function del(){
    del == delete 
    del == window.localStorage.clear();
    window.open("http://127.0.0.1:5501/cart.html")
}
function addcart(event){
    var product = window.localStorage.getItem('product')
    var listItem = JSON.parse(product)
    if(!listItem){
        listItem = [];
    }
for(var i=0; i<data.length;i++){
    if(data[i].name == event.value)
listItem.push({name:data[i].name,price:data[i].price})
}
var json = JSON.stringify(listItem)
   window.localStorage.setItem('product',json)
    // window.localStorage.removeItem('product')
console.log( window.localStorage.getItem('product'))
}

function fnselect() {

}