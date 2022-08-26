window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(foods_title)
    displayMenucategory(children)
    displayMenucategory2(children)
    foodmenu(foods_menu)
    // booking(booking)
})



// All buttons
const btn22 = document.querySelectorAll('.all_btns');
btn22.forEach((btn) => {
    btn.onclick = function (e) {
        let x = e.clientx - e.target.offsetLeft;
        let y = e.clienty - e.target.offsetTop;
        let ripple = document.createElement('span');
        ripple.style.left = "${x}px";
        ripple.style.top = "${y}px";
        this.appendChild(ripple);
        setTimeout(function () {
            ripple.remove()
        }, 600);//1second = 1000ms
    }
});






// Home popular Category
let tabs = document.querySelectorAll(".header_links");
let contents = document.querySelectorAll(".header_content");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
            contents[j].classList.remove("active");
            tabs[i].classList.add("active");
            contents[i].classList.add("active");
        }
    });
}
const popular_category = document.querySelector(".popular_category_boxs");
function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map(function (item) {
        return `<a href="#${item.category}" class="popular_category_box">
                    <img src='${item.img}' alt="">
                    <h4>${item.title}</h4>
                </a>`
    });
    displayMenu = displayMenu.join("");
    popular_category.innerHTML = displayMenu
}

const popular_see = document.querySelector('.see_all');
const popular_boxs = document.querySelector('.popular_category_boxs')

popular_see.addEventListener('click', function () {
    popular_boxs.classList.toggle('popular_category_box-wrap')
})
// End Home popular Category




// Home. Menu start
const homeMenu = document.querySelectorAll('.home_important-main')
function foodmenu(menuItems) {
    let ss = homeMenu.forEach(homeMenuinto => {
        let specialmenu = menuItems.map(function (item) {
            const category = homeMenuinto.getAttribute('data-homeMenu')
            const allresult = (`${item.price}` - (`${item.price}` / 100) * `${item.precent}`)
            let homeMenuBox = `<div id="${item.category}" class="special_category_box allMenuBox">
                <div class="special_category_box-top">
                    <img src="${item.img}" alt="">
                    <div class="favorites_heart menu_favorites_heart">
                        <span class="favorite_heart-btn">
                        </span>
                    </div>
                </div>
                <div class="special_category_box-bottom">
                    <h3 class="foods_title">${item.title}</h3>
                    <div class="foods_price">
                        <div class="foods_price-into">
                            <h4 class="price_change">$${allresult}</h4>
                            <span class="price_old">$${item.price}</span>
                        </div>
                        <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
                    </div>
                    <p class="foods_text">${item.desc}</p>
                    <div class="chef_pick">
                        <div class="chef_pick-left">
                            <img src="./img/star.png" alt="">
                            <h5>5.0 <span>(34)</span></h5>
                            <h4>Main Course</h4>
                        </div>
                        <button class="chef_pick_btn">Chef pick</button>
                    </div>
                </div>
            </div>`
            if (item.category == category) {
                return homeMenuBox
            } else if (category == 'todayMenu') {
                if (item.category == 'biryani' || item.category == 'stake') {
                    return homeMenuBox
                }
            }
        });
        specialmenu = specialmenu.join("");
        homeMenuinto.innerHTML = specialmenu
    });

}

// End Home Menu



// Menu Section start
const children = food_menu2.concat(foods_menu);
const menu_category = document.querySelector(".menu_category-boxs");
const menu_categoryfilter = document.querySelectorAll(".menu_category_btn");

