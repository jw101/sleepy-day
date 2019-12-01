import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Link, Route, withRouter } from 'react-router-dom';
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

class App extends Component {
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/"><div className={styles.boxleft}>Chat App</div></Link>
            <div className={styles.boxright}>
              <Link to="/"><p className={location.pathname === "/" ? styles.selected : null}>HOME</p></Link>
              <Link to="/chat"><p className={location.pathname === "/chat" ? styles.selected : null} >CHAT</p></Link>
              <Link to="/room"><p className={location.pathname === "/room" ? styles.selected : null} >ROOM</p></Link>
            </div>
          </div>
        </header>
        <section className={styles.content}>
          <Route path="/" exact component={HomePage} />
          <Route path="/chat" exact component={WorkPage} />
          <Route path="/room" exact component={WorkPageDetail} />
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
