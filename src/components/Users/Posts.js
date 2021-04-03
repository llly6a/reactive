import React, { useEffect, useState } from 'react';
import { Button, Media, Modal, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearPosts, requestUserPosts } from '../../redux/users-reducer';

export default function Posts({ show, userId, userName, onHide }) {

    const [postsLoading, setPostsLoading] = useState(false);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(clearPosts());
        onHide();
    }

    useEffect(() => {
        if (userId) {
            setPostsLoading(true);
            dispatch(requestUserPosts(userId))
                .then(() => {
                    setPostsLoading(false);
                })
                .catch(() => {
                    setPostsLoading(false);
                })
        }
    }, [userId, dispatch]);

    const posts = useSelector(state => state.users.userPosts);

    return (
        <Modal size="lg" show={show} animation={false} onHide={handleClose}>
            <Modal.Header closeButton>
                {userName && <h4>{userName} posts</h4>}
            </Modal.Header>
            <Modal.Body>
                {postsLoading
                ?
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                :
                posts.map(post => {
                    return(
                        <Media key={post.id}>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src="https://dummyimage.com/64x64/000/fff.png&text=Post+Image"
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>ID:{post.id} "{post.title}"</h5>
                                <p>{post.body}</p>
                            </Media.Body>
                        </Media>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={() => handleClose()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}