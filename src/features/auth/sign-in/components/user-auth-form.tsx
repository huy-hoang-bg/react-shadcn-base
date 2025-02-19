import { HTMLAttributes, useState } from 'react'
import { z } from 'zod'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { faker } from '@faker-js/faker'
import { cn } from '@/lib/utils'
import { ACCESS_TOKEN, useAuth } from '@/context/auth-context'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'
import { PrimaryButton } from '@/components/primary-button'

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, {
      message: 'Please enter your password',
    })
    .min(7, {
      message: 'Password must be at least 7 characters long',
    }),
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { setUser } = useAuth()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // eslint-disable-next-line no-console
    console.log(data)

    setTimeout(() => {
      Cookies.set(ACCESS_TOKEN, faker.internet.jwt())
      setUser({
        email: faker.internet.email(),
      })
      setIsLoading(false)

      window.history.back()
    }, 3000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-2'>
                  <FormLabel className='text-2xl font-semibold'>
                    メールアドレス
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='sample@neweai.com'
                      {...field}
                      autoComplete='email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-2'>
                  <FormLabel className='text-2xl font-semibold'>
                    パスワード
                  </FormLabel>
                  <FormControl>
                    <PasswordInput {...field} autoComplete='current-password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <PrimaryButton className='mt-4' disabled={isLoading}>
              ログイン
            </PrimaryButton>
          </div>
        </form>
      </Form>
    </div>
  )
}
