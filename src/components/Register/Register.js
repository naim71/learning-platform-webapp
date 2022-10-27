import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState(null);

    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoURL = form.photoURL.value;
        console.log(email,password,confirm,photoURL);

        if(password.length < 6){
            setError('*Password must be at least 6 characters long')
            return;
        }

        if(password !== confirm){
            setError('*Password did not match')
            return;
        }

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name,photoURL);
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })

    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error))
    }

    return (
        <div className='w-2/6 mx-auto my-8'>
            <div className="hero-content flex-col lg:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Create a new account</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="full name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <small className='text-red-600'>{error}</small>
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="photo URL" className="input input-bordered" required/>
                            </div>
                            <div className="text-center text-violet-600">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary bg-violet-600 hover:bg-violet-900">Sign up</button> 
                                <p className='text-red-700 mt-2'>{error}</p>
                            </div> 
                            <p className='text-center p-4'>Alredy have an account? Please <Link to='/login' className='link text-violet-400'>Login</Link> </p>
                        </div>
                       
                    </form>
                    
                </div>
        </div>
    );
};

export default Register;