import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

export default function UsersTable () {

    //get users and loading condition from redux store
    const {users, listLoading } = useSelector(state => ({
        users: state.users.users,
        listLoading: state.users.listLoading
    }), shallowEqual);

    return(
        <div>
            Users Table
            {listLoading && <p>loading</p>}
            {users.map(u => {
                return(
                <div key={u.id}>{u.name}</div>
                )
            })}
        </div>
    )
}