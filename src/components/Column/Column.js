import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static PropTypes = {
        columnTitle: PropTypes.node,
    }
    render() {
      return (
        <section className={styles.component}>
          <h3 classNames={styles.title}>{this.props.columnTitle}</h3>
        </section>
      )
    }
  };
  
  export default Column;