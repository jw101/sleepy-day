import React, {Component} from 'react';
import styles from './addRoom.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class AddRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: "",
            minAge: 0,
            maxAge: 0,
            locations: [],
            schools: []
        };
    }

    toInt = (ageString) => {
        let age = parseInt(ageString, 10);
        console.log('age: ' + age);
        if (isNaN(ageString)) {
            age = 0;
        }
        return age;
    };

    render() {
        return (
            <div className={styles.wrap}>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Room Name</Form.Label>
                        <Form.Control type="text" placeholder="Room Name"
                                      onChange={e => this.setState({roomName: e.target.value})}/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Max Age</Form.Label>
                        <Form.Control type="text" placeholder="Age"
                                      onChange={e => this.setState({maxAge: this.toInt(e.target.value)})}/>
                        <Form.Text className="text-muted">
                            We'll never share your age with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Min Age</Form.Label>
                        <Form.Control type="text" placeholder="Age"
                                      onChange={e => this.setState({minAge: this.toInt(e.target.value)})}/>
                        <Form.Text className="text-muted">
                            We'll never share your age with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Location</Form.Label>
                        <Form.Control as="select" multiple={true}
                                      onChange={e => this.setState({locations: [...this.state.locations, e.target.value]})}>
                            <option>Africa</option>
                            <option>Asia</option>
                            <option>North America</option>
                            <option>South America</option>
                            <option>Europe</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>School</Form.Label>
                        <Form.Control as="select" multiple={true}
                                      onChange={e => this.setState({schools: [...this.state.schools, e.target.value]})}>
                            <option>Rice University</option>
                            <option>USC</option>
                            <option>MIT</option>
                            <option>Wuhan</option>
                            <option>Nanjing</option>
                        </Form.Control>
                    </Form.Group>
                    <Link to="/chat">
                        <Button variant="primary" type="submit" onClick={() => {
                            console.log(this.state);
                            this.props.sendMessage(JSON.stringify({
                                type: "create_chatroom",
                                username: this.props.username,
                                roomName: this.state.roomName,
                                requirement: {
                                    minAge: this.state.minAge,
                                    maxAge: this.state.maxAge,
                                    locations: this.state.locations,
                                    schools: this.state.schools
                                }
                            }));
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
