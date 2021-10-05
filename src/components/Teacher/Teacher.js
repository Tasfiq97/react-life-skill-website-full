import React from 'react';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import TeacherDetail from '../TeacherDetail/TeacherDetail';

const Teacher = () => {
    const [teachers,setTeachers]=useState([])

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=8")
        .then(res=>res.json())
        .then(data=>setTeachers(data?.results))
    },[])
    const history=useHistory()
    const handleBack=()=>{
 history.push('/courses')
    }
    return (
        <div>
            <h1 className="text-center text-6xl font-semibold mt-11">Our Teachers</h1>
          <div className="grid grid-cols-3 gap-4 mt-14">
          
          { 
           teachers?.map((teacher)=><TeacherDetail
             teacher={teacher}

           >

           </TeacherDetail>)

           }
          </div>
          <div className="text-center">
    <button onClick={handleBack}   className=" ml-16 text-3xl font-bold border-2 border-black bg-yellow-400 mt-20 rounded hover:bg-yellow-300 text-center pl-9 pr-9 pt-4 pb-5 transition duration-300 ease-in-out ">Go Back </button>
    </div>
        </div>
    );
};

export default Teacher;