import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import components from './buildOrSource';

const { TextField, TextArea, Navigation, Button } = components;

const _navLinks = [
  {
    label: 'This is the Navigation component',
    onClick: () => alert('this was clicked'),
  },
  {
    label: 'second one',
    render: (props) => {
      return (<a {...props} href="from-render-function" >testing one</a>)
    },
    active: true,
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
        <li className="twr-flex twr-space-x-4">
          <p className="">{`<Button> component:`}</p>
          <Button loading="true" className="twr-w-auto">
            Test
          </Button>            
          <Button className="twr-font-bold">
            Sign up now 🏄🏽‍♂️
          </Button>            
          <Button loading="true" disabled={true}>
            Test
          </Button>            
        </li>
        <li>
          <p>{`<Navigation> component:`}</p>
          <Navigation onNavLinkClick={() => alert('clicked')} className="twr-sticky twr-top-0 twr-z-20 twr-mb-4" navLinks={_navLinks} />
          <Navigation onNavLinkClick={() => alert('clicked')} className="twr-sticky twr-top-0 twr-z-20 twr-mb-4 twr-w-1/2" navLinks={_navLinks} />
          <Navigation onNavLinkClick={() => alert('clicked')} className="twr-sticky twr-top-0 twr-z-20 twr-mb-4" stacked navLinks={_navLinks} />
        </li>
        <li class="twr-space-y-4">
          <p>{`<TextField> component:`}</p>
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
