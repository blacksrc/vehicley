import React, { Component } from 'react';
import { DirectionsCarOutlined } from '@material-ui/icons/';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Section from '../../components/Section';
import Loading from '../../components/Loading';
import Customer from '../../api/Customer';
import Utils from '../../utils';
import './assets/VehiclesList.scss';

class VehicleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      isLoading: true
    };

    this.customerObject = new Customer();
  }

  componentDidMount() {
    this.loadCustomers();
  }

  async loadCustomers() {
    this.setState({
      isLoading: true
    });

    const result = await this.customerObject.getCustomers();
    if (result.status === 'success' && result.data !== undefined) {
      this.setState({
        isLoading: false,
        customers: result.data
      });
    }
  }

  render() {
    const { isLoading, customers } = this.state;

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
                {customers.length >= 1 ? (
                  customers.map(customer =>
                    customer.vehicles.map(vehicle => (
                      <TableRow key={`${customer.id}_${vehicle.id}`}>
                        <TableCell>{vehicle.model}</TableCell>
                        <TableCell>{vehicle.registration_number}</TableCell>
                        <TableCell>{Utils.getVehiclesStatus(vehicle.status)}</TableCell>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.address}</TableCell>
                      </TableRow>
                    ))
                  )
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
