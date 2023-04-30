// shoppingStoreDb
const addDbData = (id) => {
  // someOfArray id value object under array how to possible
  let cart = {
    // 124e13b9-2d54-4b2f-a74d-a77b362d6 : value
  };
  const storeCart = localStorage.getItem("shoppingStoreData");
  if (storeCart) {
    cart = JSON.parse(storeCart);
  }
  // *****************
  const totalClickQuantity = cart[id];
  if (!totalClickQuantity) {
    cart[id] = 1;
  } else {
    const userNextClickQuantity = totalClickQuantity + 1;
    cart[id] = userNextClickQuantity;
  }
  localStorage.setItem("shoppingStoreData", JSON.stringify(cart));
};

export { addDbData };
