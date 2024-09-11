import React from 'react'

export default function Footer() {

    let footerstyle = {
       position : "relative",
       top : "100vh",
       width : "100%"
    }

  return (
    <footer className='bg-dark text-light py-3'  style={footerstyle}>
         <p className='text-center'>
      Copy-right&Copy; Mytodoslist.com
         </p>
    </footer>
  )
}
