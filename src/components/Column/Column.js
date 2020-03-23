import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
    key: this.props.columnKey,
  }
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    columnKey: PropTypes.number,
    icon: PropTypes.node,
  }

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
          },
        ],
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}/></span>{this.props.title}</h3>
        <div className={styles.columns}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} name={this.props.icon} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    );
  }
}
  
export default Column;