import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    columnKey: PropTypes.number,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }

  /*
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  */
 
  render() {
    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>
        
        <div className={styles.cards}>
          {cards.map( cardData => (
            <Card key={cardData.id} {...cardData} name={icon} />
          ))}
        </div>
      </section>
    );
  }
}
  
export default SearchResults;