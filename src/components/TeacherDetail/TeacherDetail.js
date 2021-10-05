import React from 'react';

const TeacherDetail = (props) => {
    console.log(props.teacher)
    const {gender,email,phone}=props.teacher || {}

    const {title,first}=props.teacher.name;
    const {large}=props.teacher.picture;
    const {country}=props.teacher.location;
    return (
        <div>
        <div className="border-2 border-gray-400">
          <div className=" border-3 mt-16 flex-col justify-end items-end  pr-5 pl-10">
        <div className="image">
            <img className="" src={large} alt="" />
        </div>
        <div className="">
        <h1 className="text-2xl font-bold mt-3 mb-2 ">{title} {first}</h1>
        <p>{gender}</p>
        <p className="text-2xl mt-6 "> Email : {email}</p>
        <p className="text-2xl mt-6 ">phone :{phone}</p>
        <p className="text-2xl mt-6 ">Country : {country}</p>
        
       </div>

    </div>

    </div>
    </div>
    );
};

export default TeacherDetail;