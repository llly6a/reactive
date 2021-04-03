import React, { useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearEditUser } from '../../redux/users-reducer';
import EditDialog from './EditDialog';
import Posts from './Posts';

export default function UsersTable () {
    const [showUser, setShowUser] = useState(false);
    const [showPosts, setShowPosts] = useState(false);
    const [userId, setUserID] = useState(null);
    const [userName, setUserName] = useState(null);
    //get users and loading condition from redux store
    const {users, listLoading } = useSelector(state => ({
        users: state.users.users,
        listLoading: state.users.listLoading
    }), shallowEqual);
    const dispatch = useDispatch();

    const showEditForm = (id) => {
        if(id !== userId){
            dispatch(clearEditUser());
            setUserID(id);          
        }
        setShowUser(true);
    }

    const showUserPosts = (id, name) => {
        if(id !== userId){
            setUserID(id);
            setUserName(name)
        }
        setShowPosts(true);
    }

    const closeUserEdit = () => {
        setShowUser(false);
    }

    const closeUserPosts = () => {
        setShowPosts(false);
    }
    
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Users Table</h2>
                <Button variant="outline-primary"  onClick={() => showEditForm(null)}> Create User </Button>
            </div>
            <div>
            {listLoading
                ?
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                :
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(u => {
                    return(
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.username}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>
                            <Button variant="outline-primary mr-2" onClick={() => showEditForm(u.id)}> Edit </Button>     
                            <Button variant="outline-info" onClick={() => showUserPosts(u.id, u.username)}> Posts </Button>
                        </td>           
                    </tr>
                    )
                })}
            </tbody>
            </Table>
            }
            {showUser && <EditDialog show={showUser} userId={userId} onHide={closeUserEdit}/>}
            {showPosts && <Posts show={showPosts} userId={userId} userName={userName} onHide={closeUserPosts}/>}
        </div>
        </div>
    )
}