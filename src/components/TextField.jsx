import React from 'react'
import ReactDOM from 'react-dom'

export function TextArea(props) { return (<TextField {...props} type="textarea" />) };

export default function TextField({ id = '', className = '', inputClassName = '', labelClassName = '', type = 'text', onChange, value = '', disabled = false, label = "label", placeholder, ...otherProps}) {
  // https://stackoverflow.com/a/65901743/8320709 placeholder trick
  function hasPlaceholder() {
    return placeholder !== undefined && placeholder.length > 0;
  };
  return (
    <div id={id} className={`text-field ${className} ${(disabled ? 'text-field__disabled' : '')}`}>
      <div className='relative'>
        {
          type === 'textarea' ?
          (
            <textarea 
              id="current-id" 
              className={`text-field__input text-field__input--as-textarea ${hasPlaceholder() ? 'text-field__input--has-placeholder' : 'text-field__input--has-no-placeholder'}`}
              value={value}
              onChange={onChange}
              disabled={disabled}
              placeholder={hasPlaceholder() ? placeholder : ' '}
              {...otherProps}
            />
          )
          :
          (
            <input 
              id="current-id"
              className={`text-field__input ${hasPlaceholder() ? 'text-field__input--has-placeholder' : 'text-field__input--has-no-placeholder'}`}
              type={type}
              value={value}
              onChange={onChange}
              disabled={disabled}
              placeholder={hasPlaceholder() ? placeholder : ' '}
              {...otherProps}
            />
          )
        }
        <label
          className={`text-field__label`}
          htmlFor="current-id"
        >
          { label }
        </label>
      </div>
    </div>
  )
}
