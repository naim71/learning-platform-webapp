import React from 'react';

const Blog = () => {
    return (
        <div className='bg-violet-50'>
            <p className='text-4xl font-bold text-violet-800 text-center mt-10'>Questions & Answers</p>
        <div className='grid lg:grid-cols-2  gap-5 mx-20 mt-10 mb-10'>
            <div className="card w-full bg-violet-900 text-primary-content shadow-xl">
                <div className="card-body p-10">
                    <i className="ri-number-1 ri-2x"></i>
                    <h2 className="card-title">What is cors?</h2>
                    <p className='text-justify'>Cross-Origin Resource Sharing is known as CORS. It enables us to ease the security constraints placed on an API. Bypassing the Use-Control-Allow-Origin headers, which define which sources can access the API, this is accomplished. It offers a Connect/Express middleware with a number of options for enabling CORS.</p>
                </div>
            </div>
            <div className="card w-full bg-violet-700 text-primary-content shadow-xl">
                <div className="card-body">
                    <i className="ri-number-2 ri-2x "></i>
                    <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Firebase Authentication seeks to simplify the development of secure authentication frameworks while enhancing end users' sign-in and onboarding processes. It decreases the workload and duration of development. And it's an excellent tool for prototyping. Simple, light-weight, amiable, and well-known among businesses is Firebase. It makes the authentication system's complexity easier. That's why I am considering firebase for authentication.</p>
                </div>
            </div>
            <div className="card w-full bg-violet-700 text-primary-content shadow-xl">
                <div className="card-body">
                    <i className="ri-number-3 ri-2x"></i>
                    <h2 className="card-title">How does the private route work?</h2>
                    <p className='text-justify'>React Router's Private Routes, also known as Protected Routes, verify that a user has permission to access a page. If the user is logged in, the react private route component renders child components (children). If the user is not logged in, the location state attribute passes the return url, which directs the user to the /login page.</p>
                </div>
            </div>
            <div className="card w-full bg-violet-900 text-primary-content shadow-xl">
                <div className="card-body">
                    <i className="ri-number-4 ri-2x"></i>
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p className='text-justify'>Node enables programmers to create JavaScript code that executes within the computer's operating system rather than a browser. Javascript is used on the server-side of the application, and Node.js is used as the backend service. Javascript is utilized in this fashion for both the front end and the back end. Node. js is extremely scalable, light, quick, and data-intensive. It uses the Chrome v8 engine, which turns javascript code into machine code.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;