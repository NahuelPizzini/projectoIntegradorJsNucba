//contendor de productos doom
const products = document.getElementById("containerCardsProducts");
//contenedor del carrito
const productsCart = document.getElementById("cart-container");
// precio total del carrito
const total = document.getElementById("total");
// contenedor de categorias
const categories = document.querySelector(".categories")
//lista de categorias 
const categoriesList = document.querySelectorAll(".category");
// boton ver mas
const btnViewMore = document.querySelector(".btnViewMore");
// boton comprar
const buyBtn = document.querySelector(".btn-buy");

const cartBtn = document.querySelector(".cart-label");

const barsBtn = document.querySelector(".menu-label");

const cartMenu = document.querySelector(".cart");

const barsMenu = document.querySelector(".navbar-list");

const overlay = document.querySelector(".overlay");


const deleteBtn = document.querySelector(".btn-delete");

const successModal = document.querySelector(".add-modal")



/// funcion renderizar productos 

const renderProduct = (product) => {
   
    const {id, category, modelo, precio, camara, memoria, sistema, bateria, color, img} = product;
    
    
    return `
   <div class="phone-card">
   <div class="product-img">
     <img src="${img}" >
   </div>
   <div class="product-info">
     <div class="product-text">
        <h1>${category}</h1>
         <h2>${modelo}</h2>
        <p>Camara: ${camara}</p>
        <p>Memoria :${memoria}</p>
        <p>Sistema: ${sistema}</p>
        <p> Bateria: ${bateria} </p>
        <p>Color en stock: ${color}</p>
     </div>
     <div class="product-price-btn">
       <p><span>¡${precio}</span>$!</p>
       
       <button class="btn-add"
        data-id='${id}' 
        data-modelo='${modelo}'
        data-precio='${precio}'
        data-img='${img}'>add to cart</button>
     </div>

   </div>
 </div>
    `
}


const renderDividedProducts = (index = 0) => {
    products.innerHTML += productsController.dividedProducts[index]
      .map(renderProduct) // .map((e) => renderProduct(e))
      .join("");
     
    };
  
  const renderFilteredProducts = (category) => {
    const productsList = productsData.filter(
      (product) => product.category === category
    );
    products.innerHTML = productsList.map(renderProduct).join("");
  };
  
  const renderProducts = (index = 0, category = undefined) => {
    if (!category) {
      // !undefined === true
      renderDividedProducts(index);
      return;
    }
    renderFilteredProducts(category);
  };
  


const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryBtn) => {
      if(categoryBtn.dataset.category !== selectedCategory) {
        categoryBtn.classList.remove("active");
        return;
      }
      categoryBtn.classList.add("active");
    })
  };

const changeShowMoreBtnState = (category) => {
  if(!category) {
    btnViewMore.classList.remove("hidden");
    return;
  }
  btnViewMore.classList.add("hidden");
};

const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  changeBtnActiveState(selectedCategory);
  changeShowMoreBtnState(selectedCategory);
};

const applyFilter = (e) => {
  console.log(e.target.dataset);
  if (!e.target.classList.contains('category')) return;
  changeFilterState(e);
  if(!e.target.dataset.category) {
    products.innerHTML = '';
    renderProducts();
   } else {
    
       renderProducts(0, e.target.dataset.category)
      productsController.nexProductsIndex = 1;
     }
};

const isLastIndexOf = () => {
  productsController.nexProductsIndex === productsController.productsLimit;
}

const showMoreProducts = () => {
  renderProducts(productsController.nexProductsIndex);
  productsController.nexProductsIndex++;
  console.log(isLastIndexOf)
  if (isLastIndexOf()) {
    btnViewMore.classList.add('hidden');
  }
}

// logica de botones 
const toggleMenu = () => {
    barsMenu.classList.toggle("open-menu");
    if(cartMenu.classList.contains("open-cart")){
      cartMenu.classList.remove("open-cart");
      return;
    }
    overlay.classList.toggle("show-overlay");
  }

