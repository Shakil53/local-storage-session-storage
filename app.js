const addItem = () => {
    const namefield = document.getElementById('input-field');
    const name1 = namefield.value;
    if (!name1) {
        return;
    }

    // display ui
    displayProduct(name1);

    // add to local storage
    addProductToCart(name)

    namefield.value = '';

}

const displayProduct = name2 => {
    const ul = document.getElementById('addProducts');
    const li = document.createElement('li');
    li.innerText = name2;
    ul.appendChild(li);
}

const getcart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart){
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};

    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getcart();
    cart[name] = 1;
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}