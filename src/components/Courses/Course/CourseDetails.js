import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf'


const CourseDetails = () => {
    const courses = useLoaderData();
    const ref = React.createRef();

    

    return (
        <div className='mx-10'>
           
      
            <div className='relative'>
                <p className='mt-10 text-center text-2xl text-violet-800'>Selected Course: <span className='font-bold'>{courses.title}</span></p>
                <Pdf targetRef={ref} filename="course-details.pdf">{({ toPdf }) => <div className='md:absolute right-0 top-0 btn bg-violet-800 normal-case px-4 mr-4' onClick={toPdf}>Create PDF</div>}</Pdf>
            </div>
                <div className="card lg:card-side bg-base-100 shadow-xl mt-16 mb-20 mx-4">
                    <figure><img className='w-full rounded-lg' src={courses.picture} alt="Album" /></figure>
                    <div ref={ref} className="card-body w-11/12">
                        <h2 className="card-title text-2xl px-6">{courses.title}</h2>
                        <p className='text-justify text-lg mt-2 px-6'>{courses.description}</p>
                        <div className="card-actions justify-center">
                            <Link to={`/checkout/${courses.id}`} className="bg-pink-600 px-4 py-3 rounded-lg text-white mt-8 mb-3 hover:bg-pink-800">Get premium access</Link>
                        </div>
                    </div>
                </div>

            
        </div>
    );
};

export default CourseDetails;