import React, { useState } from 'react';

const CourseForm = () => {

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl font-semibold mb-11">Course Validation</h1>
            <label className="mt-4 font-bold" htmlFor="Name">Name</label>
            <input  placeholder="enter your name" className="w-1/2 mt-3 bg-gray-400 border-yellow-500 pl-5 pr-5 pt-3 pb-3" type="text" />
            <label className="mt-6 font-bold" htmlFor="Name">E-mail</label>
            <input  className="w-1/2 mt-3 bg-gray-400 border-yellow-500 pl-5 pr-5 pt-3 pb-3" type="email" placeholder="enter your mail"/>
            <button  className=" text-1xl font-bold border-2 border-black bg-white mt-5 rounded hover:bg-yellow-300 text-center pl-9 pr-9 pt-4 pb-5 transition duration-300 ease-in-out ">Submit</button>
           
        </div>
    );
};


export default CourseForm;