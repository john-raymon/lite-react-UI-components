import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './Loading';

export default function Button({
  id = '',
  className = '',
  type = 'submit',
  text = '',
  children = '',
  buttonType = 'primary', 
  loading = false,
  loadingText = 'Loading...',
  active = null, // for explicitlity forcing a focus state
  ...otherProps
}) {
  return (
    <button 
      id={id} 
      className={`twr-button twr-button__${buttonType} ${active ? `twr-button__${buttonType}--focus` : (active === null ? '' : `twr-button__${buttonType}--no-focus`)} ${className}`}
      type={type}
      {...otherProps}      
    >
      <div className="twr-mx-auto">
        { 
          loading ?
          (<div className="twr-flex twr-items-center twr-space-x-2 twr-mx-auto">
            <div className="flex twr-w-5 twr-h-5">
              <Loading /> 
            </div>
            <p>
              {loadingText}
            </p>
          </div>) :
        children || text
        }
      </div>
    </button>
  )
}