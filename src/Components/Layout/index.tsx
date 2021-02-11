import { LayoutProps } from "@Components/Layout/Layout";
import Intro from "@Components/Intro";
import style from './Layout.module.scss';
import dynamic from "next/dynamic";
const DynamicForm = dynamic(() => import('@Components/Form'));

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={style.appWrapper}>
            <header className={style.header}>
                <Intro />
                <DynamicForm />
            </header>
            <main>{children}</main>
        </div>
    );
};
export default Layout;
