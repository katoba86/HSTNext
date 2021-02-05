import Intro from "./intro/Intro";
import Form from "./form/Form";

const Layout = ({children}) => {
    return (
        <>
            <div className="appWrapper">

                <header>
                    <Intro></Intro>
                    <Form></Form>
                </header>

                <main>
                {children}
                </main>
            </div>
        </>
    );
}
export default Layout;