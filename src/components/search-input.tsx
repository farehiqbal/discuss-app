'use client';

import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import * as actions from '@/actions';

export default function SearchInput() {
    const searchParams = useSearchParams();

    return (
        <form action={actions.search} className="w-full">
            <Input 
                name="term" 
                size="sm" 
                color="secondary" 
                placeholder=" Search for something" 
                defaultValue={searchParams.get('term') || ""}
                type="search"
                className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
        </form>
    );
}
