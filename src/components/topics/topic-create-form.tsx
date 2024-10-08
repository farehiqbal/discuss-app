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
import FormButton from '../common/form-button';

export default function TopicCreateForm() {
    const [formState, action] = useFormState(actions.createTopic, {
        errors: {}
    });

    return (
        <Popover placement='bottom-start' className="max-w-full">
            <PopoverTrigger>
                <Button color='secondary' size="sm">Create a Topic</Button>
            </PopoverTrigger>

            <PopoverContent className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
                <form action={action} className="w-full">
                    <div className="flex flex-col gap-4 p-4">
                        <h3 className='text-lg'>Create a Topic</h3>
                        
                        {/* Name Input */}
                        <Input
                            name='name'
                            label="Name"
                            labelPlacement='outside'
                            placeholder='Name'
                            isInvalid={!!formState.errors.name}
                            errorMessage={formState.errors.name?.join(', ')}
                            isRequired
                            className="w-full"
                        />

                        {/* Description Textarea */}
                        <Textarea
                            name='description'
                            label="Description"
                            labelPlacement='outside'
                            placeholder='Describe your topic'
                            isInvalid={!!formState.errors.description}
                            errorMessage={formState.errors.description?.join(', ')}
                            isRequired
                            className="w-full"
                        />

                        {/* Display form-level errors */}
                        {formState.errors._form ? (
                            <div className='rounded p-2 bg-red-200 border border-red-400'>
                                {formState.errors._form.join(', ')}
                            </div>
                        ) : null}

                        {/* Submit Button */}
                        <FormButton>Create Topic</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
