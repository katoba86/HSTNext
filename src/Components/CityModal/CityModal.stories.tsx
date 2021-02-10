import React from "react";

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import CityModal  from "./index";
// #endregion Local Imports

export default {
    component: CityModal,
    title: "CityModal",
    decorators:[withKnobs]
};
export const Default = () => (
    <CityModal />
)
