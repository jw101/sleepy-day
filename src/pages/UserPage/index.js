import React, {Component} from 'react';
import styles from './user.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {Link, Route, withRouter} from 'react-router-dom';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    // componentDidMount(prevProps, prevState, snapshot) {
    //     this.sendMessage(JSON.stringify({
    //         type: "login",
    //         username: "benjamin1"
    //     }));
    // }

    login = () => {
        this.props.changeUserName(this.state.username);
        this.props.sendMessage(JSON.stringify({
            type: "login",
            username: this.state.username
        }));
    };

    render() {
        // console.log(this.state.username);
        // this.sendMessage(JSON.stringify({
        //     type: "login",
        //     username: "benjamin1"
        // }));

        return (
            <div className={styles.wrap}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your user name" onChange={e => this.setState({username: e.target.value})}/>
                        <Form.Text className="text-muted">
                            Enter your user name to login to your account.
                        </Form.Text>
                    </Form.Group>
                    <Link to="/login">
                        <Button variant="primary" type="submit" onClick={this.login}>
                            Login
                        </Button>
                    </Link>
                </Form>
            </div>
        );
    }

}

export default User;