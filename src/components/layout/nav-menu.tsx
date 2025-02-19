import { ReactNode } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Badge } from '../ui/badge'
import { NavLink } from './types'

export function NavMenu(item: NavLink) {
  const href = useLocation({ select: (location) => location.href })
  return (
    <SidebarMenu>
      <SidebarMenuLink item={item} href={href} />
    </SidebarMenu>
  )
}

const NavBadge = ({ children }: { children: ReactNode }) => (
  <Badge className='rounded-full px-1 py-0 text-xs'>{children}</Badge>
)

const SidebarMenuLink = ({ item, href }: { item: NavLink; href: string }) => {
  return (
    <SidebarMenuItem className='h-12'>
      <SidebarMenuButton
        className='h-full'
        asChild
        isActive={checkIsActive(href, item)}
        tooltip={item.title}
      >
        <Link to={item.url}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function checkIsActive(href: string, item: NavLink, mainNav = false) {
  return (
    href === item.url || // /endpint?search=param
    href.split('?')[0] === item.url || // endpoint
    (mainNav &&
      href.split('/')[1] !== '' &&
      href.split('/')[1] === item?.url?.split('/')[1])
  )
}
