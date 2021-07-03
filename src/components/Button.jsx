import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './Loading';

export default function Button({
  id = '',
  className = '',
  inputClassName = '',
  type = '',
  text = '',
  children = '',
  buttonType = 'primary', 
  loading = false,
  loadingText = 'Loading...',
  ...otherProps
}) {
  return (
    <button 
      id={id} 
      className={`twr-button twr-button__${buttonType} ${className}`}
      inputClassName={inputClassName}
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