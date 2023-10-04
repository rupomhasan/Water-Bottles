import { useEffect, useState } from "react";
import "../../public/Bottle.json";
import Bottle from "./Bottle";
import Cart from "./Cart";
import { getDatafromLS, setDataToLS } from "./Utilites";
const Bottles = () => {
   const [bottles, setBottles] = useState([]);

   const [cart, setCart] = useState([]);
   useEffect(() => {
      fetch("Bottle.json")
         .then((res) => res.json())
         .then((data) => setBottles(data));
   }, []);

   useEffect(() => {
      console.log(bottles.length);
      if (bottles.length > 0) {
         const myArray = [];
         const storedCart = getDatafromLS();
         console.log(storedCart);
         for (const id of storedCart) {
            console.log(id);
            const bottle = bottles.find((bottle) => bottle.id === id);
            if (bottle) {
               myArray.push(bottle);
            }
         }
         console.log(setCart);
         setCart(myArray);
      }
   }, [bottles]);

   const handleLoadBottle = (bottle) => {
      const newCart = [...cart, bottle];
      console.log(bottle);
      setCart(newCart);
      setDataToLS(bottle.id);
   };

   return (
      <div>
         <div className="text-left">
            <Cart key={cart.id} cart={cart}></Cart>
         </div>

         <h1>All the Bottle are here</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {bottles.map((bottle) => (
               <Bottle
                  key={bottle.id}
                  handleLoadBottle={handleLoadBottle}
                  bottle={bottle}
               ></Bottle>
            ))}
         </div>
      </div>
   );
};

export default Bottles;
