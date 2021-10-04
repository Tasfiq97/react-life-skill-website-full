import React from 'react';
import {NavLink, useHistory } from 'react-router-dom';

const FullCourse = (props) => {
    const {name,id,image,description,price}=props.course;
 const history= useHistory();
 const handlePage=()=>{
     history.push(`/form`)
 }
    return (
        <div className=" border-3  mt-9 flex-col justify-end items-end bg-yellow-300 p-5">
            <div className="image">
                <img className="" src={image} alt="" />
            </div>
            <div className="">
            <h1 className="text-2xl font-bold mt-3 ">{name}</h1>
            <p className="text-1xl mt-6 ">{description.slice(0,400)}</p>
            <p className="text-3xl text-center text-black mt-5 p-4 bg-white font-semibold">Price: $ <span className="text-yellow-600"> {price}</span> </p>
            <div className="text-center">
               
           <button onClick={handlePage} className=" text-1xl font-bold border-2 border-black bg-white mt-5 rounded hover:bg-yellow-300 text-center pl-9 pr-9 pt-4 pb-5 transition duration-300 ease-in-out ">Select this Course</button>
           
         
           </div>
           </div>

        </div>
    );
};

export default FullCourse;