import '../styles/globals.css';
import 'lite-react-ui/dist/style.css';
import {Navigation} from 'lite-react-ui';
import Link from 'next/link';
import { useRouter } from 'next/router'
import {MDXProvider} from '@mdx-js/react'
import Head from 'next/head'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function MyApp({ Component, pageProps}) {
  const router = useRouter();
  const goTo = (route) => {
    router.push(route);
  };
  const tailwindcssStyledComponents = {
    p: props => <p className="text-base text-gray-700 my-1" {...props} />,
    h4: props => <h1 className="text-lg font-semibold mb-1 font-sync" {...props} />,
    h3: props => <h2 className="text-xl font-semibold mb-1 font-sync" {...props} />,
    h2: props => <h1 className="text-2xl font-semibold mb-1 font-sync" {...props} />,
    h1: props => <h1 className="text-3xl font-semibold mb-1 font-sync" {...props} />,
    code: props => <SyntaxHighlighter {...props} className="w-full lg:w-1/2 rounded-md" language="javascript" style={atomDark} />,
  };
  if (pageProps.statusCode === 404) {
    return (
      <div className="relative min-h-screen py-10 px-14 w-full">
        <Component {...pageProps} />
      </div>
    );
  }
  return (
    <div className="relative min-h-screen py-10 px-10 md:px-28 w-full">
      <Head>
        <title>Lite-react-ui (BETA)</title>
      </Head>
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div>
          <p className="font-sync text-7xl uppercase text-gray-900 py-4 font-bold">
            lite-react-ui
          </p>
          <p className="font-sync text-5xl w-full uppercase text-gray-800 pb-4 font-semibold">
            LIGHT-WEIGHT REACT 
            <br/>
            COMPONENT LIBRARY
          </p>
        </div>
        <p className="flex items-center space-x-2 lg:pl-4 lg:pb-0 pb-4">
          <a href="https://github.com/john-raymon/lite-react-UI-components" rel="noopener noreferrer nofollow" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M12 0.3C9.14168 0.287289 6.37269 1.29528 4.19145 3.14253C2.01021 4.98979 0.559979 7.55497 0.101805 10.3764C-0.356369 13.1978 0.207604 16.09 1.69221 18.5326C3.17681 20.9752 5.48454 22.8076 8.2 23.7C8.8 23.8 9 23.4 9 23.1V21.1C5.7 21.8 5 19.5 5 19.5C4.4 18.1 3.6 17.7 3.6 17.7C2.6 17 3.7 17 3.7 17C4.9 17 5.6 18.2 5.6 18.2C6.6 20 8.4 19.5 9.1 19.2C9.1 18.4 9.5 17.9 9.8 17.6C7.1 17.3 4.3 16.3 4.3 11.6C4.3 10.4 4.8 9.3 5.6 8.5C5.4 8.1 5 6.9 5.6 5.3C5.6 5.3 6.6 5 9 6.5C10.9648 5.96907 13.0352 5.96907 15 6.5C17.3 5 18.3 5.3 18.3 5.3C18.9 6.9 18.5 8.1 18.3 8.5C19.2 9.3 19.6 10.4 19.6 11.7C19.6 16.3 16.8 17.3 14.1 17.6C14.6 18 15 18.6 15 19.8V23.1C15 23.4 15.1 23.8 15.8 23.7C18.5155 22.8076 20.8232 20.9752 22.3078 18.5326C23.7924 16.09 24.3564 13.1978 23.8982 10.3764C23.44 7.55497 21.9898 4.98979 19.8086 3.14253C17.6273 1.29528 14.8583 0.287289 12 0.3" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://npmcharts.com/compare/lite-react-ui?minimal=true"><img src="https://img.shields.io/npm/dm/lite-react-ui.svg?sanitize=true" alt="Downloads"/></a>
          <a href="https://www.npmjs.com/package/lite-react-ui"><img src="https://img.shields.io/npm/v/lite-react-ui.svg?sanitize=true" alt="Version"/></a>
          <a href="https://www.npmjs.com/package/lite-react-ui"><img src="https://img.shields.io/npm/l/lite-react-ui.svg?sanitize=true" alt="License"/></a>
          <br/>
        </p>
      </div>

    <Navigation buttonTypes="primary" onNavLinkClick={() => alert('clicked')} className="twr-sticky twr-top-0 twr-z-20 twr-mb-4" navLinks={[
        {
          label: "Getting Started",
          onClick: () => goTo('/'),
          active: router.pathname === "/"
        },
        {
          label: "Text-fields",
          onClick: () => goTo('/text-field'),
          active: router.pathname === "/text-field"
        },
        {
          onClick: () => goTo('/buttons'),
          label: "Buttons",
          active: router.pathname === "/buttons"
        },
      ]} />
      <MDXProvider components={tailwindcssStyledComponents}>
        <Component {...pageProps} />
      </MDXProvider>      
    </div>
  );
}

export default MyApp
