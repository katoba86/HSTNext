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
        <BoxBig.Image imageSrc='images/macbook.png'/>
        <BoxBig.Title>{text('Heading', 'Hello Storybook')}</BoxBig.Title>
        <BoxBig.Content>{text('Content','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis esse ex exercitationem id illo laboriosam necessitatibus nisi quas quos similique. Accusamus ad architecto consequatur ducimus enim esse, eum exercitationem fugit itaque nam nisi numquam odio optio quam, quis repellendus tempora totam ut voluptatibus voluptatum. Commodi enim maiores qui repellat rerum.')}</BoxBig.Content>
        <button className="btn btn-primary my-3" type="button">New pull request</button>
    </BoxBig>
);
