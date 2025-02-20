import React from 'react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/context/auth-context'
import { Button } from '../ui/button'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
}

export const Header = ({ className, fixed, ...props }: HeaderProps) => {
  const { handleLogout } = useAuth()

  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'flex h-16 items-center gap-3 bg-transparent p-4 sm:gap-4',
        fixed && 'header-fixed peer/header fixed z-50 w-[inherit] rounded-md',
        offset > 10 && fixed ? 'shadow' : 'shadow-none',
        className
      )}
      {...props}
    >
      <Button
        className='ml-auto h-full'
        variant='outline'
        onClick={handleLogout}
      >
        Logout
      </Button>
    </header>
  )
}

Header.displayName = 'Header'