function displayMenucategory(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // if (item.category == 'burger') {
        const allresult = (`${item.price}` - (`${item.price}` / 100) * `${item.precent}`)
        return `<div class="menu_categorybox">
        <div class="menu_category-box allMenuBox" id=${item.id}>
        <div class="menu_category-box-left">
            <img src="${item.img}" alt="">
            <div class="favorites_heart menu_favorites_heart">
                <span class="favorite_heart-btn">
                </span>
            </div>
        </div>
        <div class="menu_category-box-right">
        <div class="menu_category-box-right-into">
            <h3 class="foods_title menu_food-title">${item.title}</h3>
            <div class="foods_price">
                <div class="foods_price-into">
                    <h4 class="price_change">$<span class="price_change-into">${allresult}</span></h4>
                    <span class="price_old">${item.price}</span>
                </div>
                <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
            </div>
            <div class="chef_pick">
                <div class="chef_pick-left">
                    <img src="./img/star.png" alt="">
                    <h5>5.0</h5>
                    <h4>${item.category}</h4>
                </div>
                <p class="foods_text menu_category-text">${item.desc}</p>
                <button class="chef_pick_btn man_chef_pick-btn">Chef pick</button>
            </div>
        </div>
        <div class="menu_category-title-box" id="cart_btn">
            <button class="menu_category_btn menu_category_btn-bascet" type="button"><i class="fa-solid fa-basket-shopping"></i>Cart</button>
        </div>
    </div>
    </div>
    </div>
    `

    });
    displayMenu = displayMenu.join("");
    menu_category.innerHTML = displayMenu
    heart(displayMenu)
    menuOrder(menuItems)
}
function displayMenucategory2(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        if (item.category == 'burger') {
            const allresult = (`${item.price}` - (`${item.price}` / 100) * `${item.precent}`)
            return `<div class="menu_categorybox">
            <div class="menu_category-box allMenuBox" id=${item.id}>
            <div class="menu_category-box-left">
                <img src="${item.img}" alt="">
                <div class="favorites_heart menu_favorites_heart">
                    <span class="favorite_heart-btn">
                    </span>
                </div>
            </div>
            <div class="menu_category-box-right">
            <div class="menu_category-box-right-into">
                <h3 class="foods_title menu_food-title">${item.title}</h3>
                <div class="foods_price">
                    <div class="foods_price-into">
                        <h4 class="price_change">$<span class="price_change-into">${allresult}</span></h4>
                        <span class="price_old">${item.price}</span>
                    </div>
                    <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
                </div>
                <div class="chef_pick">
                    <div class="chef_pick-left">
                        <img src="./img/star.png" alt="">
                        <h5>5.0</h5>
                        <h4>${item.category}</h4>
                    </div>
                    <p class="foods_text menu_category-text">${item.desc}</p>
                    <button class="chef_pick_btn man_chef_pick-btn">Chef pick</button>
                </div>
            </div>
            <div class="menu_category-title-box" id="cart_btn">
                <button class="menu_category_btn menu_category_btn-bascet" type="button"><i class="fa-solid fa-basket-shopping"></i>Cart</button>
            </div>
        </div>
        </div>
        </div>`
        }
    });
    displayMenu = displayMenu.join("");
    menu_category.innerHTML = displayMenu
    menuOrder(menuItems)
    heart(displayMenu)
};




// load items

// filter items

menu_categoryfilter.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        toggleClass(menu_categoryfilter, this)
        const category = e.currentTarget.dataset.menu;
        const menuCategory = children.filter(function (menuItem) {
            if (menuItem.category == category) {
                return menuItem
            }
        })
        if (category == 'burger') {
            displayMenucategory(menuCategory)
        } else {
            displayMenucategory(menuCategory)
        }
        let ss = btn.querySelector('.menu_category_imgActive')
        let ss2 = btn.querySelector('.menu_category_img')
        if (btn.classList.contains('active')) {
            ss.style.display = "block"
            ss2.style.display = "none"
        } else {
            ss.style.display = "none"
            ss2.style.display = "block"
        }
    });
});
function toggleClass(buttons, buttonToActivate) {
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    buttonToActivate.classList.add('active');
}




var count = 0;
const plusminus = document.querySelectorAll('.plus_minus-icon');
const value = document.querySelector('.main__product-num')
const span = document.querySelector('.spann')
const xres = document.querySelector('.bootking_kres')
const bookingRemove = document.querySelector('.booking-remove')
const time_btn = document.querySelectorAll('.booking_time-btn')
let guests = document.querySelector('.order-result__guests');
let comeTime = document.querySelector('.order-result__time');
let comeDate = document.querySelector('.order-result__date');
let order = document.querySelector(".booking_confirm-btn");
let orderRemove = document.querySelector('.order_remove');
let order_result = document.querySelector('.order-result');
// let orderActive = document.querySelector('.order-resultactive')
let bookingThinking = document.querySelector('.bookingThinking')
let bookingNoBtn = document.querySelector('.bookingThinking-btn-no')
let bookingYesBtn = document.querySelector('.bookingThinking-btn-yes')


