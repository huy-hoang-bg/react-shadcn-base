import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AuthProvider } from '@/context/auth-context'
import { Toaster } from '@/components/ui/toaster'
import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'

export const Route = createRootRoute({
  component: () => {
    return (
      <AuthProvider>
        <Outlet />
        <Toaster />
        {import.meta.env.MODE === 'development' && (
          <>
            <TanStackRouterDevtools position='bottom-right' />
          </>
        )}
      </AuthProvider>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
