import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css';

type NexPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => JSX.Element;
}
/**
 * OR
 */
// type NexPageWithLayout = NextPage & {
//   getLayout?: ( page: ReactElement ) => ReactElement;
// }


type AppPropsWithLayout = AppProps & {
  Component: NexPageWithLayout;
}

function MyApp( { Component, pageProps }: AppPropsWithLayout ) {

  const getLayout = Component.getLayout || (( page ) => page);

  // return (
  //   <>
  //     <small className="ma-align-right">MyApp from _app.js</small>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component { ...pageProps } /> )
}

export default MyApp
