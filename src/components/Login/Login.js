import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/UserContext'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Login = () => {
    const [error, setError] = useState('');
    const { signIn, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGithubSignIn = () =>{
        providerLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }


    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error);
                setError(error.message);

            });
    }



    return (
        <div>
            <div className="hero min-h-screen bg-violet-50">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Sign in to your account</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <small className='text-red-600'>{error}</small>
                                <label className="label" required>
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary bg-violet-600 hover:bg-violet-900">Login</button>
                                <p>{error}</p>

                                <div className="divider text-sm text-slate-500">Or continue with</div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <button onClick={handleGoogleSignIn} className='border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:border-violet-800 hover:border-2'>
                                        <i className="ri-google-fill ri-2x text-violet-800"></i>
                                        <p className='text-violet-800'>Google</p>
                                    </button>
                                    <button onClick={handleGithubSignIn} className='border border-gray-300 rounded-lg flex flex-col justify-center items-center hover:border-violet-800 hover:border-2'>
                                        <i className="ri-github-fill ri-2x text-violet-800 "></i>
                                        <p className='text-violet-800'>Github</p>
                                    </button>
                                </div>
                            </div>
                            <p className='text-center p-4'>Don't have an account? <Link to='/register' className='link text-violet-400'>Register</Link> </p>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;