import React, {Component} from 'react';
import styles from './user.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {Link, Route, withRouter} from 'react-router-dom';


class User extends Component {
    constructor(props) {
        super(props);
    }

    login() {
        console.log("this.props.websocket: " + JSON.stringify(this.props.websocket));
        let ws = this.props.websocket;
        console.log("~~~~~~~~~~" + ws);

        ws.send(JSON.stringify("{}"));
        // this.props.websocket.send("{\"type\":\"login\",\"username\":\"benjamin1\"}");
    }

    render() {
        return (
            <div className={styles.wrap}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your user name"/>
                        <Form.Text className="text-muted">
                            Enter your user name to login to your account.
                        </Form.Text>
                    </Form.Group>
                    <Link to="/login">
                        <Button variant="primary" type="submit" onclick={this.login()}>
                            Login
                        </Button>
                    </Link>
                </Form>
            </div>
        );
    }

}

export default User;