'use server'
import *  as z from 'zod'
import { SignUpSchema } from '../schemas'
import bcrypt from 'bcryptjs'
import db from '@/lib/db'
import { getUserByEmail } from '@/lib/userData'

export const signup = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);
  
  if(!validatedFields.success){
    return {error: "Invalid Fields"}
  }

  const {email,password,name} = validatedFields.data
  const hashedPassword = await bcrypt.hash(password,10)

  const existingUser = await getUserByEmail(email)
  if (existingUser){
    return {error: 'Email is already in use!'}
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })
  // TODO: send Verificcation token Email
  return {sucess: "User Created!"}


}