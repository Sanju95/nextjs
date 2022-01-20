import { Provider } from 'react-redux';
import { store } from '../store'
import Users from '../components/Users'

import React from 'react'

const UsersPage = () => {
    return (
        <Provider store={store}>
           <Users />
        </Provider>
    )
}

export default UsersPage
