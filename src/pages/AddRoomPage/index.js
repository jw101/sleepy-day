
import React, { Component } from 'react';
import styles from './addRoom.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class AddRoom extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Room Name</Form.Label>
                        <Form.Control type="text" placeholder="Age"
                            onChange={e => this.setAge(e.target.value)} />
                        <Form.Text className="text-muted">
                    
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Max Age</Form.Label>
                        <Form.Control type="text" placeholder="Age"
                            onChange={e => this.setAge(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your age with anyone else.
                    </Form.Text>
                    </Form.Group>
                    

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Min Age</Form.Label>
                        <Form.Control type="text" placeholder="Age"
                            onChange={e => this.setAge(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your age with anyone else.
                    </Form.Text>
                    </Form.Group>
                   

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Location</Form.Label>
                        <Form.Control as="select" onChange={e => this.setState({ location: e.target.value })}>
                            <option>Africa</option>
                            <option>Asia</option>
                            <option>North America</option>
                            <option>South America</option>
                            <option>Europe</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>School</Form.Label>
                        <Form.Control as="select" onChange={e => this.setState({ school: e.target.value })}>
                            <option>Rice University</option>
                            <option>USC</option>
                            <option>MIT</option>
                            <option>Wuhan</option>
                            <option>Nanjing</option>
                        </Form.Control>
                    </Form.Group>
                    <Link to="/chat">
                        <Button variant="primary" type="submit" onClick={() => {
                            this.signUp();
                        }}>
                            Sign up to login
                    </Button>
                    </Link>
                </Form>
            </div>
        );
    }

}

export default AddRoom;
