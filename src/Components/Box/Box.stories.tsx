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
        <h3 className="mb-1">{text('Heading', 'Hello Storybook')}</h3>
        <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
        <button className="btn btn-primary my-3" type="button">New pull request</button>
    </Box>
);


export const Narrowed = () => (
    <Box narrow={true} boxed={false}>
        <h3 className="mb-1">{text('Heading', 'Hello Storybook')}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio labore necessitatibus officia provident quas qui ratione ut, veritatis vero. Exercitationem, itaque, tempore? Aperiam asperiores aut consequuntur cum eius eveniet incidunt ipsam molestias nam non quae reprehenderit sed sequi, suscipit tempore velit vitae! Architecto assumenda atque beatae cum dignissimos doloribus earum error est iste mollitia perferendis, quas sint sit. Aliquid doloremque minus omnis quaerat rem voluptatem! Consequuntur corporis deserunt eaque earum, excepturi explicabo facilis laboriosam nisi nulla obcaecati officiis perferendis quae quidem reiciendis reprehenderit tempora totam vero voluptatum? Atque dolorum, illo ipsum iusto laborum libero maxime nihil non quam quo reiciendis tenetur voluptatibus. Commodi corporis delectus distinctio doloribus ducimus facilis illum impedit ipsam magni maiores maxime molestias nesciunt non optio pariatur porro possimus praesentium quaerat quia, quod quos rerum veniam, voluptate? Commodi dolor fuga ipsum iusto necessitatibus omnis voluptas. Architecto cumque deleniti incidunt non nostrum nulla, perspiciatis quidem totam vero.</p>
        <button className="btn btn-danger my-3" type="button">Test pull request</button>
    </Box>
)


export const Boxed = () => (
    <Box narrow={false} boxed={true}>
        <h3 className="mb-1">{text('Heading', 'Hello Storybook')}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio labore necessitatibus officia provident quas qui ratione ut, veritatis vero. Exercitationem, itaque, tempore? Aperiam asperiores aut consequuntur cum eius eveniet incidunt ipsam molestias nam non quae reprehenderit sed sequi, suscipit tempore velit vitae! Architecto assumenda atque beatae cum dignissimos doloribus earum error est iste mollitia perferendis, quas sint sit. Aliquid doloremque minus omnis quaerat rem voluptatem! Consequuntur corporis deserunt eaque earum, excepturi explicabo facilis laboriosam nisi nulla obcaecati officiis perferendis quae quidem reiciendis reprehenderit tempora totam vero voluptatum? Atque dolorum, illo ipsum iusto laborum libero maxime nihil non quam quo reiciendis tenetur voluptatibus. Commodi corporis delectus distinctio doloribus ducimus facilis illum impedit ipsam magni maiores maxime molestias nesciunt non optio pariatur porro possimus praesentium quaerat quia, quod quos rerum veniam, voluptate? Commodi dolor fuga ipsum iusto necessitatibus omnis voluptas. Architecto cumque deleniti incidunt non nostrum nulla, perspiciatis quidem totam vero.</p>
        <button className="btn btn-danger my-3" type="button">Test pull request</button>
    </Box>
)
