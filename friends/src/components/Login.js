import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/actions'

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

    // this enters the username and password data to the action, then reducer
    handleSubmit = event => {
        event.preventDefault();

        const { username, password } = this.state;

        this.props.login(username, password)
            .then(() => {
                this.props.history.push("/")
        })
            .catch((err) => {
                console.error(err)
        })

    }


    // renders out the login form
    render() {
        const { username, password } = this.state
        
        return (
            <div className="login">
                <h1>LOGIN</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
	login: login
}

export default withRouter(
	connect(
		null,
		mapDispatchToProps,
	)(Login)
)