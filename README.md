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
## How to customize the default styles of a component

When overriding default styles we recommend using `!important` variants of [`Tailwindcss`](https://tailwindcss.com/docs/installation) util-classes. Preferably version 3 or later (or a version earlier than version 3 that supports JIT compiling) so that just-in-time compilation can be utilized to generate `!important` variants of a tailwind class on the fly that can then be used to override the default styles of a lite-react-ui component.

For example, overriding the `<TextField>`'s inner `<input>` element's default background color by passing down the important variant of the `bg-color` Tailwindcss util-class, `!bg-white`, down to the `<TextField>'s` inner `<input>` element via the `inputClassName` prop.
```js
  <TextFied inputClassName="!bg-white" />
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
