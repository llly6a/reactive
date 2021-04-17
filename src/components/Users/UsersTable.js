import React, { useState } from 'react';
import { Button, Card, Spinner, Table } from 'react-bootstrap';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearEditUser } from '../../redux/users-reducer';
import EditDialog from './EditDialog';
import Posts from './Posts';

export default function UsersTable() {
    const [showUser, setShowUser] = useState(false);
    const [showPosts, setShowPosts] = useState(false);
    const [userId, setUserID] = useState(null);
    const [userName, setUserName] = useState(null);

    //get users and loading condition from redux store
    const { users, listLoading } = useSelector(state => ({
        users: state.users.users,
        listLoading: state.users.listLoading
    }), shallowEqual);
    const dispatch = useDispatch();

    // clear old user fields on open edit user form
    const showEditForm = (id) => {
        if (id !== userId) {
            dispatch(clearEditUser());
            setUserID(id);
        }
        setShowUser(true);
    }

    // set user ID and name on open posts
    const showUserPosts = (id, name) => {
        if (id !== userId) {
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
        <div className="glass">
            <Card.Header>
                <div className="d-flex justify-content-between transparent">
                    <h4>Users table</h4>
                    <Button variant="primary" onClick={() => showEditForm(null)}> Create User </Button>
                </div>
            </Card.Header>
            <Card.Body >
                <div>
                    {/* head section */}

                    <div>
                        {listLoading
                            ?
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            :
                            <Table striped responsive="md" borderless hover className="bg-transparent">
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
                                        return (
                                            <tr key={u.id}>
                                                <td>{u.id}</td>
                                                <td>{u.username}</td>
                                                <td>{u.name}</td>
                                                <td>{u.email}</td>
                                                <td className="text-nowrap">
                                                    <Button variant="primary mr-2" onClick={() => showEditForm(u.id)}> Edit </Button>
                                                    <Button variant="info" onClick={() => showUserPosts(u.id, u.username)}> Posts </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        }
                        {/* Edit / Create user and Posts Modal windows  */}
                        {showUser && <EditDialog show={showUser} userId={userId} onHide={closeUserEdit} />}
                        {showPosts && <Posts show={showPosts} userId={userId} userName={userName} onHide={closeUserPosts} />}
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="transparent">
                simple react redux demo
          </Card.Footer>
        </div>
    )
}