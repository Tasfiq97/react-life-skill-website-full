import React from 'react';
import { useHistory } from 'react-router';


const NotFound = () => {
const  history= useHistory()
    const handleBack=()=>{
        history.push("/home")
        }
    return (
        <div className="h-screen mt-12">
        <div className="flex justify-center items-center">
            <h1 className="text-7xl"> <span className="text-red-600 font-semibold">404</span> | page not found</h1>
           
        </div>
        <div className="text-center">
        <button onClick={handleBack}  className=" ml-16 text-3xl font-bold border-2 border-black bg-yellow-400 mt-20 rounded hover:bg-yellow-300 text-center pl-9 pr-9 pt-4 pb-5 transition duration-300 ease-in-out ">Go Back </button>
        </div>
        </div>
    );
};

export default NotFound;