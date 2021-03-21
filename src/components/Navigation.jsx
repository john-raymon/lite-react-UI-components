import React from 'react'
import ReactDOM from 'react-dom'

export default function Navigation({ LinkComponent, navLinks = [], className = '', onNavLinkClick, stacked = false, columns = false}) {
  // TODO : create a button component to be used here, which will receive it's inner copy as a non-children prop or children (slot)
  const navItemClassName = 'twr-flex twr-w-full twr-text-sm twr-justify-center twr-text-center twr-px-8 twr-py-3 twr-text-white twr-bg-black twr-rounded-full hover:twr-bg-gray-900 twr-shadow-lg hover:twr-shadow-md';
  const navActiveItemClassName = 'twr-bg-gray-800 twr-font-medium'
  return (
    <nav className={`twr-navigation twr-max-w-full ${className}`}>
      <ul className={`twr-navigation__ul twr-flex twr-max-w-full twr-overflow-scroll twr-flex-row twr-w-full ${stacked || columns ? 'twr-navigation__ul--stacked twr-flex-col' : 'twr-rounded-2xl '}`}>
        {
          navLinks.map(({ render, label, onClick, active }) => {
            return (
              <li className="twr-flex twr-mx-1 twr-py-1 twr-flex-shrink-0 twr-my-1">
                {
                  render && typeof render === 'function' ? 
                    (
                      render({ className: `${navItemClassName} ${active ? navActiveItemClassName : ''}`, onClick })
                    )
                  :
                    (
                      <button onClick={onClick} className={`${navItemClassName} ${active ? navActiveItemClassName : ''}`}>
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
