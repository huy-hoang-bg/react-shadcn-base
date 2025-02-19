import { IconLayoutDashboard, IconUsers } from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  header: {
    thumbnail: '/images/logo.png',
    description: '管理画面',
  },
  items: [
    {
      title: 'Dashboard',
      url: '/',
      icon: IconLayoutDashboard,
    },

    {
      title: 'Users',
      url: '/users',
      icon: IconUsers,
    },
  ],
}
