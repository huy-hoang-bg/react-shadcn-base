import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import { NavMenu } from '@/components/layout/nav-menu'
import { sidebarData } from './data/sidebar-data'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' variant='sidebar' {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        {sidebarData.items.map((props) => (
          <NavMenu key={props.title} {...props} />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
