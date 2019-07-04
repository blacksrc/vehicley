import React, { Component } from 'react';
import { AdjustOutlined, PersonOutline, FilterListOutlined } from '@material-ui/icons/';
import Select from 'react-select';
import Section from '../../components/Section';
import { Statuses } from '../../config';
import './assets/Filter.scss';

const customers = [
  { value: 'siamak', label: 'siamak' },
  { value: 'ati', label: 'ati' },
  { value: 'babak', label: 'babak' }
];

class Filter extends Component {
  state = {
    selectedCustomers: null,
    selectedStatus: Statuses[0]
  };

  handleCustomerChange = selectedCustomers => {
    this.setState({ selectedCustomers });
  };

  handleStatusChange = selectedStatus => {
    this.setState({ selectedStatus });
  };

  render() {
    const { selectedCustomers, selectedStatus } = this.state;

    return (
      <Section title="Filter" icon={<FilterListOutlined />}>
        <div className="filter-component">
          <div className="filter-item">
            <div className="label">
              <PersonOutline className="icon" />
              Customer
            </div>

            <Select
              value={selectedCustomers}
              onChange={this.handleCustomerChange}
              options={customers}
              isMulti
              placeholder="Select Customer(s)..."
            />
          </div>

          <div className="filter-item">
            <div className="label">
              <AdjustOutlined className="icon" />
              Status
            </div>
            <Select value={selectedStatus} onChange={this.handleStatusChange} options={Statuses} />
          </div>
        </div>
      </Section>
    );
  }
}

export default Filter;
