import React from 'react'
import ReactDOM from 'react-dom'
import {overrideTailwindClasses} from 'tailwind-override';

const overrideTW = (classes) => {
  return overrideTailwindClasses(classes, { prefix: "twr-" });
}

export default function Navigation({ LinkComponent, navLinks = [], className = '', onNavLinkClick, stacked = false, columns = false}) {
  // TODO : create a button component to be used here, which will receive it's inner copy as a non-children prop or children (slot)
  const navItemClassName = 'twr-flex twr-w-full twr-font-semibold twr-text-base twr-justify-center twr-text-center twr-px-8 twr-py-4 twr-text-black focus:twr-outline-none actie:twr-outline-none focus:twr-bg-gray-200 active:twr-bg-gray-200 hover:twr-bg-gray-200 twr-rounded-lg twr-capitalize twr-transition twr-ease-in twr-duration-400';
  const navActiveItemClassName = 'twr-bg-black twr-text-white twr-font-bold twr-shadow-xl hover:twr-bg-gray-800 active:twr-bg-gray-800 focus:twr-bg-gray-800'
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
                      render({ className: overrideTW(`${navItemClassName} ${active ? navActiveItemClassName : ''}`), onClick })
                    )
                  :
                    (
                      <button onClick={onClick} className={overrideTW(`${navItemClassName} ${active ? navActiveItemClassName : ''}`)}>
                        {
                          label
                        }
                      </button>
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
