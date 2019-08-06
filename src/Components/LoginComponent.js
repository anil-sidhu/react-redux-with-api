import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    login() { 
        // no validation applied yet

        let loginObj = {};
        loginObj.email = this.state.email;
        loginObj.password = this.state.password;
// send dummy data replace it with your code 
        this.props.login(1)
        // redux props will called here
    } 
    render() {
        return (
            <div>
                <label>
                    Email*
                    <input value={this.state.name} className="form-control email" name='email' onChange={(text) => { this.setState({ email: text.target.value }) }} />
                </label>
                <label>
                    Password*
                    <input type='password' name='password' value={this.state.password} className="form-control" onChange={(text) => { this.setState({ password: text.target.value }) }} />
                </label>
                <a className="btn" onClick={() => this.login()} >Login</a>
            </div >
        );
    }
}

export default Login; 
