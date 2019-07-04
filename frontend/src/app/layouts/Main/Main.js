import React from 'react';
import Grid from '@material-ui/core/Grid';
import Filter from '../../containers/Filter';
import VehicleList from '../../containers/VehicleList';
import './assets/Main.scss';

const Main = () => {
  return (
    <div className="main-layout">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Filter />
        </Grid>
        <Grid item xs={12} md={9}>
          <VehicleList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
