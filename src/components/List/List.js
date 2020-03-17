import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    pictureSrc: PropTypes.string,
    pictureAlt: PropTypes.string,
    firstColumn: PropTypes.node,
    secondColumn: PropTypes.node,
    thirdColumn: PropTypes.node,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} pictureSrcText={this.props.pictureSrc} pictureAltText={this.props.pictureAlt}/>
        <div className={styles.description}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle={this.props.firstColumn} />
          <Column columnTitle={this.props.secondColumn} />
          <Column columnTitle={this.props.thirdColumn} />
        </div>
      </section>
    )
  }
};

export default List;
