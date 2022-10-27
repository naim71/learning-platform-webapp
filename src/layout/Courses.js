import React from 'react';
import { Outlet } from 'react-router-dom';
import CoursesPanel from '../components/Courses/CoursesPanel';

const Courses = () => {
    return (
        <div className='grid lg:grid-cols-4 mx-10 my-10'>
            <CoursesPanel></CoursesPanel>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;