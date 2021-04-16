import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import LoginForm from './components/LoginForm';

function App (){
  const adminUser={
    fullName:"admin",
    username:"admin",
    password: "admin123"
  }

   const [user, setUser] = useState({fullName:"", username:""});
   const [error, setError] =useState("");

   const Login = details =>{
     console.log(details);
     if (details.username == adminUser.username && details.password == adminUser.password){
      console.log("logged in");
      setUser({
        fullName: details.fullName,
        username:details.username
      })
     }
   else {
    
     console.log("details do not match");
     setError("details do not match");
   }
  }

   const Logout = () => {
     console.log("logout");
     setUser({fullName:"", username:""})
   }
  return(
    <div className="App">
      {(user.fullName!= "") ? (
        <div className='welcome'>
          <h2> Welcome, <span>  {user.fullName}</span></h2>
          <button onClick={Logout}>Log out</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}

    </div>
  )
}



export default App;
