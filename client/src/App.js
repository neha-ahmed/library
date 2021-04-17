import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import homepage from "./components/homepage";
function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/admin" component={homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}



export default App;