import { ArrowUpIcon } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { AnimatedTooltip } from '@/components/ui/motion-tooltip'
import { MotionPreset } from '@/components/ui/motion-preset'
import { NumberTicker } from '@/components/ui/number-ticker'

import { AreaGradientChart, RadialChart } from '@/components/shadcn-studio/blocks/bento-grid-03/charts'

import Logo from '@/assets/svg/logo'

export type AvatarItem = {
  image: string
  name: string
  fallback: string
  designation: string
}

const BentoGrid = ({ avatars }: { avatars: AvatarItem[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
        {/* Card 1: Funding */}
        <MotionPreset fade blur zoom={{ initialScale: 0.9 }} delay={0.2} transition={{ duration: 0.5 }}>
          <Card className='bg-muted h-full border-0 shadow-none'>
            <CardContent className='flex flex-col items-center gap-6 text-center'>
              <h2 className='text-2xl font-semibold'>First round of Funding</h2>

              {/* Radial Chart */}
              <RadialChart />

              <h3 className='text-5xl leading-14 font-semibold'>2.5K</h3>
              <h4 className='text-2xl font-semibold text-pretty'>263 Contributions in the last year</h4>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card 2: Team */}
        <MotionPreset fade blur zoom={{ initialScale: 0.9 }} delay={0.4} transition={{ duration: 0.5 }}>
          <Card className='bg-muted h-full border-0 shadow-none'>
            <CardContent className='flex h-full flex-col justify-between gap-4'>
              <h2 className='text-2xl font-semibold'>Team of passionate designers and developers</h2>

              {/* Avatar Group */}
              <div className='flex w-full flex-row items-center justify-start'>
                <AnimatedTooltip items={avatars} className='-me-4 [&>[data-slot=avatar]]:size-16' />
              </div>

              <div className='space-y-6'>
                <h4 className='text-2xl font-semibold'>Daily New Clients</h4>
                <h3 className='text-5xl leading-14 font-semibold'>86</h3>
                <span className='text-2xl font-semibold text-green-600 dark:text-green-400'>+40%</span>
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card 3: Project View */}
        <MotionPreset fade blur zoom={{ initialScale: 0.9 }} delay={0.6} transition={{ duration: 0.5 }}>
          <Card className='h-full border-0 bg-lime-200 shadow-none max-lg:col-span-full'>
            <CardContent className='h-full'>
              <div className='space-y-1.5'>
                <h3 className='text-5xl leading-14 font-bold text-black'>
                  <NumberTicker startValue={4569} value={5695} delay={0.75} />+
                </h3>
                <h4 className='text-xl text-black'>Project View Last year</h4>
              </div>

              <div className='-mb-6 flex flex-1 items-end justify-center'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-8.png'
                  alt='Businesswoman'
                  className='h-80 w-auto object-cover'
                />
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card 4: New Users */}
        <MotionPreset fade blur zoom={{ initialScale: 0.9 }} delay={0.8} transition={{ duration: 0.5 }}>
          <Card className='h-full border-0 bg-lime-200 shadow-none'>
            <CardContent className='h-full'>
              <div className='space-y-1.5'>
                <h3 className='text-5xl leading-14 font-bold text-black'>
                  <NumberTicker startValue={19} value={57} delay={0.95} />
                  K+
                </h3>
                <h4 className='text-xl text-black'>New Users</h4>
              </div>

              <div className='-mb-6 flex flex-1 items-end justify-center'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-9.png'
                  alt='Businesswoman'
                  className='h-80 w-auto object-cover'
                />
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        <div className='grid grid-rows-2 gap-6'>
          {/* Card 5: Logo */}
          <MotionPreset fade blur zoom={{ initialScale: 0.9 }} delay={1} transition={{ duration: 0.5 }}>
            <Card className='bg-primary/30 h-full justify-center border-0 shadow-none max-md:h-58'>
              <CardContent className='flex justify-center px-0'>
                <a href='#' className='flex items-center gap-3'>
                  <Logo className='size-13.5' />
                  <h2 className='text-[2rem] leading-[2.375rem] font-semibold'>shadcn/studio</h2>
                </a>
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Card 6: Vision */}
          <MotionPreset fade blur zoom={{ initialScale: 0.9 }} delay={1.2} transition={{ duration: 0.5 }}>
            <Card className='bg-muted h-full justify-center border-0 shadow-none max-md:h-58'>
              <CardContent className='flex flex-col items-center gap-4 text-center'>
                <h3 className='text-3xl font-semibold'>We Build Future of Design industry</h3>
                <h4 className='text-muted-foreground text-xl'>Crafting meaningful UI/UX Design</h4>
              </CardContent>
            </Card>
          </MotionPreset>
        </div>

        {/* Card 7: Engagement Rate */}
        <MotionPreset fade blur zoom={{ initialScale: 0.9 }} delay={1.4} transition={{ duration: 0.5 }}>
          <Card className='bg-muted h-full border-0 shadow-none max-lg:col-span-full'>
            <CardContent className='flex h-full flex-col justify-between gap-6'>
              {/* Area Chart */}
              <AreaGradientChart />

              <div className='flex flex-col items-center'>
                <h3 className='text-5xl leading-14 font-bold'>19.46%</h3>
                <h4 className='text-muted-foreground text-xl'>Engagement Rate</h4>
              </div>

              <div className='flex items-center justify-center gap-1.5 text-green-600 dark:text-green-400'>
                <ArrowUpIcon className='size-6' />
                <span className='text-2xl font-semibold'>102.48%</span>
              </div>
            </CardContent>
          </Card>
        </MotionPreset>
      </div>
    </section>
  )
}

export default BentoGrid
