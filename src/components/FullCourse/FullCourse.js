import React from 'react';
const FullCourse = (props) => {
    const {name,image,description,price}=props.course;
 
 
    return (
        <div className=" border-3  mt-9 flex-col justify-end items-end bg-yellow-300 p-5">
            <div className="image">
                <img className="" src={image} alt="" />
            </div>
            <div className="">
            <h1 className="text-2xl font-bold mt-3 ">{name}</h1>
            <p className="text-1xl mt-6 ">{description.slice(0,400)}</p>
            <p className="text-3xl text-center text-black mt-5 p-4 bg-white font-semibold">Price: $ <span className="text-yellow-600"> {price}</span> </p>
            
           </div>

        </div>
    );
};

export default FullCourse;