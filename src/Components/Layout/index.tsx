import { LayoutProps } from "@Components/Layout/Layout";
import style from './Layout.module.scss';
import dynamic from "next/dynamic";
const DynamicForm = dynamic(() => import('@Components/Form'),{ssr:true});
const DynamicIntro = dynamic(() => import('@Components/Intro'));

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={style.appWrapper}>
            <header className={style.header}>
                <DynamicIntro />
                <DynamicForm />
            </header>
            <main>{children}</main>
        </div>
    );
};
export default Layout;
