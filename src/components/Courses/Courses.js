import React from 'react';
import UseHooks from '../../CustomHooks/UseHooks';
import FullCourse from '../FullCourse/FullCourse';

const Courses = () => {
    const [courses]=UseHooks()
    
    return (
        <div>
            <h1 className="text-6xl text-center font-extrabold">All Our Courses</h1>
            <p className="text-center text-2xl mt-11">Choose what you want to learn </p>
            <div className="grid grid-cols-3 gap-4 p-5">
            {
                courses.map((course)=><FullCourse
                 key={course.id}
                 course={course}
                ></FullCourse>)
            }
            </div>
        </div>
    );
};

export default Courses;