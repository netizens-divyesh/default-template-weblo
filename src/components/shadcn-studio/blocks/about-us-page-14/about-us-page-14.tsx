import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { RippleButton } from '@/components/ui/ripple-button'
import { MotionPreset } from '@/components/ui/motion-preset'

import SemiCircleSVG from '@/components/shadcn-studio/blocks/about-us-page-14/semi-circle-svg'

const AboutUs = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 overflow-hidden px-4 sm:px-6 md:space-y-16 lg:space-y-24 lg:px-8'>
        {/* Header */}
        <div className='space-y-4 text-center'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              About Us
            </Badge>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.2} transition={{ duration: 0.5 }}>
            <h2 className='mx-auto max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl'>
              Creating Impact Through People, Ideas, and Purpose
            </h2>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.4} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground text-xl'>
              We&apos;re a passionate team united by a common goal - to create meaningful solutions that make a real
              impact.
            </p>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.6} transition={{ duration: 0.5 }}>
            <div className='flex justify-center gap-4'>
              <RippleButton size='lg' className='rounded-lg text-base has-[>svg]:px-6'>
                Read More
                <ArrowRightIcon />
              </RippleButton>
              <Button size='lg' variant='outline' className='group rounded-lg text-base shadow-none' asChild>
                <a href='#'>Free trial</a>
              </Button>
            </div>
          </MotionPreset>
        </div>

        <div className='flex items-center justify-center'>
          <MotionPreset
            fade
            zoom
            blur
            delay={0.8}
            transition={{ duration: 0.5 }}
            className='peer z-1 order-2 -mx-4 basis-3/5 rounded-full sm:-mx-6 sm:basis-3/5 md:-mx-8 lg:-mx-10'
          >
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-32.png'
              alt='Our Mission'
              className='size-full rounded-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </MotionPreset>

          <div className='-z-1 order-1 flex flex-1 basis-1/6 items-center *:transition-transform *:duration-500 peer-hover:*:-translate-x-8 *:first:delay-200 *:nth-[2]:delay-100 sm:basis-1/5'>
            <div className='basis-1/4'>
              <MotionPreset fade slide={{ direction: 'right', offset: 150 }} delay={1.3} transition={{ duration: 0.6 }}>
                <SemiCircleSVG className='size-full opacity-10' />
              </MotionPreset>
            </div>

            <div className='basis-1/3'>
              <MotionPreset fade slide={{ direction: 'right', offset: 150 }} delay={1.2} transition={{ duration: 0.6 }}>
                <SemiCircleSVG className='size-full opacity-20' />
              </MotionPreset>
            </div>

            <div className='basis-5/12'>
              <MotionPreset fade slide={{ direction: 'right', offset: 150 }} delay={1.1} transition={{ duration: 0.6 }}>
                <SemiCircleSVG className='size-full opacity-30' />
              </MotionPreset>
            </div>
          </div>

          <div className='-z-1 order-3 flex flex-1 basis-1/6 items-center *:transition-transform *:duration-500 peer-hover:*:translate-x-8 *:last:delay-200 *:nth-[2]:delay-100 sm:basis-1/5'>
            <div className='basis-5/12'>
              <MotionPreset fade slide={{ offset: 150 }} delay={1.1} transition={{ duration: 0.6 }}>
                <SemiCircleSVG className='size-full rotate-180 opacity-30' />
              </MotionPreset>
            </div>
            <div className='basis-1/3'>
              <MotionPreset fade slide={{ offset: 150 }} delay={1.2} transition={{ duration: 0.6 }}>
                <SemiCircleSVG className='size-full rotate-180 opacity-20' />
              </MotionPreset>
            </div>
            <div className='basis-1/4'>
              <MotionPreset fade slide={{ offset: 150 }} delay={1.3} transition={{ duration: 0.6 }}>
                <SemiCircleSVG className='size-full rotate-180 opacity-10' />
              </MotionPreset>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
