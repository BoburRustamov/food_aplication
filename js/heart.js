



function heart(btn) {


    // let basket = JSON.parse(localStorage.getItem(`data`)) || [];


    let menuBasketBtn = document.querySelectorAll('.favorite_heart-btn');
    let headerContents = document.querySelector(".heart_box");
    let headerContent = document.querySelector(".heart_boxs");
    menuBasketBtn.forEach(el => {
        // var ss = document.querySelector('.favorite_heart-btnActive')

        el.addEventListener("click", (like) => {
            const box = el.closest('.menu_category-box');
            const img = box.querySelector('img').getAttribute('src');
            const title = box.querySelector('.foods_title').innerText;
            const price = box.querySelector('.price_change').innerText;
            const OldPrice = box.querySelector('.price_old').innerText;
            const precent = box.querySelector('.foods_price-percent').innerText;
            const category = box.querySelector('.chef_pick-left>h4').innerText;
            

            // let heartBox = `<div class="heart_box">${box.innerHTML}</div>`

            var heartBox =
                `
        <div class="heart_box">
        <div class="menu_category-box-left">
            <img src="${img}" alt="">
            <div class="favorites_heart menu_favorites_heart">
                <span class="favorite_heart-btn">
                </span>
            </div>
        </div>
        <div class="menu_category-box-right">
        <div class="menu_category-box-right-into">
            <h3 class="foods_title menu_food-title">${title}</h3>
            <div class="foods_price">
                <div class="foods_price-into">
                    <h4 class="price_change"><span class="price_change-into">${price}</span></h4>
                    <span class="price_old">${OldPrice}</span>
                </div>
                <h4 class="foods_price-right"><span class="foods_price-percent">${precent}</span>% OFF</h4>
            </div>
            <div class="chef_pick">
                <div class="chef_pick-left">
                    <img src="./img/star.png" alt="">
                    <h5>5.0</h5>
                    <h4>${category}</h4>
                </div>
                <button class="chef_pick_btn man_chef_pick-btn">Chef pick</button>
            </div>
        </div>
        <div class="menu_category-title-box" id="cart_btn">
            <button class="menu_category_btn menu_category_btn-bascet" type="button"><i class="fa-solid fa-basket-shopping"></i>Cart</button>
        </div>
    </div>
    </div>
        `;
        // window.addEventListener("DOMContentLoaded", function () {
        //     ds(ss)
        // }
        let ss = []
            // el.classList.toggle('favorite_heart-btnActive');
            // el.classList.toggle('favorite_heart-btn');
            // if(el.classList.contains('favorite_heart-btnActive') == true){
                // headerContent.innerHTML += heartBox;
                ss.push({
                    title: title,
                    category: category,
                    img: img,
                    price: price,
                    precent: precent,
                    OldPrice: OldPrice,
                })
                console.log(ss);
            // }else{
                // console.log(`dislike`);
                // headerContent.innerHTML -= heartBox;
            // }
            // headerContent.innerHTML += ss;
            // function ds(menuItems) {
            //     let displayMenu = menuItems.map(function (item) {
                    
            //     });
            //     displayMenu = displayMenu.join("");
            //     menu_category.innerHTML = displayMenu
            //     heart(displayMenu)
            //     menuOrder(menuItems)
            // }
        // console.log(ss);
        

            // let cont = 0;
            // if (like.target.classList.contains('favorite_heart-btnActive')) {
            //     // headerContents.style.display = "flex";
            //     headerContent.innerHTML += heartBox;
            //     // headerContent.innerHTML = headerContents.style.display = "block";
            // } else if (like.target.classList.contains('favorite_heart-btn')) {
            //     headerContents.style.display = "none"
            //     // headerContent.innerHTML = heartBox;
            //     heartBox.remove();
            //     // headerContent.removeChild(heartBox)
            // }
        })
    })
}