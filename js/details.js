import { detailsCard,getData } from "../js/functions.js";
  
  const wrapper = document.querySelector("#wrapper");
  // const loader = document.querySelector(".loader");
  
  
  function getStoredProducts() {
    let products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  }
  
  function saveProductToStorage(product) {
    let products = getStoredProducts();
    let confirmObekt = products.some((el) => el.id === product.id);
    if (!confirmObekt) {
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
      alert("Muvaffaqqiyatli saqlandi");
    } else {
      alert("Bunday mahsulotdan mavjud");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let url = window.location.href;
    let id = url.split("id=")[1];
    console.log(id);
    if (!id) {
      window.location.assign(`http://127.0.0.1:5500/index.html`);
      return;
    }
  
    getData(`https://cars-pagination.onrender.com/products/${id}`)
      .then((data) => {
        if (data.id) {
          const card = detailsCard(data);
          wrapper.innerHTML = card;
          const button = document.querySelector(".details__info__wrapper button");
        console.log(button);
        button.addEventListener("click", function () {
          saveProductToStorage({
            id: data.id,
            name: data.name,
            newPrice: data.newPrice,
            oldPrice: data.oldPrice,
            image: data.image,
            time: Date.now(),
          });
          window.location.assign(`http://127.0.0.1:5500/pages/cart.html`);
        });
          loader.style.display = "none";
        } else {
          wrapper.innerHTML = "Bunday mahsulot topilmadi.";
        }
        
        
      })
      .catch((error) => {
        return error;
      });
  });