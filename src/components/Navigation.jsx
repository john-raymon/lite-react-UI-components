import React from 'react'
import ReactDOM from 'react-dom'

export default function Navigation({ LinkComponent, navLinks = [1, 2, 3, 4, 5, 6, 6, 6, 6, 5, 5, 5], className = ''}) {
  // TODO : create a button component to be used here, which will receive it's inner copy as a non-children prop or children (slot)
  return (
    <nav className={`twr-navigation ${className}`}>
      <ul className="twr-max-w-full twr-px-4 twr-flex twr-flex-wrap twr-w-full">
        {
          navLinks.map(() => {
            return (
              <li className="">
                <button className="twr-px-8 twr-mr-4 twr-my-2 twr-py-3 twr-text-white twr-bg-black twr-rounded-full hover:twr-bg-gray-900 twr-shadow-lg hover:twr-shadow-md">
                  First
                </button>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
