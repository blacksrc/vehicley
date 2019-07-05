import React, { Component } from 'react';
import { AdjustOutlined, PersonOutline, FilterListOutlined } from '@material-ui/icons/';
import Select from 'react-select';
import Section from '../../components/Section';
import { Statuses } from '../../config';
import './assets/Filter.scss';

const customersList = [
  { value: 'siamak', label: 'siamak' },
  { value: 'ati', label: 'ati' },
  { value: 'babak', label: 'babak' }
];

class Filter extends Component {
  constructor(props) {
    super(props);
    const { filters } = this.props;
    this.state = {
      customers: filters.customers,
      status: filters.status
    };
  }

  onChangeFilters() {
    const { setFilters } = this.props;
    const { status, customers } = this.state;
    setFilters({
      status,
      customers
    });
  }

  handleStatusChange = status => {
    this.setState({ status }, () => {
      this.onChangeFilters();
    });
  };

  handleCustomerChange = customers => {
    this.setState({ customers }, () => {
      this.onChangeFilters();
    });
  };

  render() {
    const { filters } = this.props;

    return (
      <Section title="Filter" icon={<FilterListOutlined />}>
        <div className="filter-component">
          <div className="filter-item">
            <div className="label">
              <PersonOutline className="icon" />
              Customer
            </div>

            <Select
              value={filters.customers}
              onChange={this.handleCustomerChange}
              options={customersList}
              isMulti
              placeholder="Select Customer(s)..."
            />
          </div>

          <div className="filter-item">
            <div className="label">
              <AdjustOutlined className="icon" />
              Status
            </div>

            <Select value={filters.status} onChange={this.handleStatusChange} options={Statuses} />
          </div>
        </div>
      </Section>
    );
  }
}

export default Filter;
