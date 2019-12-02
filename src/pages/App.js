import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link, Route, withRouter } from 'react-router-dom';
import LoginPage from './LoginPage'
import ChatPage from './ChatPage'
import RoomPage from './RoomPage'
import UserPage from './UserPage'
import AddRoomPage from './AddRoomPage'

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/"><div className={styles.boxleft}>Chat App</div></Link>
            {/* <div className={styles.boxright}>
              <Link to="/"><p className={location.pathname === "/" ? styles.selected : null}>HOME</p></Link>
              <Link to="/chat"><p className={location.pathname === "/chat" ? styles.selected : null} >CHAT</p></Link>
              <Link to="/room"><p className={location.pathname === "/room" ? styles.selected : null} >ROOM</p></Link>
            </div> */}
          </div>
        </header>
        <section className={styles.content}>
          <Route path="/" exact component={UserPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/chat" exact component={ChatPage} />
          <Route path="/room" exact component={RoomPage} />
          <Route path="/addRoom" exact component={AddRoomPage} />
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
