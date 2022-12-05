import {z} from 'zod'

export const registerSchema = z.object({
    body: z.object({
        username: z.string({required_error: 'Username is required' , invalid_type_error: 'Username must be string'}).max(10,'Username must be less than 10 char').min(2,'Username must be more than 2 char'),
        password: z.string({required_error: 'Password is required' , invalid_type_error: 'Password must be string'}).max(10,'Password must be less than 10 char').min(4,'Password must be more than 5 char'),
        email: z.string({required_error: 'Email is required' , invalid_type_error: 'Email must be string'}).email('Please enter a valid email'),
    })
})

export const loginSchema = z.object({
    body: z.object({
        email: z.string({required_error: 'Email is required'}).email('Please enter a valid email'),
        password: z.string({required_error: 'Password is required'})
    })
})
