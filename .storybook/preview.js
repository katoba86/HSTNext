import { addDecorator, addParameters } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// #endregion Global Imports
import {withRedux} from "./Decorators"
import "../styles/global/main.scss";
// #endregion Local Imports


addDecorator(withKnobs);
addDecorator(withRedux());
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
