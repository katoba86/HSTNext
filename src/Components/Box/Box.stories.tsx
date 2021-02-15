import React from "react";

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Box  from "./index";
// #endregion Local Imports

export default {
    component: Box,
    title: "Box",
    decorators:[withKnobs]
};

export const Default = () => (
    <Box>
        <Box.Title>{text('Heading', 'Hello Storybook')}</Box.Title>
        <Box.Content><p>Pull requests help you discuss potential changes before they are merged into the base branch.</p></Box.Content>
    </Box>
);

