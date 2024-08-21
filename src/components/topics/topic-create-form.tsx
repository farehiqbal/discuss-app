'use client';
import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@nextui-org/react';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';
import { error } from 'console';

export default function TopicCreateForm() {
    const [formState,action] = useFormState(actions.createTopic,
        {errors: {}
    });
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create a Topic</Button>
            </PopoverTrigger>

            <PopoverContent>
                <form action={action} >
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className='text-lg'>Create a Topic</h3>
                        <Input name='name' label="Name" labelPlacement='outside' placeholder='Name' ></Input>
                        <Textarea 
                            name='description'
                            label="Description" 
                            labelPlacement='outside' 
                            placeholder='Descibe your topic' 
                        />
                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}