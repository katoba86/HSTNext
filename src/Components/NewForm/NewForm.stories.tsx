import React from "react";

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import NewForm from "./index";
// #endregion Local Imports

export default {
    component: NewForm,
    title: "NewForm",
    decorators:[withKnobs]
};

export const Default = () => (
    <NewForm />
);

