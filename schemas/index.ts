import * as z from 'zod'

export const LoginSchema= z.object({
  email: z.string().email({
    message: 'Email is required'
  }),
  password: z.string().min(1,{
    message: 'Password is too Short'
  })
})

export const SignUpSchema= z.object({
  email: z.string().email({
    message: 'Email is required'
  }),
  password: z.string().min(6,{
    message: 'Password is too Short'
  }),
  name: z.string().min(1,{
    message: 'Name is required'
  })
})