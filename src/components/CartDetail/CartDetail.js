
import React from 'react';
import { useHistory } from 'react-router';

const CartDetail = (props) => {
   const {name,image,slogan,description,price}=props.detail || {};
   const history=useHistory()
 const handleBack=()=>{
 history.push("/courses")
 }

    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mt-11">You Have Selected This Course</h1>
              <div className=" border-3 mt-16 flex-col justify-end items-end  pr-5 pl-10">
            <div className="image">
                <img className="" src={image} alt="" />
            </div>
            <div className="">
            <h1 className="text-2xl font-bold mt-3 mb-2 ">{name}</h1>
            <p>{slogan}</p>
            <p className="text-1xl mt-6 ">{description}</p>
            <p className=" bg-gray-500 text-3xl text-center text-black mt-5 p-4  font-semibold">Price: $ <span className="text-white "> {price}</span> </p>
            <div className="text-center">
               
           <button onClick={()=>props.handlePrice(price)}  className=" text-1xl font-bold border-2 border-black bg-white mt-5 rounded hover:bg-yellow-300 text-center pl-9 pr-9 pt-4 pb-5 transition duration-300 ease-in-out ">Enroll </button>

         
           </div>
           </div>

        </div>
        <div className="text-center">
        <button onClick={handleBack}  className=" ml-16 text-3xl font-bold border-2 border-black bg-yellow-400 mt-20 rounded hover:bg-yellow-300 text-center pl-9 pr-9 pt-4 pb-5 transition duration-300 ease-in-out ">Go Back </button>
        </div>
        </div>
    );
};

export default CartDetail;