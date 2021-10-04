import { useEffect, useState } from "react"

const UseHooks=()=>{
    const [fullCourses,setfullCourses]=useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res=>res.json())
        .then(data=>setfullCourses(data))
    },[])
    return [fullCourses,setfullCourses];
}
export default UseHooks