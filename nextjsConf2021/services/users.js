import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builders) => ({
        getUsers: builders.query({
            query: () => `users`,
        })
    })
})

export const {useGetUsersQuery} = usersApi