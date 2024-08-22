'use client';

import { useFormState, useFormStatus} from "react-dom";
import {Button, Input, Textarea, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from "../common/form-button";
import { error } from "console";
import { errorToJSON } from "next/dist/server/render";

interface PostCreateFormProps {
    slug: string;
}

export default async function PostCreateForm({slug}: PostCreateFormProps) {

    const [formState, action] = useFormState(
        actions.createPost.bind(null, slug),
        {
            errors: {}
        }
    );

    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color="secondary" variant="bordered">
                    Create a Post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Post</h3>
                        <Input 
                            name="title"
                            placeholder="Title"
                            label="Title"
                            labelPlacement="outside"
                            isInvalid={!!formState.errors.title}
                            errorMessage={formState.errors.title?.join(", ")}
                             />
                        <Textarea 
                            name="content"
                            placeholder="Content"
                            labelPlacement="outside" 
                            label="Content" 
                            isInvalid={!!formState.errors.content}
                            errorMessage={formState.errors.content?.join(", ")}
                        />

                        {
                            formState.errors._form ? <div className="rounded p-2 bg-red-200 border border-red-400" >{formState.errors._form.join(', ')} </div> : null
                        }

                        <FormButton>Create Post</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>

    )

}
 