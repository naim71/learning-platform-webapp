import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseCard from './CourseCard';

const Course = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('https://learning-platform-server-side-olive.vercel.app/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    })


    return (
        <div className='col-span-3'>
            <div className='grid lg:grid-cols-3 gap-8'>
                {categories.map(category =><CourseCard key={category.id} category={category}></CourseCard>)}
            </div>

        </div>
    );
};

export default Course;