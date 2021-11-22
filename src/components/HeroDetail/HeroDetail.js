import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../Images/header.png"

const HeroDetail = () => {
    return (
        <div className="hero-detail grid grid-cols-2">
            <div className="flex justify-center flex-col items-center p-7 text-center">
            <p className="text-xl">Everything is For you only</p>
            <h1 className="text-7xl mb-4">All <span className="text-white font-bold">Life-Skills</span> </h1>
           <h4 className="font-bold text-1xl pr-8 mt-3">Information, Not That Other Crap. Encourage the tutee to initiate and identify the focus of the session and Discuss with the tutee the amount of time necessary to complete each part of their task.</h4>
        
           <div className="border-4 border-black bg-white block mt-11 pr-8 pl-8 p-3 rounded-md hover:bg-yellow-300 transition duration-300 ease-in-out ">
               <Link to="/about">
           <button className=" text-2xl font-bold ">Check out</button>
           </Link>
           </div>
            </div>
            <div className="img ml-16">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default HeroDetail;