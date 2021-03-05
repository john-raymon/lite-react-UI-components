import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import '../src/assets/styles/tailwind.css';
import { TextField } from '../src/index';

function App() {
  const [textValue, setTextValue] = useState('');
  const [textValueWithPlaceholder, setTextValueWithPlaceholder] = useState('');

  return (
    <div className="p-10 bg-red-300">
      Components:
      <ul>
        <li>
          <p>Textfield component</p>
          <TextField placeholder="" className="p-4 mt-10 mb-8 bg-red-100 rounded-md" inputClassName="text-xl" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
          <TextField placeholder="" className="text-sm px-10 py-20 mb-8 bg-black text-white rounded-md" label="password" type="password" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
          <TextField placeholder="With Placeholder" className="px-4 py-10" labelClassName="text-sm" value={textValueWithPlaceholder} onChange={(event) => setTextValueWithPlaceholder(event.target.value)} />
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
