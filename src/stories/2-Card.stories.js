import React from 'react'; 
import { storiesOf } from '@storybook/react'; 


import Card from '../components/Card';


storiesOf('Card', module)
        .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
        .add('with content', () => <Card text="Pen America"></Card>)
  
