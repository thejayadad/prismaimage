import React from 'react'
import Logo from '../ui/logo'
import MobileMenu from './mobile-menu'
import { auth } from '@/auth'
import SignOut from './signout-btn'
import SignIn from './signin-btn'
import DeskMenu from './desk-menu'

const Header = async () => {
    const session = await auth()
    
  return (
    <header className='w-full border-b border-neutral-100 py-2'>
        <div className='mx-auto flex items-center justify-between w-full max-w-screen-xl px-4 py-2'>
            <Logo />
            <div className='flex items-center space-x-1'>
            <MobileMenu />
            <DeskMenu />
            {session? (

                <>
                <SignOut  />
                </>
            ) : (
                <>
                <SignIn />
                </>
            )}
            </div>
        </div>        
    </header>
  )
}

export default Header