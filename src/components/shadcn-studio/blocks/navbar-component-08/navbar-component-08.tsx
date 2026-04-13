import { BellIcon, CalendarIcon, MailIcon, SearchIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import LogoSvg from '@/assets/svg/logo'
import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'

const Navbar = () => {
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
        <a href='#'>
          <div className='flex items-center'>
            <LogoSvg className='size-8' />
            <span className='ml-3 text-xl font-semibold max-[500px]:hidden'>shadcn/studio</span>
          </div>
        </a>

        <div className='relative max-md:hidden'>
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
            <SearchIcon className='size-4' />
            <span className='sr-only'>Search</span>
          </div>
          <Input type='text' placeholder='Type here' className='peer rounded-full pl-9' />
        </div>

        <div className='flex items-center gap-2 md:gap-4'>
          <Button variant='ghost' size='icon' className='md:hidden'>
            <SearchIcon />
            <span className='sr-only'>Search</span>
          </Button>

          <Button variant='ghost' size='icon'>
            <CalendarIcon />
            <span className='sr-only'>Calendar</span>
          </Button>

          <NotificationDropdown
            trigger={
              <Button variant='ghost' size='icon' className='relative'>
                <BellIcon />
                <span className='bg-destructive absolute top-2 right-2.5 size-2 rounded-full' />
              </Button>
            }
          />

          <Button variant='ghost' size='icon' className='relative'>
            <MailIcon />
            <span className='bg-destructive absolute top-2 right-2 size-2 rounded-full' />
          </Button>

          <ProfileDropdown
            trigger={
              <Button variant='ghost' size='icon' className='size-8.5'>
                <Avatar className='size-8.5 rounded-md'>
                  <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar
