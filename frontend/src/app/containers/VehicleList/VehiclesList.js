import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { DirectionsCarOutlined } from '@material-ui/icons/';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Section from '../../components/Section';
import Loading from '../../components/Loading';
import Status from '../../components/Status';
import Vehicle from '../../api/Vehicle';
import { getVehiclesStatus } from '../../utils';
import './assets/VehiclesList.scss';

class VehicleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      isLoading: true
    };

    this.vehicleObject = new Vehicle();
  }

  componentDidMount() {
    this.loadVehicles();
  }

  // If filter changes in redux component should reload the vehichles list
  componentDidUpdate(prevProps) {
    const { filters } = this.props;
    if (prevProps.filters !== filters) {
      this.loadVehicles();
    }
  }

  // Prepare query params in order to filter response
  prepareParams() {
    const { filters } = this.props;
    const params = {};

    if (filters !== undefined) {
      // Add status filter to param
      if (filters.status !== undefined && filters.status.value !== null) {
        params.status = filters.status.value;
      }

      // Add customer filter to params
      if (filters.customers !== undefined && filters.customers !== null) {
        params.ownerName = Array.from(filters.customers, customer => customer.value);
      }
    }

    return params;
  }

  // Load vehicles list and set it to vehicles state.
  async loadVehicles() {
    this.setState({
      isLoading: true
    });

    const params = this.prepareParams();

    const result = await this.vehicleObject.getVehicles(params);
    if (result.status === 'success' && result.data !== undefined) {
      this.setState({
        isLoading: false,
        vehicles: result.data
      });
    }
  }

  render() {
    const { isLoading, vehicles } = this.state;

    return (
      <Section title={i18next.t('vehiclesList')} icon={<DirectionsCarOutlined />}>
        <div className="vehicles-list-component">
          {!isLoading ? (
            <Table className="table">
              <TableHead className="head">
                <TableRow>
                  <TableCell className="title">{i18next.t('model')}</TableCell>
                  <TableCell className="title">{i18next.t('registrationNumber')}</TableCell>
                  <TableCell className="title">{i18next.t('status')}</TableCell>
                  <TableCell className="title">{i18next.t('owner')}</TableCell>
                  <TableCell className="title">{i18next.t('ownerAddress')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles.length >= 1 ? (
                  vehicles.map(vehicle => (
                    <TableRow key={vehicle.id}>
                      <TableCell>{vehicle.model}</TableCell>
                      <TableCell>{vehicle.registration_number}</TableCell>
                      <TableCell>
                        <Status status={getVehiclesStatus(vehicle.status)} />
                      </TableCell>
                      <TableCell>{vehicle.ownerName}</TableCell>
                      <TableCell>{vehicle.ownerAddress}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow key={0}>
                    <TableCell colSpan={5}>{i18next.t('noVehicleFound')}!</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          ) : (
            <Loading text={i18next.t('loadingVehicleList')} />
          )}
        </div>
      </Section>
    );
  }
}

export default withTranslation('translations')(VehicleList);