const toggleCart = ( ) => {
  cartMenu.classList.toggle("open-cart");
  if(barsMenu.classList.contains("open-menu")){
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
}

const closeOnClick = (e) => {
  if(!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay")
}

const closeOnScroll = () => {
  if(!barsMenu.classList.contains("open-menu") && !cartMenu.classList.contains("open-cart") ) 
  return
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
}

const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
}

// LOGICA DEL CARRITO
//renderizo el producto en el carrito
const renderCartProduct = (cartProduct) => {

    const {id, modelo, precio, img, quantity} = cartProduct;

    return `

    <div class="cart-item">
    <img src=${img} alt="celu del carrito" />
    <div class="item-info">
      <h3 class="item-title">${modelo}</h3>
      <p class="item-bid">precio:</p>
      <span class="item-price">${precio} Pesos</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
    </div>  
  `;
};
//renderizo carrito
const renderCart = () => {
    if (!cart.length) {
        productsCart.innerHTML = `<p class= "empty-msg"> No hay productos en el carrito 
        </p>`;
        return;
    }
    productsCart.innerHTML = cart.map(renderCartProduct).join("");
};
// obtener el total
const getCartTotal = () => {
  return  cart.reduce((acc,cur) => acc + Number(cur.precio) * Number(cur.quantity), 0);
}
// mostrar el total
const showTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(3)} Pesos!` ;
};

// funcion desactivar boton
const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
}


// añadir productos 

const createProductData = (id, modelo, precio, img) => {
  return {id, modelo, precio, img};
};

const isExistingCartProduct = (product) => {
 return cart.find((item) => item.id === product.id);
}

const addUnitToProduct = (product) => {
  cart = cart.map(cartProduct => {
    return cartProduct.id === product.id
    ? {...cartProduct, quantity: cartProduct.quantity + 1}
    : cartProduct
  })
} ;

const createCartProduct = (product) => {

  cart = [...cart, {...product,quantity : 1}];
}

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  showTotal(cart);
}

/// MODAL 
const showSuccessModal = (msg) => {

  successModal.classList.add("active-modal")
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
}

/// BOTONES + Y - DEL CARRITO 

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter(product => product.id !== existingProduct.id);
  checkCartState()
}

const substractProductUnit = (existingProduct) => {
  cart = cart.map(cartProduct => {
    return cartProduct.id === existingProduct.id ? {...cartProduct, quantity:cartProduct.quantity -1} : cartProduct
  })
}


const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find(item => item.id === id)

  if (existingCartProduct.quantity === 1) {
    if(window.confirm("¿desea eliminar el producto del carrito?")){
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
}

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find(item => item.id === id);
  addUnitToProduct(existingCartProduct);
}

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);

  }
  checkCartState();
}


const addProduct = (e) => {
 if(!e.target.classList.contains("btn-add")) return;

  const {id, modelo, precio, img} = e.target.dataset;
  const product = createProductData(id, modelo, precio, img);
  // si el producto existe en el carrito
  if (isExistingCartProduct(product)){
    addUnitToProduct(product);
     showSuccessModal("se agregó con exito otra unidad del producto seleccionado");
  } else { // si no existe en el carrito
    createCartProduct(product);
      showSuccessModal("se agregó con exito el producto seleccionado");
  }
  checkCartState();
};


const resetCartItems = () => {
  cart = [];
  checkCartState();
}

const completeBuy = ( ) => {
  if (!cart.length) return
  if(window.confirm("¿Desea completar su compra?")) {
    resetCartItems()
    alert("La compra se ha realizado con exito");
  }
}
const deleteCart = ( ) => {
  if (!cart.length) return
  if(window.confirm("¿seguro que quiere vaciar el carrito?")) {
    resetCartItems()
    alert("No hay productos en el carrito");
  }
}


const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter );
  btnViewMore.addEventListener("click", showMoreProducts);
  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart)
  barsMenu.addEventListener("click", closeOnClick)
  window.addEventListener("scroll", closeOnScroll)
  overlay.addEventListener("click", closeOnOverlayClick)
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  products.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

init();