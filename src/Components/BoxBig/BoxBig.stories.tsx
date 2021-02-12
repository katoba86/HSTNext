import React from "react";

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import BoxBig  from "./index";
// #endregion Local Imports

export default {
    component: BoxBig,
    title: "BoxBig",
    decorators:[withKnobs]
};

export const Default = () => (
    <BoxBig>
        <h3 className="mb-1">{text('Heading', 'Hello Storybook')}</h3>
        <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
        <button className="btn btn-primary my-3" type="button">New pull request</button>
    </BoxBig>
);
