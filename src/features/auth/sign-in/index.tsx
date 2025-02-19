import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className='flex flex-col gap-6 p-8'>
        <img
          src='/images/logo.png'
          alt='logo'
          className='mx-auto h-auto w-[364px]'
        />
        <div className='mx-auto text-[32px] font-semibold'>
          管理者用ログイン
        </div>
        <UserAuthForm />
      </Card>
    </AuthLayout>
  )
}
