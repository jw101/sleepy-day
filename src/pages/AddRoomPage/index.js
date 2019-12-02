
import React, { Component } from 'react';
import styles from './addRoom.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Region</Form.Label>
                        <Form.Control as="select">
                            <option>South Aferica</option>
                            <option>Acian</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>University</Form.Label>
                        <Form.Control as="select">
                            <option>Rice University</option>
                            <option>USC</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        <Link to="/chat"><p>Sign up to login</p></Link>
                    </Button>
                </Form>
            </div>
        );
    }

}

export default Login;
