import React from "react";
import Layout from "@Components/Layout";

import cities from '../../data/loc_cities.json';
import {GetStaticPaths, GetStaticProps, NextPageContext} from "next";
import {City, GermanState} from "../../src/type";
import {getBySlug} from "@Api";
import Box from "@Components/Box";
import Grid from "@Components/Grid";
import {GERMAN_STATES, getStateSlug} from "@Services/CityService";
import {Random} from "@Components/Random";
import SectionHeader from "@Components/SectionHeader";



interface CityPageProps {
    city:City;
}


const CityPage = ({city}:CityPageProps) => {
    return (
      <Layout>
            <section>
                 <div className="d-flex flex-column flex-md-row flex-justify-between">
                     <div className="mr-5">
                 <Box narrow={true}>
                     <Box.Title>Buslinien in {city.name} ({city.bundesland.name})</Box.Title>
                     <Box.Content>
                         <Random modifyBy={city}>
                             Lorem |name| #rand$Hallo|test|bla$ ipsum dolor sit amet, |bundesland.name| consectetur adipisicing elit. Asperiores aut, commodi dolorem doloremque dolorum ipsam, labore laborum nostrum nulla obcaecati placeat ratione recusandae reprehenderit ullam voluptas? Amet autem beatae dolores illum magni nam quasi quidem recusandae ut voluptas. Amet deleniti ex facere facilis itaque magni minima officia perspiciatis porro ratione!
                         </Random>
                     </Box.Content>
                 </Box>
                     </div>
                     <div>
                 <Box narrow={true}>
                     <Box.Title>Busfahrplan {city.name} ({city.bundesland.name})</Box.Title>
                     <Box.Content>
                         <p>
                           ddd
                         </p>
                     </Box.Content>
                 </Box>
                     </div>
                 </div>
            </section>


            <section>
                <SectionHeader />
                <Grid>
                    <Grid.Left>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorem fugiat, hic libero placeat quam veniam! Aliquam, consectetur consequatur doloremque excepturi incidunt ipsa laborum maxime molestiae nihil, quaerat qui quibusdam quod repudiandae, sed sit velit voluptatum? Architecto aspernatur consequuntur ea fuga reprehenderit rerum soluta! Adipisci alias asperiores beatae cupiditate debitis dicta dolor dolorem eaque eius, enim eos error fuga impedit in ipsa ipsam ipsum laborum laudantium minima nostrum pariatur, placeat quos sint soluta tempora vel velit veritatis! Asperiores deserunt, dolorum eveniet excepturi facere ipsa ipsum laboriosam magnam molestiae nesciunt quis quisquam rem, reprehenderit sit ullam. Amet aspernatur at dignissimos eius esse excepturi exercitationem facere hic ipsa modi, molestiae necessitatibus nisi porro quod quos similique suscipit tempore ut voluptate voluptatum? Architecto autem culpa cum dolor ducimus eos iste, itaque non reiciendis veniam? Aliquam, delectus dignissimos dolore, ea eaque eligendi, impedit inventore neque nostrum numquam officia optio placeat sit totam velit! A commodi consectetur dolorum earum eligendi enim eum laudantium minima modi molestiae molestias neque, nesciunt quisquam repudiandae sapiente veritatis voluptatum! Animi asperiores deleniti dicta dolore dolorum eos error, eveniet hic illo iusto nisi nostrum perferendis provident saepe sapiente sequi veritatis! Facere harum, impedit molestias numquam officiis porro suscipit voluptas voluptatibus. Adipisci dolorem ducimus earum error magnam modi rem, suscipit voluptas voluptate voluptatem. Alias aperiam asperiores at aut blanditiis dicta dolorem eveniet explicabo, id iure, laudantium magnam maxime molestiae perspiciatis placeat, praesentium provident quae rem repellat reprehenderit sed velit vitae. Ad at consectetur consequatur delectus eos, neque quibusdam tempore voluptatem voluptatibus. Ab amet aut autem commodi, consequatur cumque doloribus enim esse expedita, fugit illo laborum laudantium magnam nam nemo nisi non nulla numquam obcaecati odio officiis placeat praesentium quaerat quod repellendus reprehenderit similique sint. Ad adipisci aliquid animi autem beatae corporis, delectus esse facilis itaque, labore laudantium libero maiores molestias nulla numquam officia pariatur porro quaerat quia repellendus repudiandae sapiente, similique temporibus veniam voluptatem! Aspernatur deserunt dolorum ea et fugit in obcaecati porro. Cum cumque dignissimos dolorum eveniet excepturi ipsa officia omnis pariatur, porro, quasi quis recusandae rem tenetur? Accusantium alias assumenda, atque autem consectetur deserunt eius eos esse est et eum eveniet facilis fugit inventore maiores modi molestiae nulla numquam officia rem similique soluta sunt temporibus veritatis voluptatem? Adipisci aperiam, blanditiis consequuntur cupiditate eaque earum enim est eveniet, explicabo facere fugit harum hic illo iusto neque nihil obcaecati officia perferendis qui quisquam quod quos rem, reprehenderit sed soluta suscipit tempore voluptates.
                    </Grid.Left>
                    <Grid.Right>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque quas quisquam totam? Aliquid aperiam cupiditate deserunt dignissimos et illum impedit officia pariatur quod vero. Consequuntur dolores id, iusto possimus tempore totam ut? Ad aliquid at autem blanditiis deserunt distinctio earum esse est eveniet illum in ipsa libero maiores molestias nam numquam omnis optio perferendis possimus quae, quidem ratione rem repellat saepe sapiente tempore temporibus. Accusamus aspernatur assumenda atque consectetur consequuntur deleniti deserunt enim exercitationem numquam odio omnis praesentium quae, quibusdam repellendus suscipit tempore veniam? Asperiores consequuntur culpa cumque enim, et excepturi illo ipsam iste, officiis quisquam, reiciendis soluta veniam.
                    </Grid.Right>
                </Grid>
            </section>

      </Layout>
    );
}



type IPageUrl = {
    city: string;
    state: string;
};
export type ICityProps = {
    city: City;
    state:GermanState;
};

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {

    return {
        paths: cities.map((city) => {
            return {
                params: {
                    city: city.urlname,
                    state: getStateSlug(city.bundesland.bundesland_id)
                }
            }
        }),
        fallback: 'blocking',
    };
};




export const getStaticProps:GetStaticProps<ICityProps,IPageUrl> = async ({params}) => {
    console.log("test");
    const data = await getBySlug(params!.state,params!.city);
        console.log(data);
    return {
        props:{
            city:data,
            state: GERMAN_STATES[data.bundesland.bundesland_id+1]
        },

    }

};


export default CityPage;
