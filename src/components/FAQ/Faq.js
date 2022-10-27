import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 mx-10 mb-10 mt-10 shadow-lg rounded-xl">
                <div className="container px-8 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-white text-center">Frequently asked questions</h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                            <i className="ri-questionnaire-fill"></i>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">What do CourseLab courses include?</h1>

                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                Each Courselab course is created, owned and managed by the instructor(s). The foundation of each Udemy course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                            <i className="ri-questionnaire-fill"></i>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Do I have to start my course at a certain time? And how long do I have to complete it?</h1>

                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                There are no deadlines to begin or complete a course. Learn more about our Lifetime Access policy.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                            <i className="ri-questionnaire-fill"></i>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">What if I don’t like a course I purchased?</h1>

                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                We want you to be satisfied, so all eligible courses purchased on Udemy can be refunded within 30 days. If you are unhappy with a course, you can request a refund.
                                </p>
                            </div>
                        </div>

                        
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default Faq;