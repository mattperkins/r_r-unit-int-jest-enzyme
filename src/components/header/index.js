import * as React from 'react'
import './header.scss'

function Header() {
  return (
    <header data-test="headerComponent">
      <p data-test="logoIMG">I am Header</p>
    </header>
  )
}

export default Header