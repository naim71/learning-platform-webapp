import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesPanel = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('https://learning-platform-server-side-olive.vercel.app/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    })

    return (
        <div className=''>
            <p className='font-bold mb-10 text-lg'>Course Category: <span className='text-violet-600'>{categories.length}</span></p>
        <div>
            {
                categories.map(category => <p  key={category.id} className="mb-2 font-bold">
                    <Link to={`/courses/${category.id}`} className="link link-primary">{category.title}</Link>
                </p>)
            }
            
        </div>


        </div>
    );
};

export default CoursesPanel;