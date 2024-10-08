'use client';

import { useFormState } from "react-dom";
import { Button, Input, Textarea, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from "../common/form-button";

interface PostCreateFormProps {
    slug: string;
}

export default async function PostCreateForm({ slug }: PostCreateFormProps) {

    const [formState, action] = useFormState(
        actions.createPost.bind(null, slug),
        {
            errors: {}
        }
    );

    return (
        <Popover placement='bottom-start' className="max-w-full">
            <PopoverTrigger>
                <Button size="sm" color="secondary" variant="bordered">
                    Create a Post
                </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
                <form action={action} className="w-full">
                    <div className="flex flex-col gap-4 p-4">
                        <h3 className="text-lg">Create a Post</h3>
                        
                        {/* Title Input */}
                        <Input
                            name="title"
                            placeholder="Title"
                            label="Title"
                            labelPlacement="outside"
                            isInvalid={!!formState.errors.title}
                            errorMessage={formState.errors.title?.join(", ")}
                            className="w-full"
                        />

                        {/* Content Input */}
                        <Textarea
                            name="content"
                            placeholder="Content"
                            labelPlacement="outside" 
                            label="Content"
                            isInvalid={!!formState.errors.content}
                            errorMessage={formState.errors.content?.join(", ")}
                            className="w-full"
                        />

                        {/* Error Display */}
                        {formState.errors._form ? (
                            <div className="rounded p-2 bg-red-200 border border-red-400">
                                {formState.errors._form.join(', ')}
                            </div>
                        ) : null}

                        {/* Submit Button */}
                        <FormButton>Create Post</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
