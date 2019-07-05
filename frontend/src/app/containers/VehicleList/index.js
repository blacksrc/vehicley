import { connect } from 'react-redux';
import VehiclesList from './VehiclesList';

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(VehiclesList);
