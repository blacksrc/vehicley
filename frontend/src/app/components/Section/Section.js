import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import './assets/Section.scss';

const Section = ({ title, icon, children }) => {
  return (
    <Paper className="section-component">
      <h2 className="title">
        {icon}
        {title}
      </h2>
      <Divider className="divider" />
      {children}
    </Paper>
  );
};

export default Section;
