import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { TextField, TextArea } from '../src/index';

function App() {
  const [textValue, setTextValue] = useState('');
  const [textValueWithPlaceholder, setTextValueWithPlaceholder] = useState('');
  // WIP 
  return (
    <div className="twr-p-10">
      Components:
      <ul>
        <li>
          <p>Textfield component</p>
          <TextField className="twr-mt-10" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
          <TextField placeholder="placeholder" className="twr-mt-10" value={textValue} onChange={(event) => setTextValue(event.target.value)} />

        </li>
        <li>
          <p>TextArea component</p>
          <TextField type="textarea" className="twr-mt-10 twr-mb-8" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
          <TextField type="textarea" placeholder="placeholder" className="twr-mt-10 twr-mb-8" value={textValue} onChange={(event) => setTextValue(event.target.value)} />

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
