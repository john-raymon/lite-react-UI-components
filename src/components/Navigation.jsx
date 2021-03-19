import React from 'react'
import ReactDOM from 'react-dom'

export default function Navigation({ LinkComponent, navLinks = [], className = '', onNavLinkClick, stacked = false, columns = false}) {
  // TODO : create a button component to be used here, which will receive it's inner copy as a non-children prop or children (slot)
  const navItemClassName = 'twr-flex twr-w-full twr-justify-center twr-text-center twr-px-8 twr-py-3 twr-text-white twr-bg-black twr-rounded-full hover:twr-bg-gray-900 twr-shadow-lg hover:twr-shadow-md';
  const navActiveItemClassName = 'twr-bg-gray-800 twr-font-medium'
  return (
    <nav className={`twr-navigation ${className}`}>
      <ul className={`twr-max-w-full twr-px-4 twr-flex twr-flex-col twr-flex-wrap sm:twr-flex-row twr-w-full ${stacked || columns ? 'sm:twr-flex-col' : ''}`}>
        {
          navLinks.map(({ render, label, onClick, active }) => {
            return (
              <li className="twr-flex twr-mx-2 twr-py-2 twr-flex-grow">
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
