
import React, { Component } from 'react';
import styles from './chat.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Chat extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.dialog}>
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
                <div>
                    222
                </div>
            </div>
        );
    }

}

export default Chat;
