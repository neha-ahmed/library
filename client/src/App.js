import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import homepage from "./components/homepage";
import CheckoutPage from './components/CheckoutPage';
import Checkin from './components/Checkin';


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/admin" component={homepage} />
          <Route exact path= '/checkout/:id' component={CheckoutPage}/>
          <Route exact path= '/checkin/:id' component={Checkin}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}



export default App;