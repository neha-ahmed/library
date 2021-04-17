import React, { useState } from 'react';
import axios from 'axios';
function LoginForm(props) {
    const [loading, setLoading] = useState(false);
    const email = useFormInput("");
    const password = useFormInput("");
    const handleLogin = () => {
        
        setLoading(true);
        axios
            .post("http://localhost:4000/librarian/login", {

                email: email.value,
                password: password.value,

            })
            .then((response) => {
                setLoading(false);
                console.log("response", response.data)
                props.history.push(
                    "/admin"
                );

            }

            )
            .catch((error) => {
                setLoading(false);

                console.log("Something went wrong. Please try again later.");
            });
    };

    return (
        <form  >
            <div className="form-inner">
                <h2>Login</h2>

                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="text"
                        {...email}
                       
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input
                        id="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        {...password}
                        autoComplete="new-password"
                    />
                </div>
                <button
                    
                    type="submit"
                    value={loading ? "Loading..." : "Login"}
                    onClick={handleLogin}
                    disabled={loading}
                >
                    Login
                </button>
            </div>

        </form>
    )
}
const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return {
        value,
        onChange: handleChange,
    };
};

export default LoginForm