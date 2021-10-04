
import React from 'react';


const MenuBar = () => {
    return (
        
        <div className="flex justify-between bg-yellow-400 leading-5">
            <div className="logo">
                <h1 className="font-extrabold text-6xl text-black p-2 ml-9 border-black border-b-4">LiFE-SkillS</h1>
                <p className="mb-7 ml-9">That you need to grow</p>
            </div>
            <div className="nav m-7 p-2 ml-9 mr-16 text-xl font-semibold transition duration-1000 ease-in-out group">
                <a className="p-4 mr-5 hover:bg-white transition duration-500 ease-in-out rounded-3xl  group-focus:text-white " href="/home">Home</a>
                <a className="p-4 mr-5 hover:bg-white transition duration-500 ease-in-out rounded-3xl"  href="/about">About us</a>
                <a className="p-4 mr-5 hover:bg-white transition duration-500 ease-in-out rounded-3xl"  href="/courses">Courses</a>
                <a className="p-4 mr-5 hover:bg-white transition duration-500 ease-in-out rounded-3xl"  href="/cart">Course Cart</a>
            </div>
            
        </div>

            
    );
};

export default MenuBar;