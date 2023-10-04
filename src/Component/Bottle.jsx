import React from "react";

const Bottle = ({ bottle , handleLoadBottle }) => {
   // console.log(bottle);
   const { name, category, img, price } = bottle;
   return (
      <div>
         <div className="">
            <div className="p-4 bg-base-100 shadow-xl">
               <p className="text-left font-bold">{category}</p>
               <figure>
                  <img src={img} alt={category} />
               </figure>
               <div className="space-y-1">
                  <h2 className="card-title mt-5">{name}</h2>
                  <p className="text-left font-bold">Price : ${price}</p>
                  <div className="card-actions justify-end">
                     <button onClick={()=>handleLoadBottle(bottle)} className="btn btn-sm btn-primary">Buy Now</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Bottle;
