import { getData , createCard } from "../js/functions.js";
const cardwrapper = document.querySelector('#wrapper');

document.addEventListener('DOMContentLoaded',function(){
getData("https://cars-pagination.onrender.com/products")
.then(data =>{
data.forEach(element => {
    // console.log(element);
   if(element.id <= 12){
    let card =  createCard(element)
    cardwrapper.innerHTML += card;
}
   
});
})
.catch(err=>{
console.log(err);
})
})