import React from 'react';

const ShortCourseDetails = (props) => {
    const {name,slogan,image}=props.newCourse;
    return (
        <div className=" border-3  mt-9 flex-col justify-end items-end bg-yellow-400 p-5">
            <div className="image">
                <img className="" src={image} alt="" />
            </div>
            <div className="">
            <h1 className="text-2xl font-bold mt-3 bg-yellow-400">{name}</h1>
            <p className="text-1xl mt-6 bg-yellow-400">{slogan}</p>
            <div className="border-2 border-black bg-white mt-5 block pr-8 pl-8 p-3 rounded-md hover:bg-yellow-300 transition duration-300 ease-in-out ">
           <button className=" text-1xl font-bold text-center ">Show Details</button>
           </div>
           </div>

        </div>
    );
};

export default ShortCourseDetails;