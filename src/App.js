import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Rentals from './components/Rentals';


function App() {
  return (
    <BrowserRouter>

<div className='navBar'>
       <button class='navbutton'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link>
       </button>
    
       <button class='navbutton'> 
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/signup'>Sign Up</Link>
        </button>

        <button class='navbutton'> 
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/rentals'>Rentals</Link>
        </button>
        </div>
    
        <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/rentals' component={Rentals} />
        </Switch>
       
    
    </BrowserRouter>
  );
}

export default App;
