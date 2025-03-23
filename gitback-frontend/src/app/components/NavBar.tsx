'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const navbarLinks = [
    {
      imgURL: "/icons/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/icons/dollar-circle.svg",
      route: "/grouppage",
      label: "Group",
    },
    {
      imgURL: "/icons/transaction.svg",
      route: "/AccountPage",
      label: "Sign In",
    },
    {
      imgURL: "/icons/money-send.svg",
      route: "/settings",
      label: "Settings",
    },
];

const NavBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>
        <nav className="flex flex-col gap-4">
            <Link href='/' className=''>
            <img src="../getIcon.png" alt="Logo" className="logo-icon" 
            style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <h1 className="logo-text">Get Back</h1>
            </Link>

            {navbarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(item.route);

                return (
                    <Link 
                        href={item.route} 
                        key={item.label} 
                        className={`${
                            isActive ? 'text-blue-600 font-bold' : 'text-gray-800'
                        } hover:text-blue-600`}>
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    </section>
  );
}

export default NavBar;
