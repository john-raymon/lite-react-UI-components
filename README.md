# lite-react-ui


# Getting started
```
npm install lite-react-ui
```
## Import a component
```js
import { TextField } from 'lite-react-ui';

<TextField 
  placeholder="placeholder" 
  value={} 
  onChange={} 
/>
```
## Import base styles
### Import the namespaced global CSS for basic styling in your apps root container component
```js
// Webpack 4 or less
import 'lite-react-ui/dist/style.css';

// Webpack 5
import 'lite-react-ui/css';
```
### You can modify the **font type** used by providing setting your own global font styles or providing a font class to a lite-react-ui component for example
```js
/* some CSS
.my-own-font-class {
  font-family: 'Roboto';
} 
*/
<TextField className="my-own-font-class" />
```
WIP Simple React.js UI component library 

![](https://s4.gifyu.com/images/ezgif-1-41be43e0c6aa.gif)
