import React, {Component} from 'react';
import styles from './login.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {Link, Route, withRouter} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
            location: "Africa",
            school: "Rice University"
        }
    }

    // componentDidMount() {
    //     console.log('--msg--');
    //     console.log(JSON.parse(this.props.msg.data));
    // }

    setAge = (ageString) => {
        let age = parseInt(ageString, 10);
        console.log('age: ' + age);
        if (isNaN(ageString)) {
            age = 0;
        }
        this.setState({age: age});
    };

    signUp = () => {
        let data = {
            type: "create_profile",
            username: this.props.username,
            profile: {
                age: this.state.age,
                location: this.state.location,
                school: this.state.school
            }
        };
        this.props.sendMessage(JSON.stringify(data));
    };

    render() {
        // console.log('state: ');
        // console.log(this.state);
        return (
            <div className={styles.wrap}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control readOnly defaultValue={this.props.username}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Age"
                                      onChange={e => this.setAge(e.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your age with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Location</Form.Label>
                        <Form.Control as="select" onChange={e => this.setState({location: e.target.value})}>
                            <option>Africa</option>
                            <option>Asia</option>
                            <option>North America</option>
                            <option>South America</option>
                            <option>Europe</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>School</Form.Label>
                        <Form.Control as="select" onChange={e => this.setState({school: e.target.value})}>
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

export default Login;
