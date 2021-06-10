import '../styles/globals.css';
import 'lite-react-ui/dist/style.css';
import {Navigation} from 'lite-react-ui';
import Link from 'next/link';
import { useRouter } from 'next/router'
import {MDXProvider} from '@mdx-js/react'

const tailwindcssStyledComponents = {
  p: props => <p className="text-base text-gray-700 my-1" {...props} />,
  h4: props => <h1 className="text-lg text-bold mb-1 font-sync" {...props} />,
  h3: props => <h2 className="text-xl text-bold mb-1 font-sync" {...props} />,
  h2: props => <h1 className="text-2xl text-bold mb-1 font-sync" {...props} />,
  h1: props => <h1 className="text-3xl text-bold mb-1 font-sync" {...props} />,
};

function MyApp({ Component, pageProps}) {
  const router = useRouter();
  if (pageProps.statusCode === 404) {
    return (
      <div className="relative min-h-screen py-10 px-14 w-full">
        <Component {...pageProps} />
      </div>
    );
  }
  return (
    <div className="relative min-h-screen py-10 px-14 w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div>
          <p className="font-sync text-7xl uppercase text-gray-900 py-4">
            lite-react-ui
          </p>
          <p className="font-sync text-5xl w-full uppercase text-gray-800 pb-4">
            LIGHT-WEIGHT REACT 
            <br/>
            COMPONENT LIBRARY
          </p>
        </div>
        <p className="flex items-center space-x-2 lg:pl-4 lg:pb-0 pb-4">
          <a href="https://npmcharts.com/compare/lite-react-ui?minimal=true"><img src="https://img.shields.io/npm/dm/lite-react-ui.svg?sanitize=true" alt="Downloads"/></a>
          <a href="https://www.npmjs.com/package/lite-react-ui"><img src="https://img.shields.io/npm/v/lite-react-ui.svg?sanitize=true" alt="Version"/></a>
          <a href="https://www.npmjs.com/package/lite-react-ui"><img src="https://img.shields.io/npm/l/lite-react-ui.svg?sanitize=true" alt="License"/></a>
          <br/>
        </p>
      </div>

    <Navigation onNavLinkClick={() => alert('clicked')} className="twr-sticky twr-top-0 twr-z-20 twr-mb-4" navLinks={[
        {
          render: (props) => {
            return (<Link href="/"><a {...props}>Home</a></Link>);
          },
          active: router.pathname === "/"
        },
        {
          render: (props) => {
            return (<Link href="/text-field"><a {...props}>{`Text Fields`}</a></Link>);
          },
          active: router.pathname === "/text-field"
        },
      ]} />
      <MDXProvider components={tailwindcssStyledComponents}>
        <Component {...pageProps} />
      </MDXProvider>      
    </div>
  );
}

export default MyApp
