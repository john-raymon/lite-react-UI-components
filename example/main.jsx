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
        <li class="space-y-1">
          <p>Textfield component</p>
          <TextField placeholder="" value={textValue} onChange={(event) => setTextValue(event.target.value)} />
          <TextField placeholder="With Placeholder" value={textValueWithPlaceholder} onChange={(event) => setTextValueWithPlaceholder(event.target.value)} />
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
