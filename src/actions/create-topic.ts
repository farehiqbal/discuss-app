'use server'

import { create } from 'domain';
import {z} from 'zod';

const createTopicSchema = z.object({
    name: z.string().min(3).regex(/^[a-z-]+$/, {message: 'Name must be lowercase letters or dashes without spaces'}),
    description: z.string().max(10),
});

interface createTopicFormState{
    errors: {
        name?: string[];
        description?: string[];
    }
}

export async function createTopic(
    formState: createTopicFormState , 
    formData: FormData
): Promise<createTopicFormState> {
 
   const result = createTopicSchema.safeParse({
        name : formData.get('name'),
        description: formData.get('description'),
   });

   if (!result.success) {
       return {
            errors: result.error.flatten().fieldErrors
       };
    }

    return {
        errors: {}
    }

    // TODO: revalidate the homepage
}