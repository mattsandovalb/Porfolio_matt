import React from 'react';
import Nav from '../NavBar/Nav';
function Layout({children}) {
  return (
    <>
        <Nav/>
        {children}
    </>
  )
}

export default Layout