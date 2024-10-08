'use client';

import { useSession } from 'next-auth/react';
import * as actions from '@/actions';
import {
    NavbarItem,
    Button,
    Avatar,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@nextui-org/react';

export default function HeaderAuth() {
    const session = useSession();

    let authContent: React.ReactNode;

    if (session.status === 'loading') {
        authContent = null;
    } else if (session.data?.user) {
        authContent = (
            <Popover placement="bottom-end">
                <PopoverTrigger>
                    <Avatar
                        src={session.data.user.image || ''}
                        size="sm" // Smaller avatar for better fit
                        className="cursor-pointer"
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-2">
                        <form action={actions.signOut}>
                            <Button type="submit" color="primary" className="w-full">
                                Sign Out
                            </Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        );
    } else {
        authContent = (
            <>
                <NavbarItem className="mr-1">
                    <form action={actions.signIn}>
                        <Button type="submit" size="sm" color="secondary" variant="bordered">
                            Sign In
                        </Button>
                    </form>
                </NavbarItem>
                <NavbarItem>
                    <form action={actions.signIn}>
                        <Button type="submit" size="sm" color="primary" variant="flat">
                            Sign Up
                        </Button>
                    </form>
                </NavbarItem>
            </>
        );
    }

    return authContent;
}
