import React from 'react'; 
import { storiesOf } from '@storybook/react'; 
import { withKnobs, text, object} from "@storybook/addon-knobs";

import Card from '../components/Card/Card';
import ImageContainer from '../components/ImageContainer'; 

const style = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    }

storiesOf('Card', module)
        .addDecorator(withKnobs)
        .add('with content', () => {
                
                return(<Card style={object("Style", style)} text="This is the Card Story"></Card>)
                        
                })
        .add('with image', () => {
                const imageSrc = "https://pen.org/wp-content/uploads/2019/11/49015514881_b012cca491_c.jpg"
                return (
                <Card style={object("Style", style)} text="Card Text" src={imageSrc}></Card>
                ) 
        })
