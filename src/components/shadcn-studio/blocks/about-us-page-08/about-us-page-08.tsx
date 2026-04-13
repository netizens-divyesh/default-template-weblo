import type { ComponentType } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type StatCard = {
  icon: ComponentType
  number: string
  label: string
}[]

const AboutUs = ({ stats }: { stats: StatCard }) => {
  return (
    <section className='bg-muted overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-16 lg:grid-cols-2 xl:gap-24'>
          {/* Left Column - Image */}
          <div className='relative z-1 h-max w-full'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-5.png'
              alt='About us image'
              className='max-h-128 w-full rounded-lg object-contain dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-5-dark.png'
              alt='About us image'
              className='hidden max-h-128 w-full rounded-lg object-contain dark:inline-block'
            />

            <span className='bg-primary/10 absolute top-1/2 left-1/2 -z-1 size-75 -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-125' />

            {/* Decorative dots */}
            <svg
              width='51'
              height='57'
              viewBox='0 0 51 57'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute bottom-5 left-20 -z-1 opacity-20 max-lg:hidden'
            >
              <g>
                {/* Primary colored dots pattern */}
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 7 }).map((_, col) => (
                    <ellipse
                      key={`${row}-${col}`}
                      cx='2.5'
                      cy='2.5'
                      rx='2.5'
                      ry='2.5'
                      transform={`translate(${5 + col * 7}, ${4 + row * 6})`}
                      fill='var(--primary)'
                      fillOpacity='0.5'
                    />
                  ))
                )}
              </g>
            </svg>

            <svg
              width='51'
              height='57'
              viewBox='0 0 51 57'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute right-6 -bottom-6 -z-1 opacity-20 max-lg:hidden'
            >
              <g>
                {/* Primary colored dots pattern */}
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 7 }).map((_, col) => (
                    <ellipse
                      key={`${row}-${col}`}
                      cx='2.5'
                      cy='2.5'
                      rx='2.5'
                      ry='2.5'
                      transform={`translate(${5 + col * 7}, ${4 + row * 6})`}
                      fill='var(--primary)'
                      fillOpacity='0.5'
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          {/* Right Column - Content */}
          <div className='flex flex-col justify-between gap-10'>
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>The Adventure of Our Success</h2>
              <p className='text-muted-foreground text-xl'>
                Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced
                challenges, celebrated victories, and woven a narrative of growth and success.
              </p>
            </div>

            {/* Stats */}
            <div className='grid gap-6 sm:grid-cols-2'>
              {stats.map((stat, index) => (
                <Card key={index} className='border-none shadow-none transition-shadow duration-300 hover:shadow-sm'>
                  <CardContent className='flex flex-row flex-wrap items-center gap-5'>
                    <Avatar className='size-11'>
                      <AvatarFallback className='[&>svg]:size-7'>
                        <stat.icon />
                      </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col gap-0.5'>
                      <span className='text-foreground text-3xl font-semibold'>{stat.number}</span>
                      <span className='text-muted-foreground font-medium'>{stat.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <Button asChild size='lg' className='rounded-lg text-base max-md:w-full'>
                <a href='#'>Start Free Trial</a>
              </Button>

              <Button variant='outline' asChild size='lg' className='rounded-lg text-base max-md:w-full'>
                <a href='#'>Watch Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
