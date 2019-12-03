import React, {Component} from 'react';
import styles from './App.module.scss';
import {Link, Route, withRouter} from 'react-router-dom';
import LoginPage from './LoginPage'
import ChatPage from './ChatPage'
import RoomPage from './RoomPage'
import UserPage from './UserPage'
import AddRoomPage from './AddRoomPage'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Empty",
            ws: null
        };
    }

    componentDidMount() {
        this.connect();
        // console.log((this.state.ws == null) + "??????");

        // console.log("ws:" + JSON.stringify(this.state.ws));
    }

    // getWebSocket() {
    //     console.log("----------state: " + this.state);
    //     return this.state.ws;
    // }

    timeout = 250; // Initial timeout duration as a class variable

    /**
     * @function connect
     * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
     */
    connect = () => {
        let ws = new WebSocket("ws://localhost:4567/chatapp");
        let that = this; // cache the this
        let connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");

            this.setState({ws: ws});
            console.log("!!!!" + (this.state.ws == null) + "!!!!");
            that.timeout = 250; // reset timer to 250 on open of websocket connection
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };

        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };
    };

    sendMessage() {
        this.state.ws.send(JSON.stringify("{e:3}"));
    }

    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    check = () => {
        const {ws} = this.state;
        if (!ws || ws.readyState == WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };

    render() {

        this.state.ws.send("");
        const {location} = this.props;
        return (
            <div className={styles.App}>
                <header className={styles.header}>
                    <div className={styles.box}>
                        <Link to="/">
                            <div className={styles.boxleft}>Chat App</div>
                        </Link>
                        {/* <div className={styles.boxright}>
              <Link to="/"><p className={location.pathname === "/" ? styles.selected : null}>HOME</p></Link>
              <Link to="/chat"><p className={location.pathname === "/chat" ? styles.selected : null} >CHAT</p></Link>
              <Link to="/room"><p className={location.pathname === "/room" ? styles.selected : null} >ROOM</p></Link>
            </div> */}
                    </div>
                </header>
                <section className={styles.content}>
                    <Route path="/" exact component={() => <UserPage websocket={this.state.ws}/>}/>
                    <Route path="/login" exact component={() => <LoginPage websocket={this.state.ws}/>}/>
                    <Route path="/chat" exact component={() => <ChatPage websocket={this.state.ws}/>}/>
                    <Route path="/room" exact component={() => <RoomPage websocket={this.state.ws}/>}/>
                    <Route path="/addRoom" exact component={() => <AddRoomPage websocket={this.state.ws}/>}/>
                </section>
                <footer className={styles.footer}>
                    <p>© <b>Game Sleepy Day</b></p>
                    <p> _____________________________________________ </p>
                </footer>
            </div>
        );
    }
}

export default withRouter(App);