bookingRemove.addEventListener('click', () => {
    count = 0;
    value.innerHTML = count;
    time_btn.forEach(function (item) {
        item.classList.remove('active')
    });
    date.forEach(function (item) {
        item.classList.remove('active')
    });
    bookingRemove.classList.remove('bootking_kresActive')
    xres.classList.remove('bootking_kresActive')
})
xres.addEventListener('click', () => {
    count = 0;
    value.innerHTML = count;
    time_btn.forEach(function (item) {
        item.classList.remove('active')
    });
    date.forEach(function (item) {
        item.classList.remove('active')
    });
    bookingRemove.classList.remove('bootking_kresActive')
    xres.classList.remove('bootking_kresActive')
})
orderRemove.addEventListener('click', () => {
    bookingThinking.classList.add('bookingThinkingActive')
    bookingNoBtn.addEventListener('click', function () {
        bookingThinking.classList.remove('bookingThinkingActive')
    })
    bookingYesBtn.addEventListener('click', function () {
        order_result.classList.remove('order-resultactive')
        bookingThinking.classList.remove('bookingThinkingActive')
    })
})
plusminus.forEach(btn => {
    btn.addEventListener("click", function (s) {
        const style = s.currentTarget.classList;
        if (style.contains("minus_icon") && count > 0) {
            count--;
        } else if (style.contains('plus_icon') && count < 10) {
            count++;
        }
        value.innerHTML = count
        if (count <= 0) {
            bookingRemove.classList.remove('bootking_kresActive')
            xres.classList.remove('bootking_kresActive')
        } else {
            bookingRemove.classList.add('bootking_kresActive');
            xres.classList.add('bootking_kresActive');
        }
    })
})
for (let i = 0; i < time_btn.length; i++) {
    time_btn[i].addEventListener("click", () => {
        time_btn.forEach(function (item) {
            if (item !== time_btn[i]) {
                item.classList.remove("active")
            }
        });
        time_btn[i].classList.toggle("active")
    });
}

let date = document.querySelectorAll('.booking_date-bottom-box')
for (let i = 0; i < date.length; i++) {
    date[i].addEventListener('click', () => {

        date.forEach(function (item) {
            if (item !== date[i]) {
                item.classList.remove("active")
            }
        });
        date[i].classList.toggle("active")
    })
}
order.addEventListener("click", () => {
    if (value.innerHTML > 0) {
        order_result.classList.add('order-resultactive')
    }
    guests.innerHTML = value.innerHTML;
    time_btn.forEach(time => {
        if (time.classList.contains('active')) {
            comeTime.innerHTML = time.innerHTML
        }
    });
    for (let i = 0; i < date.length; i++) {
        if (date[i].classList.contains('active')) {
            if (date[i].classList.contains('mon')) {
                comeDate.innerHTML = `monday`
            } else if (date[i].classList.contains('tue')) {
                comeDate.innerHTML = `tuesday`
            } else if (date[i].classList.contains('wed')) {
                comeDate.innerHTML = `wednesday`
            } else if (date[i].classList.contains('thur')) {
                comeDate.innerHTML = `thursday`
            } else if (date[i].classList.contains('fri')) {
                comeDate.innerHTML = `friiday`
            } else if (date[i].classList.contains('sat')) {
                comeDate.innerHTML = `saturday`
            } else if (date[i].classList.contains('sun')) {
                comeDate.innerHTML = `sunday`
            }
        }

    }

})



















let monthBottonBtn = document.querySelector('.b_d_top-right-into')
let booking_month = document.querySelector('.booking_month');
let monthH4 = document.querySelector('.booking_date-top-right-b')
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let dd = month.forEach(element => {
//     return `<h5 class="booking_all-title booking_month month_all">${element}</h5>`
// });
// monthH4.innerHTML = dd.innerHTML
let monthDate = month[new Date().getMonth()];
booking_month.innerHTML = monthDate;