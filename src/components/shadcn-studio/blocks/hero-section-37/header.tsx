import { RocketIcon } from 'lucide-react'

import { SecondaryGrowButton } from '@/components/ui/grow-button'

import {
  HeroNavigation01,
  HeroNavigation01SmallScreen,
  type Navigation
} from '@/components/shadcn-studio/blocks/hero-section-37/hero-navigation'

import { cn } from '@/lib/utils'

import GrowLogo from '@/assets/svg/grow-logo'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  return (
    <header className={cn('sticky top-0 z-50 h-16 w-full transition-all duration-300', className)}>
      <div className='bg-primary mx-auto flex h-full max-w-189 items-center justify-between gap-6 rounded-b-[12px] px-8'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-3'>
          <GrowLogo className='[&_path]:first:fill-primary [&_path]:last:fill-background size-8' />
          <span className='text-primary-foreground text-[20px] font-semibold uppercase'>Grow</span>
        </a>
        <HeroNavigation01 navigationData={navigationData} navigationClassName='grow' />

        <div className='flex gap-3'>
          {/* Actions */}
          <SecondaryGrowButton className='max-sm:hidden' asChild>
            <a href='#'>Get Started</a>
          </SecondaryGrowButton>

          <SecondaryGrowButton size='icon' className='sm:hidden' asChild>
            <a href='#'>
              <span className='sr-only'>Get Started</span>
              <RocketIcon />
            </a>
          </SecondaryGrowButton>

          <HeroNavigation01SmallScreen
            navigationData={navigationData}
            logo={
              <span className='flex items-center gap-3'>
                <GrowLogo className='size-8' />
                <span className='text-primary lg:text-primary-foreground text-[20px] font-semibold uppercase'>
                  Grow
                </span>
              </span>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
