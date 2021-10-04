import React, { useEffect, useState } from 'react';
import ShortCourseDetails from '../ShortCourseDetail/ShortCourseDetails';

const ShortCourse = () => {
    const [shortCourses,setShortCourses]=useState([]);
    useEffect(()=>{
        fetch("./data.json")
        .then(res=>res.json())
        .then(data=>setShortCourses(data));
    },[])
const shortNewCourse= shortCourses.slice(0,4);
console.log(shortNewCourse)
    return (
        <div className="mt-10">
            <h1 className="text-6xl font-extrabold text-center">Our Courses</h1>
            <div className="grid grid-cols-4 gap-6 p-5">
                {
                    shortNewCourse.map((newCourse)=><ShortCourseDetails
                     key={newCourse.id}
                     newCourse={newCourse}
                    ></ShortCourseDetails>)
                }
           
            </div>
        </div>
    );
};

export default ShortCourse;