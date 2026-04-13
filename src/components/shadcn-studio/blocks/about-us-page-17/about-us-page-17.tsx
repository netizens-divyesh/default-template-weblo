import { motion } from 'motion/react'

import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'
import { SpinningText } from '@/components/shadcn-studio/blocks/spinning-text'

import Logo from '@/assets/svg/logo'

const AboutUs = ({ features }: { features: string[] }) => {
  return (
    <section className='bg-muted overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 max-w-6xl space-y-4 text-center md:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            transition={{ duration: 0.7 }}
          >
            About us
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='mx-auto max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.25}
            transition={{ duration: 0.7 }}
          >
            A Shared Vision, Strong Values, and a Team Committed to Meaningful Impact
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground mx-auto max-w-4xl text-xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.7 }}
          >
            Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced
            challenges, celebrated victories, and woven a narrative of growth and success.
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-5'>
          {/* Column 1 */}
          <div className='flex flex-col gap-7 lg:max-xl:lg:col-span-2'>
            <div className='flex flex-col gap-3.5'>
              {features.map((feature, index) => (
                <MotionPreset
                  key={index}
                  className='bg-primary/10 flex h-10 w-fit items-center justify-center rounded-full px-4'
                  fade
                  blur
                  slide={{ direction: 'up', offset: 30 }}
                  delay={0.75 + 0.15 * index}
                  transition={{ duration: 0.5 }}
                >
                  <div className='line-clamp-1'>{feature}</div>
                </MotionPreset>
              ))}
            </div>

            <MotionPreset
              className='flex w-fit flex-col gap-2 rounded-md border p-4'
              fade
              blur
              slide={{ direction: 'up', offset: 30 }}
              delay={1.4}
              transition={{ duration: 0.5 }}
            >
              <h4 className='text-3xl font-medium'>123+</h4>
              <p className='text-muted-foreground text-sm'>Qualified Workers</p>
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: 'up', offset: 30 }} delay={1.6} transition={{ duration: 0.5 }}>
              <Button className='group w-fit' asChild>
                <a href='#'>
                  Read more
                  <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                </a>
              </Button>
            </MotionPreset>
          </div>

          {/* Column 2 */}
          <div className='flex h-fit flex-col gap-4 md:col-span-2 lg:col-span-3 xl:col-span-2'>
            <MotionPreset
              className='flex-1'
              fade
              blur
              slide={{ direction: 'up', offset: 40 }}
              delay={0.75}
              transition={{ duration: 0.7 }}
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-25.png'
                alt='Our Mission'
                className='h-full max-h-51 w-full rounded-3xl object-cover'
              />
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: 'up', offset: 40 }} delay={1} transition={{ duration: 0.7 }}>
              <Card className='group bg-primary text-primary-foreground relative overflow-hidden rounded-3xl'>
                <CardContent className='flex flex-col gap-6'>
                  <div className='flex justify-between'>
                    <CardTitle className='text-2xl'>
                      Meet Our <br /> Expert
                    </CardTitle>
                    <ArrowRightIcon className='size-8 transition-transform duration-200 group-hover:-rotate-25' />
                  </div>
                  <div>
                    <Button
                      size='sm'
                      className='bg-background text-foreground hover:bg-background/80 focus-visible:ring-background/20 rounded-full'
                    >
                      View All Details
                    </Button>
                  </div>
                </CardContent>

                <div className='absolute -right-10 -bottom-40'>
                  <svg width='370' height='341' viewBox='0 0 370 341' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <motion.path
                      opacity='0.5'
                      d='M338.59 147.363L333.114 141.826C292.632 100.892 226.008 109.532 199.169 159.196C183.092 189.7 152.337 209.032 118.025 210.201L7.4302 213.968'
                      stroke='white'
                      strokeWidth='15'
                      strokeLinecap='round'
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{
                        pathLength: {
                          duration: 2,
                          ease: 'easeInOut',
                          delay: 1.3
                        },
                        opacity: { duration: 0.5, delay: 1.3 }
                      }}
                    />
                    <motion.path
                      opacity='0.5'
                      d='M350.681 201.315L340.803 191.212C300.657 150.152 232.733 157.190 201.858 205.608C183.856 234.532 151.167 250.933 117.219 248.072L21.8408 240.035'
                      stroke='white'
                      strokeWidth='15'
                      strokeLinecap='round'
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{
                        pathLength: {
                          duration: 2,
                          ease: 'easeInOut',
                          delay: 1.6
                        },
                        opacity: { duration: 0.5, delay: 1.6 }
                      }}
                    />
                  </svg>
                </div>
              </Card>
            </MotionPreset>
          </div>

          {/* Column 3 */}
          <MotionPreset
            className='relative md:col-span-3 lg:col-span-3 xl:col-span-2'
            fade
            blur
            slide={{ direction: 'up', offset: 40 }}
            delay={0.9}
            transition={{ duration: 0.6 }}
          >
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-26.png'
              alt='Our Mission'
              className='h-full max-h-100 w-full rounded-3xl object-cover'
            />
            <div className='bg-muted absolute -right-8 -bottom-8 rounded-full p-9 max-sm:scale-80 sm:-right-6 sm:-bottom-6'>
              <div className='relative'>
                <div className='border-foreground outline-foreground flex size-21 items-center justify-center rounded-full border outline outline-offset-23'>
                  <Logo className='z-10 size-8' />
                </div>
                <div className='absolute inset-0 translate-y-1/2'>
                  <SpinningText className='z-10' radius={5}>
                    Contact Us Contact Us Contact Us
                  </SpinningText>
                </div>
              </div>
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
