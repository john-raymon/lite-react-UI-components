import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import '../src/assets/styles/tailwind.css';
import { TextField, TextArea } from '../src/index';

function App() {
  const [textValue, setTextValue] = useState('');
  const [textValueWithPlaceholder, setTextValueWithPlaceholder] = useState('');
  // WIP 
  return (
    <div className="twr-p-10 twr-bg-red-300">
      Components:
      <ul>
        <li>
          <p>Textfield component</p>
          <TextField inputClassName="twr-bg-red-100" className="twr-mt-10 twr-mb-8 twr-bg-red-100 twr-rounded-md" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
        </li>
        <li>
          <p>TextArea component</p>
          <TextField type="textarea" inputClassName="twr-bg-red-100 twr-rounded-md" className="twr-mt-10 twr-mb-8 twr-bg-red-100 twr-rounded-md" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
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
