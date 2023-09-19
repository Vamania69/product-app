import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='sticky top-0 mb-2 bg-dark z-10'>
      <ul className="list-none bg-dark-primary border-b-2 border-border-primary  text-white flex justify-center ">
        <Link href={'/'} >
          <li className='p-4 hover:bg-dark-secondary'>Home</li>
        </Link>
        <Link href={'/products'}>
          <li className='p-4 hover:bg-dark-secondary'>Products</li>
        </Link>
        <Link href={'/cart'}>
          <li className='p-4 hover:bg-dark-secondary'>View Cart</li>
        </Link>
      </ul>
    </nav>
  )
}
