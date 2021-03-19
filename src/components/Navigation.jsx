import React from 'react'
import ReactDOM from 'react-dom'

const _navLinks = [
  {
    label: 'first one',
    onClick: () => alert('this was clicked'),
    active: true,
  },
  {
    label: 'second one',
    render: (props) => {
      return (<a {...props} href="from-render-function" >testing</a>)
    },
  },
  {
    label: 'third one'
  },
  {
    label: 'third one'
  }
]

export default function Navigation({ LinkComponent, navLinks = _navLinks, className = '', onNavLinkClick}) {
  // TODO : create a button component to be used here, which will receive it's inner copy as a non-children prop or children (slot)
  const navItemClassName = 'twr-px-8 twr-mr-4 twr-my-2 twr-py-3 twr-text-white twr-bg-black twr-rounded-full hover:twr-bg-gray-900 twr-shadow-lg hover:twr-shadow-md';
  const navActiveItemClassName = 'twr-bg-gray-800 twr-font-medium'
  return (
    <nav className={`twr-navigation ${className}`}>
      <ul className="twr-max-w-full twr-px-4 twr-flex twr-items-center twr-flex-wrap twr-w-full">
        {
          navLinks.map(({ render, label, onClick, active }) => {
            return (
              <li className="twr-flex">
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
