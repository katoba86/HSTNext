import React from "react";


import Box  from "./index";
// #endregion Local Imports

export default {
    component: Box,
    title: "Box",
};

export const Default = () => (
    <Box>
        <h3 className="mb-1">You don’t seem to have any pull requests.</h3>
        <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
        <button className="btn btn-primary my-3" type="button">New pull request</button>
    </Box>
);
