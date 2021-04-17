import React, { useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { usersApi } from '../../api/api';
import { requestUserById } from '../../redux/users-reducer';
import EditForm from './EditForm';

export default function EditDialog({ show, userId, onHide }) {

    const [userLoading, setUserLoading] = useState(false);
    const [isSubmittimg, setSubmittimg] = useState(false);

    const updateUser = (values) => {
        setSubmittimg(true);
        // check if user ID exists. 
        // add new user if id = null
        if (!values.id) {
            usersApi.addUser(values).then(() => {
                setSubmittimg(false);
                onHide();
            });
        // update existing user if id != null
        } else {
            usersApi.updateUser(values).then(() => {
                setSubmittimg(false);
                onHide();
            });
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        // load user info
        if (userId) {
            setUserLoading(true);
            dispatch(requestUserById(userId))
                .then(() => {
                    setUserLoading(false);
                })
                .catch(() => {
                    setUserLoading(false);
                })
        }
    }, [userId, dispatch]);

    const user = useSelector(state => state.users.userForEdit);

    return (
        <Modal size="lg" show={show} animation={false} onHide={onHide}>
            <Modal.Header closeButton >
                {userId ? <h4>Edit user</h4> : <h4>Create new user</h4>}
            </Modal.Header>
            <Modal.Body>
                {userLoading
                    ?
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    :
                    <EditForm user={user} updateUser={updateUser} />}
            </Modal.Body>
            <Modal.Footer >
                <Button form="UserEditForm" type="submit" variant="primary">
                    {isSubmittimg && <Spinner
                        className="mr-2"
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />}Save</Button>
                <Button variant="secondary" onClick={() => onHide()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}