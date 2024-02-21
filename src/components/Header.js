import React from 'react';

function Header() {
  const style = {
    header: {
      width: '100vw',
      padding: '1rem',
      borderBottom: '3px solid grey',
      textAlign: 'center',
      background: 'white',
      position: 'sticky',
      zIndex: 5
    }
  }

  return (
    <header style={style.header}>
      <h2>Contact Manager</h2>
    </header>
  )
}

export default Header;