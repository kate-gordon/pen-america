import React from 'react'; 
import { storiesOf } from '@storybook/react'; 

import Content from '../components/Content'; 

storiesOf('Content', module)
        .add('with text', () => <Content text="Pen America"></Content>)