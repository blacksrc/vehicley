import React from 'react';
import { storiesOf } from '@storybook/react';
import Status from '../src/app/components/Status';

const Statuses = [
  { value: 1, label: 'Free', color: '#00897b' },
  { value: 2, label: 'Busy', color: '#e53935' },
  { value: 3, label: 'Broken', color: '#999999' }
];

storiesOf('Status', module)
  .add(Statuses[0].label, () => <Status status={Statuses[0]} />)
  .add(Statuses[1].label, () => <Status status={Statuses[1]} />)
  .add(Statuses[2].label, () => <Status status={Statuses[2]} />);
