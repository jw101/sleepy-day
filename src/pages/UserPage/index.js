import React, { Component } from 'react';
import styles from './user.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link, Route, withRouter } from 'react-router-dom';


class User extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your user name" />
                        <Form.Text className="text-muted">
                            Enter your user name to login to your account.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        <Link to="/login"><p>Login</p></Link>
                    </Button>
                </Form>
            </div>
        );
    }

}

export default User;