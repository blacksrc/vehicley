import React, { Component } from 'react';
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
import Utils from '../../utils';
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

  async loadVehicles() {
    this.setState({
      isLoading: true
    });

    const params = { status: 1 };

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
      <Section title="Vehicles List" icon={<DirectionsCarOutlined />}>
        <div className="vehicles-list-component">
          {!isLoading ? (
            <Table className="table">
              <TableHead className="head">
                <TableRow>
                  <TableCell className="title">Model</TableCell>
                  <TableCell className="title">Reg. No.</TableCell>
                  <TableCell className="title">Status</TableCell>
                  <TableCell className="title">Owner</TableCell>
                  <TableCell className="title">Owner Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles.length >= 1 ? (
                  vehicles.map(vehicle => (
                    <TableRow key={vehicle.id}>
                      <TableCell>{vehicle.model}</TableCell>
                      <TableCell>{vehicle.registration_number}</TableCell>
                      <TableCell>
                        <Status status={Utils.getVehiclesStatus(vehicle.status)} />
                      </TableCell>
                      <TableCell>{vehicle.ownerName}</TableCell>
                      <TableCell>{vehicle.ownerAddress}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow key={0}>
                    <TableCell colSpan={5}>No record found!</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          ) : (
            <Loading text="Loading vehicles list" />
          )}
        </div>
      </Section>
    );
  }
}

export default VehicleList;
