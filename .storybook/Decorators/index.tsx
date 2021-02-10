// #region Global Imports
import { Provider } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { initStore } from '@Redux/store';
import React from "react";
// #endregion Local Imports

export const withRedux = () => (story: any) => (
    <Provider store={initStore()}> {story()}</Provider >
);
