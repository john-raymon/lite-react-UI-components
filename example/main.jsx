import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { TextField, TextArea, Navigation } from '../src/index';

function App() {
  const [textValue, setTextValue] = useState('');
  const [textValueWithPlaceholder, setTextValueWithPlaceholder] = useState('');
  // WIP 
  return (
    <div className="twr-p-10">
      <ul class="twr-space-y-5">
        <li className="twr-flex twr-items-center twr-flex-wrap md:twr-flex-nowrap">
          <Navigation onNavLinkClick={() => alert('clicked')} className="twr-w-1/2" />
          <Navigation className="twr-w-2/3" />
          <div className="twr-flex">
            <Navigation />
          </div>
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
