async function getData(url){
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (error) {
        return error
    }
    }

function detailsCard(el){
return`
<div class="details_wrapper container" id="deailswrapper" >
         <div class="details_img">
         <img src="${el.image}" alt="">
         </div>
        <div class="details__info__wrapper">
          <h1>${el.name}</h1>
          <h2>
            Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный
            глянцевый блеск, четкие линии, красивые формы.
          </h2>
          <h2>Подходит для установки на деревянную/межкомнатную дверь.</h2>
          <h3>Цена</h3>
          <div class="price">
            <div class="newprice"><p>${el.newPrice}</p></div>
            <div class="oldprice"><p>${el.oldPrice}</p></div>
          </div>
          <button class="button">КОРЗИНКА</button>
        </div>
      </div>
`
}
function saveLC(event) {
  const cardId = event;
  localStorage.setItem('cardId', cardId); 
}
function createCard(el){
return `
<div class="card" data-id="${el.id}">
              <div class="card__head">
                <div class="isExist">
                  <h3>${el.isExist}</h3>
                </div>
                <div class="sale">
                  <span>SALE</span>
                </div>
              </div>
              <div class="part__img">
                <img src="${el.image}" alt="" />
              </div>
              <div class="part__info-card">
                <div class="card__info__head">
                  <div class="stars">
                    <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                    <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                    <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                    <i class="fa-regular fa-star" style="color: #8c8b87"></i>
                    <i class="fa-regular fa-star" style="color: #8c8b87"></i>
                    <div class="coments"><span>(${el.comments}) отзывов</span></div>
                  </div>
                  <p>${el.name}</p>
                  <br />
                  <div class="price">
                    <h3 class="new_price">$${el.newPrice}</h3>
                    <h3 class="old_price">$${el.oldPrice}</h3>
                  </div>
                </div>
              </div>
              <div class="box">
                <i class="fa-solid fa-gift" style="color: #4295e4"></i>Подарок
              </div>
            </div>
`
}


export{getData,createCard,detailsCard,saveLC}

