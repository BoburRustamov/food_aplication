function menuOrder(item) {
    let order = document.querySelectorAll('.menu_category_btn-bascet');
    let showOrder = document.getElementById('order')

    order.forEach(btn => {
        btn.addEventListener('click', () => {
            const box = btn.closest('.menu_category-box');
            const category = box.querySelector('.chef_pick-left>h4').innerHTML;
            const img = box.querySelector('.menu_category-box-left>img').getAttribute('src');
            // const heart = box.querySelector('.chef_pick-left>h4');
            const title = box.querySelector('.menu_food-title').innerHTML;
            const text = box.querySelector('.foods_text').innerHTML;
            var price = box.querySelector('.price_change-into').innerHTML;
            let priceInto = Math.floor(price);

            var NewOrder = `<div class="order-into">
            <div class="menu_order-into">
            <div class="menu_header_title menu_order-header-title">
                <img class="back_icon" src="img/back_icon.png" alt="">
                <h1 class="menu_header_title-h1 order_menu-h1">${category}</h1>
            </div>
            <div class="menu_order-img">
                <img class="menu_order-img-img" src="${img}" alt="">
                <span class="favorites_heart">
                    <img class="favorites_heart-img favorites_heart-img1" src="img/Heart icons.png" alt="">
                    <img class="favorites_heart-img favorites_heart-img2" src="img/heart_icons-2.png">
                </span>
            </div>
            <div class="menu_order-main">
                <div class="menu_order-title">
                    <h3 class="foods_title">${title}</h3>
                    <p class="foods_text">${text}</p>
                </div>
                <h5 class="menu_order-line"></h5>
                <div class="chef_pick menu_order-chef-pick">
                    <div class="chef_pick-left">
                        <img src="./img/star.png" alt="">
                        <h5>5.0 <span>(34)</span></h5>
                        <h4>${category}</span></h4>
                    </div>
                    <button class="chef_pick_btn man_chef_pick-btn">Chef pick</button>
                </div>
                <h5 class="menu_order-line"></h5>
                <div class="menu_order-add">
                    <h3>AddOn</h3>
                    <div class="menu_order-addInput">
                        <div class="menu_order-addInput-left">
                            <img class="menu_order-fries" src="img/fries-img1.jpg" alt="">
                            <h4 class="menu_order-addInput-title">French fries</h4>
                        </div>
                        <div class="menu_order-addInput-into">
                            <label class="main__product-label">
                                <input type="checkbox" value="fries" class="main__product-checkbox" data-extra="fries">
                                <i class="fa-solid fa-check main__product-check"></i>
                            </label>
                            <h4 class="menu_order-addInput-price">$<span>4</span></h4>
                        </div>
                    </div>
                    <div class="menu_order-addInput">
                        <div class="menu_order-addInput-left">
                            <img class="menu_order-fries" src="img/pepsi-img1.webp" alt="">
                            <h4 class="menu_order-addInput-title">Pepsi</h4>
                        </div>
                        <div class="menu_order-addInput-into">
                            <label class="main__product-label">
                                <input type="checkbox" value="pepsi" class="main__product-checkbox" data-extra="pepsi">
                                <i class="fa-solid fa-check main__product-check"></i>
                            </label>
                            <h4 class="menu_order-addInput-price">$<span>2</span></h4>
                        </div>
                    </div>
                </div>
    
            </div>
            <h5 class="menu_order-line"></h5>
        </div>
        <div class="menu_order-intoOrder">
            <div class="booking_bottom-guests-number">
                <i class="fa-solid fa-minus plus_minus2 menu_order-M-P menu_order-minus"></i>
                <output class="menu_order-number">
                    <font>0</font>
                </output>
                <i class="fa-solid fa-plus plus_minus2 menu_order-M-P menu_order-plus"></i>
            </div>
            <div class="booking_bottom-guests-number menu_order-total">
                <h3><i class="fa-solid fa-basket-shopping menu_order-total-basket"></i> Total: $<span class="menu_order-price">${price}</class=></h3>
            </div>
        </div>
            </div>
            
            `

            showOrder.innerHTML = NewOrder;
            // document.querySelector('.menu_header').style.display = "none";
            // document.querySelector('.menu_category').style.overflow = "none";
            document.querySelector('.order-into').classList.add('order-intoActive');

            let array = [
                {}
            ]

            let value2 = document.querySelector('.menu_order-number')
            let orderPrice = document.querySelector('.menu_order-price')
            let count2 = value2.innerHTML = 1;
            let plusminus2 = document.querySelectorAll('.plus_minus2');
            plusminus2.forEach(btn => {
                btn.addEventListener("click", function (s) {
                    const style = s.currentTarget.classList;
                    if (style.contains("menu_order-minus") && count2 > 1) {
                        count2--;
                    } else if (style.contains('menu_order-plus') && count2 < 10) {
                        count2++;
                    }
                    value2.innerHTML = count2
                    let allprice = priceInto * count2;
                    let ss = orderPrice.innerHTML = allprice;
                    console.log(allprice);
                    // let ss = array.push('price');
                    // orderPrice.innerHTML = ss;
                    // console.log(orderPrice);
                    aa(ss)
                })
            })
            function aa(item){
                let label = document.querySelectorAll('.main__product-checkbox');
                for (const checkbox of label) {
                    checkbox.addEventListener('click', function () {
                        let ss = checkbox.closest('.menu_order-addInput-into');
                        let checkPrice = ss.querySelector('.menu_order-addInput-price>span').innerHTML;
    
    
                        if (this.checked == true) {
                            item += Math.floor(checkPrice);
                            // console.log(array.push(orderPrice));
                        } else {
                            // console.log(`you unchecke the ckechbox`);
                            item -= Math.floor(checkPrice);
                        }
                        orderPrice.innerHTML = item;
                    })
                }
            }



            // function ww(dd) {
            //     orderPrice.innerHTML = dd;
            //     ee(dd)
            // }
            // function aa(qq) {
            //     orderPrice.innerHTML = qq;
            //     ee(qq)
            // }
            // function ee(ff, gg) {
            //     console.log(ff);
            // }


        });

    });
}    