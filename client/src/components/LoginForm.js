import React, { useState } from 'react';

function LoginForm({ Login,error}){
    const [details, setDetails] = useState({fullName:'', username:'', password:''});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>    
                    <input type='text'
                    name='Full Name'
                    id='Full Name'
                    onChange={e => setDetails({...details, fullName: e.target.value})}
                    value={details.fullName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Username</label>    
                    <input type='text'
                    name='username'
                    id='username'
                    onChange={e => setDetails({...details, username: e.target.value})}
                    value={details.username}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>    
                    <input type='text'
                    name='password'
                    id='password'
                    onChange={e => setDetails({...details, password: e.target.value})}
                    value={details.password}
                    />
                </div>
                <input type='submit' className='btn btn-danger btn-block' value='submit' />
            </div>

        </form>
    )
}

export default LoginForm