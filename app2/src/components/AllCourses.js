import React, { useState } from "react";
import Course from "./Course";

function AllCourses(){

    const [courses] = useState([
        {title:"Core Java",description:"this course is for beginners"},
        {title:"Advacne Java",description:"this course is for intermediate and beginners"},
        {title:"ReactJS",description:"this course is for frontend and javascript developers"}
    ]);
    
    return (
        <div>
            <h4>All Courses</h4>
            <p>List of courses are as follows</p>
            
            {
            courses.length > 0 ? courses.map((item)=>(<Course course={item}/>)):"No Courses found..."
            }
        </div>
    );
}

export default AllCourses;
