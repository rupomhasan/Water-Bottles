import PropTypes from "prop-types";
const Cart = ({ cart }) => {
   console.log(cart);
   return (
      <div>
         <h4>Cart : {cart.length}</h4>
         <div className="w-[100px]  space-y-4 ">
            {cart.map((bottle) => (
               <img key={bottle.id} src={bottle.img}></img>
            ))}
         </div>
      </div>
   );
};

Cart.propTypes = {
   cart: PropTypes.array.isRequired,
};
export default Cart;
