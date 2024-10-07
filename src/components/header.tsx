import Link from 'next/link';
import { auth } from '@/auth';
import * as actions from '@/actions';
import { Suspense } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
}from '@nextui-org/react';
import HeaderAuth from './header-auth';
import SearchInput from './search-input';

export default async function Header() {
    
    return (
        <Navbar isBordered className='mb-6'>
            <NavbarBrand>
                <Link href='/' className='font-bold text-inherit text-2xl' >Discuss</Link>
            </NavbarBrand>

            <NavbarContent justify="center" as="div" className="w-full">
                <NavbarItem className="flex-grow">
                    <Suspense>
                        <div className="max-w-lg mx-auto w-full">
                            <SearchInput />
                        </div>
                    </Suspense>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify='end'>
                <HeaderAuth />
            </NavbarContent>

        </Navbar>
    )

}
