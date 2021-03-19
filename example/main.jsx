import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { TextField, TextArea, Navigation } from '../src/index';
const _navLinks = [
  {
    label: 'first one one one one one one one',
    onClick: () => alert('this was clicked'),
    active: true,
  },
  {
    label: 'second one',
    render: (props) => {
      return (<a {...props} href="from-render-function" >testing one</a>)
    },
  },
  {
    label: 'third one'
  },
  {
    label: 'third one'
  }
]
function App() {
  const [textValue, setTextValue] = useState('');
  const [textValueWithPlaceholder, setTextValueWithPlaceholder] = useState('');
  // WIP 
  return (
    <div className="twr-p-10">
      <ul class="twr-space-y-5">
        <li className="twr-flex twr-flex-col twr-items-end">
          <Navigation onNavLinkClick={() => alert('clicked')} navLinks={_navLinks} />
          <Navigation onNavLinkClick={() => alert('clicked')} className="twr-w-full" navLinks={_navLinks} stacked/>
        </li>
        <li class="twr-space-y-4">
          <p>{`<TextField>`} component:</p>
          <TextField value={textValue} onChange={(event) => setTextValue(event.target.value)} />
          <TextField placeholder="placeholder" value={textValue} onChange={(event) => setTextValue(event.target.value)} />

        </li>
        <li class="twr-space-y-4">
          <p>{'<TextArea>'} component:</p>
          <TextField type="textarea" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
          <TextField type="textarea" placeholder="placeholder" value={textValue} onChange={(event) => setTextValue(event.target.value)} />

        </li>
      </ul>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
