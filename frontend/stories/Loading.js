import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '../src/app/components/Loading';

storiesOf('Loading', module)
  .add('Default', () => <Loading />)
  .add('Custom Text', () => <Loading text="Loading some sweet dependencies" />);
