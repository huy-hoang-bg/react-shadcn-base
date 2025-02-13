import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import Cookies from 'js-cookie'
import { useLocation, useNavigate } from '@tanstack/react-router'

export const ACCESS_TOKEN = 'ACCESS_TOKEN'

type User = {
  email: string
}

type AuthContextType = {
  user?: User
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  handleLogout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [user, setUser] = useState<User>()

  const handleLogout = () => {
    Cookies.remove(ACCESS_TOKEN)
    setUser(undefined)
    navigate({ to: '/sign-in' })
  }

  useEffect(() => {
    const accessToken = Cookies.get(ACCESS_TOKEN)
    const authRoutes = ['/sign-in']

    if (!accessToken && !authRoutes.includes(location.pathname)) {
      handleLogout()
    }
    if (accessToken && authRoutes.includes(location.pathname)) {
      navigate({ to: '/' })
    }
  }, [location.pathname])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('authContext has to be used within <AuthContext.Provider>')
  }

  return authContext
}
