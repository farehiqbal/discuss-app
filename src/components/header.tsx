import Link from 'next/link';
import { Suspense } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import HeaderAuth from './header-auth';
import SearchInput from './search-input';

export default async function Header() {
    return (
        <Navbar isBordered className="mb-6 max-w-full overflow-x-hidden px-2">
            {/* Logo section */}
            <NavbarBrand className="flex items-center space-x-2 pr-2">
                {/* Display the logo on small screens */}
                <Link href="/" className="font-bold text-inherit text-xl sm:hidden flex items-center">
                    <span role="img" aria-label="logo">💬</span>
                </Link>

                {/* Display full "Discuss" text on larger screens */}
                <Link href="/" className="font-bold text-inherit text-xl hidden sm:block sm:text-2xl">
                    Discuss
                </Link>
            </NavbarBrand>

            {/* Search bar for all screens */}
            <NavbarContent className="flex-1 flex justify-center px-2">
                <NavbarItem className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                    <Suspense>
                        <SearchInput />
                    </Suspense>
                </NavbarItem>
            </NavbarContent>

            {/* Auth buttons */}
            <NavbarContent justify="end" className="flex items-center space-x-1">
                <HeaderAuth />
            </NavbarContent>
        </Navbar>
    );
}
