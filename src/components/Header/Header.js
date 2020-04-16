import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore.js';

class Header extends React.Component {
  render () {
    return(
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/' >
              <Icon name={settings.defaultHeaderLogo} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.home.navLinkText}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.info.navLinkText}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{settings.faq.navLinkText}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;