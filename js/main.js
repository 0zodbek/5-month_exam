import { getData, createCard, saveLC} from "../js/functions.js";

document.addEventListener("DOMContentLoaded", async function () {
  const cardwrapper = document.querySelector("#wrapper");
  const select = document.querySelector("#Popularity");

  try {
    const data = await getData("https://cars-pagination.onrender.com/products");

    data.forEach((element) => {
      if (element.id > 4 && element.id <= 16) {
        const card = createCard(element);
        cardwrapper.innerHTML += card;
      }
    });

    select.addEventListener("change", function () {
      cardwrapper.innerHTML = "";

      data.forEach((element) => {
        if (this.value === element.category) {
          const card = createCard(element);
          cardwrapper.innerHTML += card;
          
        }
        const cards = document.querySelectorAll('.card');
    cards.length > 0 && cards.forEach(el => {
        el.addEventListener('click',function(event){
          const cardId = this.getAttribute("data-id");
  if (cardId) {
    window.location.assign(`https://exam-psi-azure.vercel.app/pages/details.html?id=${cardId}`);
  }
          // saveLC(this)
        // window.location.assign("http://127.0.0.1:5500/pages/details.html")
        })
    });
      });
    
      

      
    });
    const cards = document.querySelectorAll('.card');
    cards.length > 0 && cards.forEach(el => {
        el.addEventListener('click',function(event){
          const cardId = this.getAttribute("data-id");
  if (cardId) {
    window.location.assign(`https://exam-psi-azure.vercel.app/pages/details.html?id=${cardId}`);
  }
          // saveLC(this)
        // window.location.assign("http://127.0.0.1:5500/pages/details.html")
        })
    });
    
  } catch (err) {
    console.error(err);
  }
  
});
