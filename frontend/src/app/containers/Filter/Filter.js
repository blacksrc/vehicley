import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { AdjustOutlined, PersonOutline, FilterListOutlined } from '@material-ui/icons/';
import Select from 'react-select';
import Section from '../../components/Section';
import Customer from '../../api/Customer';
import { Statuses } from '../../config';
import './assets/Filter.scss';

class Filter extends Component {
  constructor(props) {
    super(props);
    const { filters } = this.props;
    this.state = {
      customers: filters.customers,
      status: filters.status,
      customersList: []
    };
  }

  componentDidMount() {
    this.loadCustomers();
  }

  // Update redux store on filter change
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

  // Load customers list to filter dropdown
  async loadCustomers() {
    const customerObject = new Customer();
    const customersList = await customerObject.getCustomers();
    this.setState({
      customersList
    });
  }

  render() {
    const { customersList } = this.state;
    const { filters } = this.props;

    return (
      <Section title={i18next.t('filter')} icon={<FilterListOutlined />}>
        <div className="filter-component">
          <div className="filter-item">
            <div className="label">
              <PersonOutline className="icon" />
              {i18next.t('customer')}
            </div>

            <Select
              value={filters.customers}
              onChange={this.handleCustomerChange}
              options={customersList}
              isMulti
              placeholder={`${i18next.t('selectCustomer')}...`}
            />
          </div>

          <div className="filter-item">
            <div className="label">
              <AdjustOutlined className="icon" />
              {i18next.t('status')}
            </div>

            <Select
              value={filters.status}
              onChange={this.handleStatusChange}
              options={Statuses}
              placeholder={`${i18next.t('selectStatus')}...`}
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default withTranslation('translations')(Filter);
