import * as components from '../dist/lite-react-ui.es';
import '../dist/style.css'; // can also be imported into stylesheet using @import 'lite-react-ui/dist/index.css';
import * as _components from '../src/index';

export default (() => {
  if (import.meta.env.VITE_NODE_ENV !== "USE_DIST") {
    return { ..._components };
  }
  return { ...components };
})()

