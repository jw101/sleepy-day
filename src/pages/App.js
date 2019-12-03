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
        this.timeout = 250; // Initial timeout duration as a class variable

        this.state = {
            ws: null,
            msg: '',
            username: ''
        };
    }

    // single websocket instance for the own application and constantly trying to reconnect.
    componentDidMount() {
        this.connect();
    }

    changeUserName = (newUserName) => {
        this.setState({username: newUserName});
    };

    sendMessage = (data) => {
        const {ws} = this.state; // websocket instance passed as props to the child component.
        // console.log('ws: ' + ws);
        try {
            ws.send(data); // send data to the server
        } catch (error) {
            console.log("----------error");
            console.log(error) // catch error
            // try {
            //     ws.send(data); // send data to the server
            // } catch (error) {
            //     console.log("----------error");
            //     console.log(error) // catch error
            // }
        }
        let {msg} = this.props;
        // console.log('msg: ' + msg);
        console.log('msg json: ' + msg);
    };

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

            that.timeout = 250; // reset timer to 250 on open of websocket connection
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };

        ws.onmessage = (msg) => {
            this.check();
            // console.log("get message from backend by websocket");

            this.setState({msg: msg});
        };

        // websocket onclose event listener
        ws.onclose = (e) => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; // increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); // call check function after timeout
        };

        // websocket onerror event listener
        ws.onerror = (err) => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };
    };

    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    check = () => {
        const {ws} = this.state;
        if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); // check if websocket instance is closed, if so call `connect` function.
    };

    render() {
        // const {location} = this.props;
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
                    <Route path="/" exact component={() => <UserPage ws={this.state.ws} msg={this.state.msg} changeUserName={this.changeUserName.bind(this)} sendMessage={this.sendMessage.bind(this)}/>} />
                    <Route path="/login" exact component={() => <LoginPage ws={this.state.ws} msg={this.state.msg} username={this.state.username} sendMessage={this.sendMessage.bind(this)}/>} />
                    <Route path="/chat" exact component={() => <ChatPage ws={this.state.ws} msg={this.state.msg} sendMessage={this.sendMessage.bind(this)}/>}/>
                    <Route path="/room" exact component={RoomPage}/>
                    <Route path="/addRoom" exact component={AddRoomPage}/>
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
