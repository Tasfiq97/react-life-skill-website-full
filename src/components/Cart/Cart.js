import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import UseHooks from '../../CustomHooks/UseHooks';
import CartDetail from '../CartDetail/CartDetail';
import CartTotal from '../CartTotal/CartTotal';


const Cart = () => {

    const {id}= useParams()
// console.log(id)
const [detailsAll]=UseHooks([]);
const details=[];
const [price,setPrice]=useState(0)

const selectDetails= detailsAll.find((detail)=>detail.id==id);

details.push(selectDetails);
const handlePrice=(price)=>{
   const tax= price *0.20;
   const total= price+tax;
  setPrice(total);

}
    return (
        <div>

          {   id===undefined? <h1 className="text-center text-6xl h-screen font-semibold mt-11">Please select a course from courses Section</h1>
          :
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
              {
                  
                  details?.map((detail)=> <CartDetail 

                  detail={detail}
                  handlePrice={handlePrice}
                  
                  ></CartDetail> )
              }
              </div>
              <div className="col-span-1">
                  
                  <CartTotal price={price}>
                   
                  </CartTotal>
                 
              </div>
              </div>}
        </div>
    );
};

export default Cart;