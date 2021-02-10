import React from "react";

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Form  from "./index";
// #endregion Local Imports

export default {
    component: Form,
    title: "Form",
    decorators:[withKnobs]
};
export const Default = () => (
    <div id="__next">
        <Form noMargin={true} />
    </div>
);
