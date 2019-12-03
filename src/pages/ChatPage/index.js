
import React, { Component } from 'react';
import styles from './chat.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button, Badge, ButtonToolbar } from 'react-bootstrap';
import { Link, Route, withRouter } from 'react-router-dom';

class Chat extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <section className={styles.up}>
                        <h5>
                            <Badge variant="secondary">Current Room</Badge>
                        </h5>
                    </section>
                    <section className={styles.down}>
                        <h5>
                            <Badge variant="secondary">Joined Room</Badge>
                        </h5>
                    </section>
                    <section className={styles.down}>
                        <h5>
                            <Badge variant="secondary">Available Room</Badge>
                        </h5>
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
                        111
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
                    222
                </div>
            </div>
        );
    }

}

export default Chat;
