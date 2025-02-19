import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import { NavMenu } from '@/components/layout/nav-menu'
import { sidebarData } from './data/sidebar-data'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className='shadow-admin-sidebar relative bg-white'
      collapsible='none'
      variant='sidebar'
      {...props}
    >
      <SidebarHeader className='mb-12 mt-6 px-[17px] py-0'>
        <div className='flex items-center justify-between'>
          <img
            src={sidebarData.header.thumbnail}
            className='h-[19.27px] w-auto'
          />
          <p className='text-[11px] font-semibold leading-[11px] text-gray-brand-500'>
            {sidebarData.header.description}
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.items.map((props) => (
          <NavMenu key={props.title} {...props} />
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
