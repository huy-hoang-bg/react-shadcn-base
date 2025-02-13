import { useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'

export function useLogout() {
  const authStore = useAuthStore.getState().auth
  const navigate = useNavigate()

  const handleLogout = () => {
    authStore.reset()
    navigate({ to: '/sign-in' })
  }

  return { handleLogout }
}
