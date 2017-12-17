import * as React from 'react';
import  Clock  from "./clock"
import { storiesOf } from '@storybook/react';

storiesOf("Clock", module)
  .add('Clock with Hello World msg', () => <Clock msg="Hello World "  />);