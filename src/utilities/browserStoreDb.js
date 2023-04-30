const addDbData = (id) => {
  let shoppingCart = {};
  const storeCart = localStorage.getItem("shoppingCart");
  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  }

  const quantityClick = shoppingCart[id];
  // console.log(quantityClick,'quantityClick ' );
  // console.log(shoppingCart,'shoppingCart ' );
  if (!quantityClick) {
    shoppingCart[id] = 'one';
  } else {
    const newQuantity = shoppingCart[id] + 1;
    shoppingCart[id] = newQuantity;
  }

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

export { addDbData };
