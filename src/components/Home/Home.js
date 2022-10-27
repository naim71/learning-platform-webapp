import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-violet-50'>
            <div className="hero mt-16 bg-violet-50 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.rgu.ac.uk/images/Course_Page_Hero_Images/BSc-Hons-Computer-Science-AMGH-Prospectus-2018-_1195.jpg" className="md:w-5/12 rounded-lg shadow-2xl" alt='' />
                    <div className='text-left'>
                        <h1 className="text-5xl font-bold pr-48">Modern Interactive Learning with Fun</h1>
                        <p className="py-6 pr-48">Advance your career in Computer Science with CourseLab. We partner with top universities and companies to offer Computer Science courses and certificates.</p>
                        <Link to='/courses' className="btn btn-primary normal-case bg-violet-600 hover:bg-violet-900 border-none">Explore Courses</Link>
                    </div>
                </div>
            </div>

            <div className='bg-violet-600 rounded-lg shadow-xl mx-32 my-20'>
                <p className='text-white text-2xl font-bold text-center px-2 py-10'>What differentiates us from other?</p>
                <div className='grid lg:grid-cols-4 gap-6 mx-10'>
                    <div className='bg-white rounded-md shadow-md p-8 text-center mb-14'>
                        <i className="ri-customer-service-2-fill ri-3x text-pink-600"></i>
                        <p className='text-lg mb-3 font-bold'>Strong Support Team</p>
                        <p>We know that your projects take place in challenging environments globally, and sometimes you need the support and guidance of a partner.</p>

                    </div>
                    <div className='bg-white rounded-md shadow-md p-8 text-center mb-14'>
                        <i className="ri-community-fill ri-3x text-pink-600"></i>
                        <p className='text-lg mb-3 font-bold'>Active Community</p>
                        <p>Technology affects the way individuals communicate, learn, and think. It helps society and determines how people interact with each other on a daily basis. Technology plays an important role in society today.</p>
                    </div>
                    <div className='bg-white rounded-md shadow-md p-8 text-center mb-14'>
                        <i className="ri-shield-user-fill ri-3x text-pink-600"></i>
                        <p className='text-lg mb-3 font-bold'>Beginner Friendly</p>
                        <p>The courses are absolutely great for beginners when it comes to the quality of the content from practical perspectives. You can learn almost everything you need to compete in a competition from these courses, and they absolutely free too!!! You can find them here!!</p>
                    </div>
                    <div className='bg-white rounded-md shadow-md p-8 text-center mb-14'>
                        <i className="ri-live-fill ri-3x text-pink-600"></i>
                        <p className='text-lg mb-3 font-bold'>Live Sessions</p>
                        <p>Let's meet at another live coding session organized by the LiveChat Developer Program. This time, we'll dive into the LiveChat Design System components, explaining how to build an app aligned with the LiveChat look and feel in just a few moments.</p>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default Home;