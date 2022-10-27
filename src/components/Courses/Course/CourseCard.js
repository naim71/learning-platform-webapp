import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    const cardDetails = props.category;
    return (
        <div className="card card-compact w-72 bg-slate-100 shadow-violet-200 shadow-xl hover:border-4 hover:border-pink-600">
            <figure><img style={{height: 220}} src={cardDetails.picture} alt="Courses" /></figure>
            <div className="card-body">
                <h2 className="text-center text-lg font-bold text-violet-900">{cardDetails.title}</h2>
                <p className='font-bold text-4xl text-center text-pink-700 my-3'><small>$</small>{cardDetails.price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/courses/${cardDetails.id}`} className="btn border-none bg-violet-900 my-4 hover:bg-pink-600">Enroll Now</Link>
                </div>
            </div>
        </div>

    );
};

export default CourseCard;