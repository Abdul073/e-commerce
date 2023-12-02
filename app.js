const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const products = [
    {
        id:1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img:"./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title:"Air Jordan",
        price:120,
        colors:[
            {
                code: "lightgray",
                img:"./img/jordan.png",
            },
            {
                code:"green",
                img:"./img/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title:"blazer",
        price:115,
        colors:[
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code:"green",
                img:"./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title:"crater",
        price: 112,
        colors:[
            {
               code: "black",
               img:"./img/crater.png", 
            },
            {
                code: "lightgray",
                img:"./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title:"Hippie",
        price:110,
        colors:[
            {
                code:"gray",
                img:"./img/hippie.png",
            },
            {
               code: "black",
               img: "./img/hippie2.png", 
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProducttitle = document.querySelector(".productTitle");
const currentProductprice = document.querySelector(".productPrice");
const currentProductcolors = document.querySelectorAll(".color");
const currentProductsizes = document.querySelectorAll(".size");

menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current product
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chooosen product
        choosenProduct = products[index];

        //chnage texts of current product
        currentProducttitle.textContent = choosenProduct.title;
        currentProductprice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;


        currentProductcolors.forEach((color, index)=>{
            color.style.backgroundcolor = choosenProduct.colors[index].code;
        });
    });
});

currentProductcolors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductsizes.forEach((size, index)=>{
    size.addEventListener("click",()=>{
        currentProductsizes.forEach((size)=>{
            size.style.backgroundcolor ="white";
            size.style.color = "black";
        });
        size.style.backgroundcolor ="black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display ="flex";
});

close.addEventListener("click",()=>{
    payment.style.display ="none";
});