import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  state = {
    signedIn: false,
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault()
    console.log('clicked log in')
  }

  render() {
    console.log('user input credentials: ', this.state.credentials)
    return (
      <div className="homelogin">
        <div className="input">
          <h1> Welcome </h1>
          <h2> Sign In To Your Account</h2>

          <form onSubmit={this.login}>
            <label>Username:
              <input type="text"
                name="username"
                id="nameInput"
                placeholder="Username" 
                maxLength="15" 
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>Password:
              <input type="text"
                name="password"
                id="passwordInput"
                placeholder="Password" 
                maxLength="15"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </label>
            <br />

            <button>Sign In</button>
          </form>
          <h5>Don't have an account? Sign up today!</h5>
          <Link to='/signup'><button>Sign Up</button></Link>
        </div>
      </div>
    )
  }
}

export default SignIn