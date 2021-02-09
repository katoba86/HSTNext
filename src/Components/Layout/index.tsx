import { LayoutProps } from "@Components/Layout/Layout";
import Intro from "@Components/Intro";
import Form from "@Components/Form";

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="appWrapper">
            <header>
                <Intro />
                <Form />
            </header>
            <main>{children}</main>
        </div>
    );
};
export default Layout;
