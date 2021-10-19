import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePassword, error, toggleLogin, isLogin, handleName } = useAuth()
    return (
        <div className="mx-5">
            <h2>Please {isLogin ? 'login' : 'Register'}</h2>

            <form onSubmit={handleRegistration}>
                {!isLogin &&
                    <div className='col-12'>
                        <label htmlFor="inputAddress" className='form-label'>Name</label>
                        <input type="text" onBlur={handleName} className='form-control' name="" placeholder='Your name' />
                    </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <p>new to animal? <Link to="/register">Create Account</Link></p>
            <button onClick={signInUsingGoogle} className="btn-more">Google Sign In</button>
        </div>
    );
};

export default Login;