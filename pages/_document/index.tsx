import classnames from 'classnames';
import Document, {
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import React from 'react';
import style from './document.module.scss';

/**
 * Additional props depending on our App
 *
 * Must be returned by getInitialProps and will be available in render function
 */

type DocumentRenderProps =  DocumentProps



class AppDocument extends Document<DocumentRenderProps> {


    render(): JSX.Element {
        return (
            <Html lang="de">
                <Head/>
                <body
                    className={classnames(
                        style.body,
                    )}
                >
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
