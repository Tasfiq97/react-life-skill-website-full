import React, { useEffect, useState } from 'react';
import UseHooks from '../../CustomHooks/UseHooks';
import ShortCourseDetails from '../ShortCourseDetail/ShortCourseDetails';

const ShortCourse = () => {
    const [shortCourses]=UseHooks()
  
const shortNewCourse= shortCourses.slice(0,4);
    return (
        <div className="mt-10">
            <h1 className="text-6xl font-extrabold text-center">Our  <span className="text-yellow-400">Courses</span></h1>
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