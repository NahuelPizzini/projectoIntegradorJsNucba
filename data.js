let productsData = [
    {
        id: 1,
        category: "Motorola",
        modelo: "Moto G52",
        precio: "59.999",
        camara: "50 MP",
        memoria: "128GB",
        sistema: "Android 12",
        bateria: "5,000 mAh",
        color: "negro",
        img: "./assets/celulares/Moto-G52.webp",
    },
    {
        id: 2,
        category: "Motorola",
        modelo: "Moto Edge 30",
        precio: "99.999",
        camara: "50 MP",
        memoria: "128GB",
        sistema: "Android 12",
        bateria: "4020 mAh",
        color: "gris",
        img: "./assets/celulares/Moto-Edge30.webp",
    },
    {
        id: 3,
        category: "Motorola",
        modelo: "Moto E 40",
        precio: "41.999",
        camara: "48 MP",
        memoria: "64GB",
        sistema: "Android 11",
        bateria: "5000 mAh",
        color: "gris acero",
        img: "./assets/celulares/Moto-G52.webp",
    },
    {
        id: 4,
        category: "Motorola",
        modelo: "Moto E 32",
        precio: "39.999",
        camara: "16 MP",
        memoria: "64GB",
        sistema: "Android 11",
        bateria: "5000 mAh",
        color: "plata",
        img: "./assets/celulares/Moto-E32.webp",
    },
    {
        id: 5,
        category: "Samsung",
        modelo: "Galaxy A33 5G",
        precio: "84.999",
        camara: "48 MP",
        memoria: "128GB",
        sistema: "Android 12",
        bateria: "5000 mAh",
        color: "celeste",
        img: "./assets/celulares/Samsung-Galaxy-A33-5G.webp",
    },
    {
        id: 6,
        category: "Samsung",
        modelo: "Galaxy S21 FE",
        precio: "184.999",
        camara: "65 MP",
        memoria: "128GB",
        sistema: "Android 12",
        bateria: "4500 mAh",
        color: "negro grafito",
        img: "./assets/celulares/Samsung-Galaxy-S21-FE.webp",
    },
    {
        id: 7,
        category: "Samsung",
        modelo: "Galaxy Z Fold4",
        precio: "399.999",
        camara: "65 MP",
        memoria: "256GB",
        sistema: "Android 12",
        bateria: "4400 mAh",
        color: "negro",
        img: "./assets/celulares/Samsung-Galaxy-Fold4.webp",
    },
    {
        id: 8,
        category: "Samsung",
        modelo: "Galaxy A13",
        precio: "49.999",
        camara: "50 MP",
        memoria: "64GB",
        sistema: "Android 11",
        bateria: "5000 mAh",
        color: "azul",
        img: "./assets/celulares/Samsung-Galaxy-A13.webp",
    },
    {
        id: 8,
        category: "Samsung",
        modelo: "Z Flip4",
        precio: "249.999",
        camara: "120 MP",
        memoria: "256GB",
        sistema: "Android 12",
        bateria: "5000 mAh",
        color: "violeta",
        img: "./assets/celulares/Samsung-ZFlip4.webp",
    },
    {
        id: 9,
        category: "Iphone",
        modelo: "11",
        precio: "269.999",
        camara: "120 MP",
        memoria: "128GB",
        sistema: "iOS 15",
        bateria: "5000 mAh",
        color: "blanco",
        img: "./assets/celulares/iphone-11.webp",
    },
    {
        id: 10,
        category: "Iphone",
        modelo: "13 Pro",
        precio: "673.999",
        camara: "120 MP",
        memoria: "128GB",
        sistema: "iOS 15",
        bateria: "5000 mAh",
        color: "oro",
        img: "./assets/celulares/iphone-13Pro.webp",
    },
    {
        id: 11,
        category: "Iphone",
        modelo: "SE",
        precio: "283.999",
        camara: "125 MP",
        memoria: "128GB",
        sistema: "iOS 13",
        bateria: "5000 mAh",
        color: "rojo",
        img: "./assets/celulares/iphone-SE.webp",
    },
    {
        id: 12,
        category: "Iphone",
        modelo: "13 Mini",
        precio: "607.999",
        camara: "120 MP",
        memoria: "128GB",
        sistema: "iOS 15",
        bateria: "3500 mAh",
        color: "negro",
        img: "./assets/celulares/iphone-13Mini.webp",
    },
    {
        id: 13,
        category: "Xiaomi",
        modelo: "Redmi Note 11",
        precio: "74.999",
        camara: "50 MP",
        memoria: "128GB",
        sistema: "Android 11",
        bateria: "4500 mAh",
        color: "negro",
        img: "./assets/celulares/Xiaomi-RedmiNote-11.webp",
    },
   
    {
        id: 14,
        category: "Xiaomi",
        modelo: "Redmi 9A Dual SIM",
        precio: "48.999",
        camara: "13 MP",
        memoria: "32GB",
        sistema: "Android 11",
        bateria: "2500 mAh",
        color: "gris",
        img: "./assets/celulares/Xiaomi-Redmi9A-DualSIM.webp",
    },
   
    {
        id: 15,
        category: "Xiaomi",
        modelo: "11T Meteorite",
        precio: "227.999",
        camara: "108 MP",
        memoria: "256GB",
        sistema: "Android 12",
        bateria: "5000 mAh",
        color: "negro",
        img: "./assets/celulares/Xiaomi-11T-Meteorite.webp",
    },
   
    {
        id: 16,
        category: "Xiaomi",
        modelo: "Poco F4 GT 5G",
        precio: "356.999",
        camara: "128 MP",
        memoria: "256GB",
        sistema: "Android 12",
        bateria: "5000 mAh",
        color: "amarillo",
        img: "./assets/celulares/Xiaomi-Poco-F4-GT-5G.webp",
    },
    {
        id: 17,
        category: "Xiaomi",
        modelo: "Redmi Note 9 Pro",
        precio: "102.999",
        camara: "64 MP",
        memoria: "128GB",
        sistema: "Android 12",
        bateria: "5000 mAh",
        color: "negro",
        img: "./assets/celulares/Xiaomi-RedmiNoteA9.web.webp",
    },
    {
        id: 18,
        category: "TCL",
        modelo: "20SE PRO",
        precio: "58.999",
        camara: "48 MP",
        memoria: "256GB",
        sistema: "Android 12",
        bateria: "5000 mAh",
        color: "negro",
        img: "./assets/celulares/TCL-20SE.webp",
    },
    {
        id: 19,
        category: "TCL",
        modelo: "30E",
        precio: "40.999",
        camara: "50 MP",
        memoria: "64GB",
        sistema: "Android 12",
        bateria: "5000 mAh",
        color: "gris",
        img: "./assets/celulares/TCL-30E.webp",
    },
    {
        id: 20,
        category: "TCL",
        modelo: "20SE",
        precio: "53.999",
        camara: "48 MP",
        memoria: "256GB",
        sistema: "Android 12",
        bateria: "5000 mAh",
        color: "negro",
        img: "./assets/celulares/TCL-20SE.webp",
    },
    {
        id: 21,
        category: "TCL",
        modelo: "L7+",
        precio: "23.999",
        camara: "8 MP",
        memoria: "32GB",
        sistema: "Android 10",
        bateria: "2500 mAh",
        color: "negro",
        img: "./assets/celulares/TCL-L7+.webp",
    },
    
];


// localStorage.setItem("cart", JSON.stringify(productsData));

// let data = JSON.parse(localStorage.getItem("data")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};


 const splitProducts = (size) => {
     let dividedProducts = [];
     for (let i = 0; i < productsData.length; i += size)
      dividedProducts.push(productsData.slice(i, i + size));
     return dividedProducts;
   };

 const productsController = {
     dividedProducts: splitProducts(6),
     nexProductsIndex: 1,
     productsLimit: splitProducts(6).length,
 }