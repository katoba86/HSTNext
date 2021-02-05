import { connect } from "react-redux";

import React from "react";
import { AppState } from "@Interfaces/AppState";
import { setName } from "@Store/Reducers/User";

const mapStateToProps = ({ user }: AppState) => ({
    name: user.name,
});
const mapDispatchToProps = { setName };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const HomePage: React.FC<Props> = ({ name }) => {
    const clickMe = () => {

        setName("Silvia");
    };

    return (
        <>
            <p>huhu from page</p>
            <h1>
                My Name is:
                {name}
            </h1>
            <button type="button" onClick={clickMe}>
                Test
            </button>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
