import React from 'react';
import { useHistory } from 'react-router';

const ShortCourseDetails = (props) => {
    const {name,slogan,image,id}=props.newCourse;
    const history = useHistory();
    const handleCourse=()=>{
          history.push(`/courses`)
    }
    return (
        <div className=" border-3  mt-9 flex-col justify-end items-end bg-yellow-400 p-5">
            <div className="image">
                <img className="" src={image} alt="" />
            </div>
            <div className="">
            <h1 className="text-2xl font-bold mt-3 bg-yellow-400">{name}</h1>
            <p className="text-1xl mt-6 bg-yellow-400">{slogan}</p>
            <div className="text-center">
               
           <button onClick={handleCourse} className=" text-1xl font-bold border-2 border-black bg-white mt-5 rounded hover:bg-yellow-300 text-center pl-9 pr-9 pt-4 pb-5 transition duration-300 ease-in-out ">Show More</button>
           
         
           </div>
           </div>

        </div>
    );
};

export default ShortCourseDetails;