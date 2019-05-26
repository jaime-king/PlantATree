import React, { Component } from 'react'
import './Login.css';

export default class Default extends Component {

    constructor(props) 
    {
        super(props);
        this.state = {user: '', pass:''};
    
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        this.setState({user: event.target.value});
    }

    handlePassChange(event) {
        this.setState({pass: event.target.value});
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.user + ' ' + this.state.pass);
        event.preventDefault();
    }

  render() {
    return (
        
        <div className="container">
            <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form className="form-signin" onSubmit={this.handleSubmit}>

                        <div className="form-label-group">
                            <input type="email" value={this.state.user} onChange={this.handleUserChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
                            <label for="inputEmail">Email address</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" value={this.state.pass} onChange={this.handlePassChange} id="inputPassword" className="form-control" placeholder="Password" required></input>
                            <label for="inputPassword">Password</label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                        <hr className="my-4"></hr>
                        <button className="btn btn-lg btn-register btn-block text-uppercase" type="submit"> Register An Account</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        
      
    );
  }
}