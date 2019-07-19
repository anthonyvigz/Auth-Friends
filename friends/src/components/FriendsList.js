import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/actions'

class FriendsList extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: []
        }
    }

    render() {
        return (
            <h1>hey</h1>
        )
    }
}

export default FriendsList;