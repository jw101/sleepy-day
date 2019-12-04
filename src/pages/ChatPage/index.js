
import React, { Component } from 'react';
import styles from './chat.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button, Badge, ButtonToolbar, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import roomData from '../rooms.json';

class Chat extends Component {
    componentDidMount() {
        console.log('--msg--');
        console.log(JSON.parse(this.props.msg.data));
    }

    render() {
        console.log(roomData.availableList);
        return (
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <section className={styles.up}>
                        <h5 className={styles.title}>
                            <Badge variant="secondary">Current Room</Badge>
                        </h5>
                        <button className={styles.rooms}>
                            {roomData.userCurrentRoom && roomData.userCurrentRoom.name}
                        </button>

                    </section>
                    <section className={styles.mid}>
                        <h5 className={styles.title}>
                            <Badge variant="secondary">Joined Rooms</Badge>
                        </h5>
                        {roomData.joinedList && roomData.joinedList.map(item =>
                            <button className={styles.rooms}>
                                {item.name}
                            </button>
                        )}
                    </section>
                    <section className={styles.down}>
                        <h5 className={styles.title}>
                            <Badge variant="secondary">Available Rooms<br />(click to join)</Badge>
                        </h5>
                        {roomData.availableList && roomData.availableList.map(item =>
                            <button className={styles.rooms}>
                                {item.name}
                            </button>
                        )}
                    </section>
                </div>
                <div className={styles.dialog}>

                    <div className={styles.topBar}>
                        <h5>
                            <Badge variant="secondary"> &nbsp;&nbsp;Actions & options&nbsp; &nbsp;</Badge>
                        </h5>
                        <p>&nbsp;&nbsp;&nbsp;</p>
                        <ButtonToolbar>
                            <Link to="/addRoom"><Button variant="primary">Add Room</Button></Link>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <Button variant="secondary">Delete Room</Button>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <Button variant="warning">Add friend</Button>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <Button variant="info">Edit name</Button>
                        </ButtonToolbar>
                        <p>&nbsp;&nbsp;&nbsp;</p>
                        {/* <button> &nbsp; Add Room &nbsp;</button> */}
                    </div>
                    <section className={styles.section}>
                        <section className={styles.message}> Mary to All : Hello, what's up?</section>
                        <section className={styles.message}>Sammy to Mary : I am fine. I am fine. I am fine. I am fine. I am fine.</section>
                        <section className={styles.system_info}>System Info : Sammy has left the room.</section>
                    </section>
                    <header className={styles.footer}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Input message"
                                aria-label="Input message"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Send</Button>
                            </InputGroup.Append>
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Send to All</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </header>
                </div>
                <div className={styles.right}>

                    <section className={styles.up}>
                        <h5 className={styles.title}>
                            <Badge variant="secondary">Users in Room</Badge>
                        </h5>
                        <button className={styles.rooms}>
                            {roomData.userCurrentRoom && roomData.userCurrentRoom.name}
                        </button>

                    </section>

                </div>
            </div>
        );
    }

}

export default Chat;
