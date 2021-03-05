import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/styles/textfield.css';

export default function TextField({ id = '', className = '', inputClassName = '', labelClassName = '', type = 'text', onChange, value = '', disabled = false, label = "label", placeholder }) {
  // https://stackoverflow.com/a/65901743/8320709 placeholder trick
  function hasPlaceholder() {
    return placeholder !== undefined && placeholder.length > 0;
  };
  return (
    <div id={id} className={`text-field ${className} ${(disabled ? 'text-field__disabled' : '')}`}>
      <div className={`relative`}>
        <input id="current-id" className={`text-field__input ${hasPlaceholder() ? 'text-field__input--has-placeholder' : 'text-field__input--has-no-placeholder'} ${inputClassName}`} type={type} value={value} onChange={onChange} disabled={disabled} placeholder={hasPlaceholder() ? placeholder : ' '} />
        <label
          className={`text-field__label ${labelClassName}`}
          htmlFor="current-id"
        >
          { label }
        </label>
      </div>
    </div>
  )
}
