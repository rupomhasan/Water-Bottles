const getDatafromLS = () => {
   const storedCartString = localStorage.getItem("cart");
   if (storedCartString) {
      return JSON.parse(storedCartString);
   } else return [];
};
const setDataToLS = (id) => {
   const cart = getDatafromLS();
   cart.push(id);
   const cartStringified = JSON.stringify(cart);
   localStorage.setItem("cart", cartStringified);
};
export { getDatafromLS, setDataToLS };

