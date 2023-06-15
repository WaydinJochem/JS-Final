//Side Bar Start
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
//Side Bar end

//Home Page Js Start

function promoItems() {
    //Array for promo items Start
    let array1 = [
        {
            img: 'https://i.postimg.cc/L8x746WH/6bbb8206e603b767125f7f6465476fee.jpg',
            title: '4-point Hand-Canon',
            price: 3699.99,
            desc: 'Specially made to eliminate a threat not one but four times over, guaranteed to provide x4 the protection of a normal Hand-Cannon',
            id: 'pro-img-1',
        },
        {
            img: 'https://i.postimg.cc/FR3rsj5b/ad468c3f50aa4f27e86ba2d0952e3f34te7as-Gk-V86-IWWNTa-2.jpg',
            title: 'Disassembler 1029',
            price: 2499.99,
            desc: 'Disable, disarm and prevents you from bring harmed',
            id: 'pro-img-2',
        },
        {
            img: 'https://i.postimg.cc/h4T2tWPQ/79fe6d857d70d8dea4748bbe11bb15c3.jpg',
            title: 'Stunner 9mm SMG',
            price: 2999.99,
            desc: "Won't kill but will leave an everlasting bruise",
            id: 'pro-img-3',
        },
        {
            img: 'https://i.postimg.cc/43GPpChY/9e75b0fbdd1621ef344e5b75cdd574ae.jpg',
            title: 'Spark Launcher 2250',
            price: 4999.99,
            desc: "Oof, not deadly but ain't nobody gonna mess with you",
            id: 'pro-img-4',
        },
    ]
//Array for promo items End

// Home Page Items Display Start
    let promo = document.querySelector('#added');
    array1.forEach((data) => {
        promo.innerHTML += `
        <div class="card">
            <img src="${data.img}" alt="" id="${data.id}" class="card-img">
        <div class="card-title">${data.title}</div>
        <div class="card-text">
            <p>$ ${data.price}</p></br>
            <p>${data.desc}</p>
        </div>`
    });
// Home Page Items Display End 
}
promoItems();

// Products button link Start
function shopButton(){
    let fisrtNode = document.querySelector('h1');
    let shopButton = document.createElement('button');
    shopButton.innerHTML = `
    <a href="./Products.html" id= "proPage">Shop Garlor</a>
    `;
    fisrtNode.appendChild(shopButton);
}
shopButton();
//Products button link End
//Home Page Js End