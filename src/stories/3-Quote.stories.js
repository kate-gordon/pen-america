import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import Quote from "../components/Quote";



storiesOf("Quote", module)
    .addDecorator(withKnobs)
    .add("Adjust Quote", () => {
        const style = {
            fontSize: '18px',
            color: '#D6001B',
        };

        const quote = '”People talk about truth and fiction as opposites, but they’re not. Fiction, including the extraordinary stories we celebrate tonight, is a path to the truth.”'

        return (
            <Quote
                style={object("Style", style)}
                text={text("Quote Text", quote)}
            />
        );
    });