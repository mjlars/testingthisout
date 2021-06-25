import React from 'react';
import '../App.css';

class SignUp extends React.Component {
  state = {
    newUser: {
      username: '',
      password: '',
      status: ''
    }
  }

  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    })
  }

  signUp = e => {
    e.preventDefault()
    console.log('created new account with credentials: ', this.state.newUser)
  }

  render() {
    console.log(this.state.newUser)
    return (
      <div className="homelogin">
      <div className="input">
        <h1>Sign Up</h1>
        <form onSubmit={this.signUp}>
          <label>Create Username:
            <input type="text"
              name="username"
              id="unameInput"
              placeholder="Username"
              maxLength="15"
              value={this.state.newUser.username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>Create Password:
            <input type="password"
              name="password"
              id="pwordInput"
              placeholder="Password"
              maxLength="15"
              value={this.state.newUser.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>Status:
            <select id="status"
              name="status"
              value={this.state.newUser.status}
              onChange={this.handleChange}
            >
              <option value="owner">Owner</option>
              <option value="renter">Render</option>
            </select>
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

export default SignUp