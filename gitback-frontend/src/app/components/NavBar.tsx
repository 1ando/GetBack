import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const navbarLinks = [
    {
      imgURL: "/icons/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/icons/dollar-circle.svg",
      route: "/my-banks",
      label: "My Banks",
    },
    {
      imgURL: "/icons/transaction.svg",
      route: "/transaction-history",
      label: "Transaction History",
    },
    {
      imgURL: "/icons/money-send.svg",
      route: "/payment-transfer",
      label: "Transfer Funds",
    },
  ];

const NavBar = () => {
  return (
    <section className='navbar'>
        <nav className="flex 
        flex-col gap-4">
            <Link href='/'
            className='mb-12 cursur-pointer items-center gap-2'>
              {/* Insert Logo */}
                <h1 className = "logo">Get Back</h1>
            </Link>

            {navbarLinks.map((item) => {
                return(
                    <Link href={item.route} key ={item.label}
                    >
                        {item.label}
                    </Link>
                )
            }
        )}
        </nav>
    </section>
    
  )
}

export default NavBar