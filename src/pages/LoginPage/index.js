
import React, { Component } from 'react';
import styles from './login.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link, Route, withRouter } from 'react-router-dom';


class Login extends Component {
    render() {
        // console.log('username: '+this.props.username);
        return (
            <div className={styles.wrap}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder={this.props.username} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Age" />
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
                    <Link to="/chat">
                        <Button variant="primary" type="submit">
                            Sign up to login
                        </Button>
                    </Link>
                </Form>
            </div>
        );
    }

}

export default Login;
