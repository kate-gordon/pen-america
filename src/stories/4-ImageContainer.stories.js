import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import ImageContainer from "../components/ImageContainer";



storiesOf("Image Container", module)
    .addDecorator(withKnobs)
    .add("Adjust Image Container", () => {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        };

        const imageSrc = "https://pen.org/wp-content/uploads/2019/11/49015514881_b012cca491_c.jpg"
        const imageAlt = "ava duvernay speaks at podium"

        return (
            <ImageContainer
                style={object("Style", style)}
                src={text("Image Source Hyperlink", imageSrc)}
                alt={text("Image Description", imageAlt)}
            />
        );
    });