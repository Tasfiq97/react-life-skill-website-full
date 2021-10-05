import React from 'react';

const CartTotal = (props) => {

    return (
        <div className="border-l-4 border-yellow-300 flex flex-col justify-center items-center">
            <div>
            <h1 className="text-center text-4xl font-semibold">Your Enrolls</h1>
             <h1 className=" text-1xl font-bold mt-8 ">Tax: 20%</h1>
             <h1 className=" text-3xl font-bold mt-4 ">Total: $ <span className="text-yellow-500">{props.price}</span>  </h1>
            </div>
        </div>
    );
};

export default CartTotal;