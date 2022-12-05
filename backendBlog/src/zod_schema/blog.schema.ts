import {z} from 'zod'

export const addBlogSchema = z.object({
    body: z.object({
        title: z.string({required_error: 'Title is required' , invalid_type_error: 'Title must be string'}).max(50,'Title must be less than 50 char').min(2,'Title must be more than 2 char'),
        message: z.string({required_error: 'Message is required' , invalid_type_error: 'Message must be string'}).min(5,'Message must be more than 5 char'),
    })
})

export const deleteBlogSchema = z.object({
    params: z.object({
        id: z.string(),
    })
})

export type deleteBlogSchemaType = z.infer<typeof deleteBlogSchema>['params'];

