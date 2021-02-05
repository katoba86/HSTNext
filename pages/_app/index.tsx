import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@Store/Store'


const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (

  
    <Component {...pageProps} />
  );

  export default storeWrapper.withRedux(CustomApp)