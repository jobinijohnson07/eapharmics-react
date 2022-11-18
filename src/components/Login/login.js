import React, { Component } from 'react';
import './login.css';
import Logo from '../../Assets/logo.svg';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
    Id: '',
    Data: [],
    togg: true,
    input:{},
    errors:{}
  }
  
  handleUserName = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({ username: event.target.value });
  }

  handlePassword = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({ password: event.target.value });
  }
  validate(makeError, checkWith){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
 
    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your username.";
    }

    // if(typeof input["username"] !== "undefined"){
    //   if(input["username"].length < 6){
    //       isValid = false;
    //       errors["username"] = "Please enter valid username.";
    //   }
    // }
    if (typeof input["username"] !== "undefined" && makeError && checkWith === 'username') {
      isValid = false;
      errors["username"] = "User not found."
      
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (typeof input["password"] !== "undefined") {
      if(input["password"].length < 6){
          isValid = false;
          errors["password"] = "Please add at least 6 charachter.";
          
      }
    }
    if (typeof input["password"] !== "undefined" && makeError && checkWith === 'password') {
      isValid = false;
      errors["password"] = "Incorrect password!"
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  getdata = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3000/allUsers`)
    .then(res => {
      // const persons = res.data;
      // this.setState({ Data: persons });
      // console.log("Data is", this.state.Data)
      const user = res.data.find((user) => user.username === this.state.username);
      if(!user){
        this.validate(true, 'username');
      } else{
        if (user.username === this.state.username && user.password === this.state.password) {
          console.log("Welcome user", user);
          localStorage.setItem('username', user.username);
          localStorage.setItem('userid', user.id);
          this.props.history.push('/dashboard');
        }
        else {  
          this.validate(true, 'password')
          console.log('incorrect password', this.state.errors)
        }
      }
    })
  }

  render() {
    
   return(
    <div className="login-section">
      <div className="row">  
        <div className="col-md-6 firstsection">
          <div className="firstwhole-section">
            <div className="firstrow-section">
              <div className="revolution-content">Revolution in Stability Testing</div>
              <div className="buttonbackground">
                <div className="buttonbackground-content">Study Login</div>
                <div className="buttonbackground-content">Inventory</div>
                <div className="buttonbackground-content">Data Evaluation</div>
              </div>
              <div className="buttonbackground">
                <div className="buttonbackground-content">System management</div>
              </div>
            </div>
          </div>           
        </div>
        <div className="col-md-6 p-0"> 
          <div className="secondwhole-content">            
            <div className="secondrow-section">
              <img className="logo-imgcontent" src={Logo} alt="logo"/>
              <div className="login-content">Login</div>
              <div className="welcome-content">Welcome back. Please sign in to your account to continue</div>
              <div className="fields-content">User Name</div>
              <input type="text" onChange={this.handleUserName } name="username" value={this.state.username} className={this.state.errors.username ? 'username-inputcontent error-border' : 'username-inputcontent normal-border'} placeholder="Enter User Name"/> 
              <div className="text-danger">{this.state.errors.username}</div> 
              <div className="fields-content">Password</div>
              <div className="row">
                <div className="col">
                  <input type="password" name="password" onChange={this.handlePassword} className={this.state.errors.password ? 'password-inputcontent error-border' : 'password-inputcontent normal-border'} placeholder="Enter Password" />
                  <div className="text-danger">{this.state.errors.password}</div> 
                </div>
              </div>
              <div className="forgot-content">Forgot Password?</div>
              <div className="siginbutton-wrapper">
                <button type="submit" value="submit" onClick={(event) => this.getdata(event)} className="signinbutton-content">Sign in</button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
   );
  }
}
export default withRouter(Login);