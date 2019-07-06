import React from 'react';
import { VerifiedUserOutlined } from '@material-ui/icons/';
import { storiesOf } from '@storybook/react';
import Section from '../src/app/components/Section';

storiesOf('Section', module)
  .add('Default', () => <Section title="Human's Section" />)
  .add('With Icon', () => <Section title="Verified" icon={<VerifiedUserOutlined />} />);
