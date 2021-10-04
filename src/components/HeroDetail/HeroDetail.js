import React from 'react';
import image from "../../Images/header.png"

const HeroDetail = () => {
    return (
        <div className="hero-detail grid grid-cols-2">
            <div className="flex justify-center flex-col items-center p-7">
            <p className="text-xl">Everything is For you</p>
            <h1 className="text-7xl mb-4">All <span className="text-white font-bold">Life-Skills</span> </h1>
           <h4 className="font-bold text-2xl pr-3">1. Information, Not That Other Crap.</h4>
           <h4 className="font-bold text-2xl pt-4 pl-8">2. A Different Kind Of Company. A Different Kind Of Help.</h4>
           <h4 className="font-bold text-2xl pt-4 pl-8">3. Education Will Be For You What You Want It To Be.</h4>
           <div className="border-4 border-black bg-white block mt-11 pr-8 pl-8 p-3 rounded-md hover:bg-yellow-300 transition duration-300 ease-in-out ">
           <button className=" text-3xl font-bold ">Check out</button>
           </div>
            </div>
            <div className="img ml-16">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default HeroDetail;