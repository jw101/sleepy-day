import React, {Component} from 'react';
import styles from './user.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {Link, Route, withRouter} from 'react-router-dom';


class User extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount(prevProps, prevState, snapshot) {
    //     this.sendMessage(JSON.stringify({
    //         type: "login",
    //         username: "benjamin1"
    //     }));
    // }

    sendMessage = (data) => {
        const {ws} = this.props; // websocket instance passed as props to the child component.
        console.log('ws: ' + ws);
        try {
            ws.send(data) // send data to the server
        } catch (error) {
            console.log("----------error");
            console.log(error) // catch error
        }
        let {msg} = this.props;
        console.log('msg: ' + msg);
        console.log('msg json: ' + msg.data);
    };

    render() {
        this.sendMessage(JSON.stringify({
            type: "login",
            username: "benjamin1"
        }));

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
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Link>
                </Form>
            </div>
        );
    }

}

export default User;