import React from 'react'
import ReactDOM from 'react-dom'
import {overrideTailwindClasses} from 'tailwind-override';
import Button from './Button';

const overrideTW = (classes) => {
  return overrideTailwindClasses(classes, { prefix: "twr-" });
}

export default function Navigation({ LinkComponent, navLinks = [], className = '', onNavLinkClick, stacked = false, columns = false, buttonTypes = "secondary"}) {
  // TODO : create a button component to be used here, which will receive it's inner copy as a non-children prop or children (slot)
  return (
    <nav className={`twr-navigation twr-max-w-full ${className}`}>
      <ul className={`twr-navigation__ul twr-flex twr-max-w-full twr-overflow-scroll twr-flex-row twr-w-full ${stacked || columns ? 'twr-navigation__ul--stacked twr-flex-col' : 'twr-rounded-2xl '}`}>
        {
          navLinks.map(({ render, label, onClick, active }) => {
            return (
              <li className="twr-flex twr-mx-2 twr-py-1 twr-flex-shrink-0">
                {
                  render && typeof render === 'function' ? 
                    (
                      render({ onClick, active})
                    )
                  :
                    (
                      <Button onClick={onClick} buttonType={buttonTypes} className={`twr-w-full`} active={active}>
                        {
                          label
                        }
                      </Button>
                    )
                }
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
