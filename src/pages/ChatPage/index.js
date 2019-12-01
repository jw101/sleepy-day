
import React, { Component } from 'react';
import styles from './chat.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button, Badge, ButtonToolbar } from 'react-bootstrap';

class Chat extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <h1>Room</h1>
                </div>

                <div className={styles.dialog}>

                    <div className={styles.topBar}>
                        <h5>
                            <Badge variant="secondary"> &nbsp;&nbsp;Actions & options&nbsp; &nbsp;</Badge>
                        </h5>
                        <p>&nbsp;&nbsp;&nbsp;</p>
                        <ButtonToolbar>
                            <Button variant="primary">Dark</Button>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <Button variant="secondary">Light</Button>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <Button variant="success">Invite friend</Button>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <Button variant="warning">Add friend</Button>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <Button variant="danger">Change Room</Button>
                            <p>&nbsp;&nbsp;&nbsp;</p>
                            <Button variant="info">Edit name</Button>
                        </ButtonToolbar>
                        <p>&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <section className={styles.section}>
                        111
                    </section>
                    <header className={styles.footer}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Button</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </header>
                </div>
                <div class={styles.right}>
                    222
                </div>
            </div>
        );
    }

}

export default Chat;
