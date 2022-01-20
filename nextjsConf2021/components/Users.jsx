import {useGetUsersQuery} from '../services/users'

import React from 'react'

const Users = () => {
    const {data, error, isLoading, isSuccess, isError} = useGetUsersQuery()
    return (
        <>
            {isLoading && 'Loading...'}
            {error && error.message}
            {isSuccess && data && data.map(user => <p key={user.id}>{user.name}</p>)}
        </>
    )
}

export default Users
