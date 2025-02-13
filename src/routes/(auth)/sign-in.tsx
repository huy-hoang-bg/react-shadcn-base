import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'
import SignIn from '@/features/auth/sign-in'

export const Route = createFileRoute('/(auth)/sign-in')({
  component: SignIn,
  beforeLoad: () => {
    const authStore = useAuthStore.getState().auth

    if (authStore.accessToken) {
      return redirect({ to: '/' })
    }
  },
})
