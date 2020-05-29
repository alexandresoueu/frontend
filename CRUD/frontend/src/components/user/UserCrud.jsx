import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitles: 'CRUD: Create Read Update and Delete',
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(index => index.id !== user.id)
        list.unshift(user)
    }

    render() {
        return (
            <Main {...headerProps}>
                Users
            </Main>
        )
    }
}
