import { LayoutProps } from "@Components/Layout/Layout";

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="appWrapper">
            <main>{children}</main>
        </div>
    );
};
export default Layout;
