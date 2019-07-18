import React from 'react'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    
    // handles changing values in inputs
    handleChange = event => {
        event.preventDefault();

        this.setState( { [event.target.name]: event.target.value })
    }

    // renders out the login form
    render() {
        const { username, password } = this.state
        
        return (
            <div className="login">
                <h1>LOGIN</h1>
                <form>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;