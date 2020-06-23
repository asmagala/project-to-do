import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsSearched } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsSearched(state, props.id),
});

/*
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});
*/
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);