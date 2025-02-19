interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div
      className='flex min-h-svh items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url('/images/auth-bg.png')`,
      }}
    >
      <div className='w-full max-w-[550px]'>{children}</div>
    </div>
  )
}
