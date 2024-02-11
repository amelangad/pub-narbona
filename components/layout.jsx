import React from 'react'
import Nav from '../components/Nav'

export default function Layout({ children }) {
    return (
      <div className ="max-bg-screen">
      <Nav/>
        <div>
          <main>{children}</main>
        </div>

      </div>
    );
  }
