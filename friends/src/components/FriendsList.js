import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { getAccount } from '../actions/actions'

class FriendsList extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        this.props.getAccount()
    }

    render() {
        return (
            <h1>hey</h1>
            )
        }
}


const mapStateToProps = (state) => {
	return {
        friends: state.friends
    }
}

const mapDispatchToProps = {
	getAccount: getAccount
}

export default(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(FriendsList)
)