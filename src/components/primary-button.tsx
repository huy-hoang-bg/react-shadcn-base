import { cn } from '@/lib/utils'
import { Button } from './ui/button'

type Props = {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function PrimaryButton({ children, className, type, disabled }: Props) {
  return (
    <Button
      className={cn(
        'bg-gradient-primary h-12 rounded-full text-xl font-semibold text-white hover:opacity-75',
        className
      )}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}
