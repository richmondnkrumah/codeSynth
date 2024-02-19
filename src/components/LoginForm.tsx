'use client'
import  {useState, useTransition } from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField
}
from '@/components/ui/form'
import * as z from 'zod'
import { LoginSchema } from '../../schemas'
import { Input } from './ui/input'
import { Button } from './ui/button'
import FormError from './form-error'
import FormSuccess from './form-sucess'
import { login } from '../../actions/login'


type Props = {}

const LoginForm = (props: Props) => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const [isPending,startTransition] = useTransition()
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      login(values)
      .then((data) => {
        setError(data.error)
        setSuccess(data.sucess)
      })
    })
  }
  return (
    <Form {...form}>
      <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
    <div className='space-y-4'>
      <FormField control={form.control} name='email' render={({field}) => <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input disabled={isPending} {...field} placeholder='johndoe@gmail.com' type='email'/>
        </FormControl>
        <FormMessage />
      </FormItem>}/>
      <FormField control={form.control} name='password' render={({field}) => <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input disabled={isPending} {...field} placeholder='*****' type='password'/>
        </FormControl>
        <FormMessage />
      </FormItem>}/>
    </div>
    <FormError message={error}/> 
    <FormSuccess message={success}/>
    <Button disabled={isPending} type='submit' className='w-full'>
      Login
    </Button>
      </form>

    </Form>
  )
}

export default LoginForm