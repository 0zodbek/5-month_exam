async function getData(url){
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (error) {
        return error
    }
    }

function detailsCard(){
return
}
function createCard(el){
return `
<div class="card">
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

export{getData,createCard}