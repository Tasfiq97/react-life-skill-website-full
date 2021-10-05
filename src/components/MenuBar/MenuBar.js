
import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuBar = () => {
    return (
        
        <div className="flex justify-between bg-yellow-400 leading-5">
            <div className="logo">
                <NavLink to="/home" >
                <h1 className="font-extrabold text-6xl text-black p-2 ml-9 border-black border-b-4 animate-pulse">LiFE-SkillS</h1>
                <p className="mb-7 ml-9">That you need to grow</p>
                </NavLink>
            </div>
            <div className="nav m-7 p-2 ml-9 mr-16 text-xl font-semibold transition duration-1000 ease-in-out group">
                <NavLink className="p-4 mr-5 hover:bg-white transition duration-500 ease-in-out rounded-3xl  group-focus:text-white " to="/home">Home</NavLink>
                <NavLink className="p-4 mr-5 hover:bg-white transition duration-500 ease-in-out rounded-3xl"  to="/about">About Us</NavLink>
                <NavLink className="p-4 mr-5 hover:bg-white transition duration-500 ease-in-out rounded-3xl"  to="/courses">All Courses</NavLink>
                <NavLink className="p-4 mr-5 hover:bg-white transition duration-500 ease-in-out rounded-3xl"  to="/cart">Course Cart</NavLink>
            </div>
            
        </div>

            
    );
};

export default MenuBar;