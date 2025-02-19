import { LinkProps } from '@tanstack/react-router'

interface SidebarHeader {
  thumbnail: string
  description: string
}

interface BaseNavItem {
  title: string
  badge?: string
  icon?: React.ElementType
}

type NavLink = BaseNavItem & {
  url: LinkProps['to']
  items?: never
}

interface SidebarData {
  header: SidebarHeader
  items: NavLink[]
}

export type { SidebarData, NavLink }
