import { connect } from 'react-redux';
import Filter from './Filter';
import Actions from '../../redux/Actions';

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilters: filters => dispatch(Actions.filters.setFilters(filters))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
