'use client'

import { useEffect, useState } from 'react'

import { PackageIcon, DollarSignIcon, HeadphonesIcon, HomeIcon, WrenchIcon, MonitorCogIcon } from 'lucide-react'

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

export type FAQItem = {
  icon: string
  title: string
  description: string
}

type FAQComponentProps = {
  faqItems: FAQItem[]
}

const iconComponents = {
  PackageIcon,
  DollarSignIcon,
  HeadphonesIcon,
  HomeIcon,
  WrenchIcon,
  MonitorCogIcon
}

const FAQ = ({ faqItems }: FAQComponentProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
          loop: true
        }}
        className='space-y-12 md:space-y-16 lg:space-y-24'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Header Content */}
          <MotionPreset
            fade
            slide={{ direction: 'left', offset: 30 }}
            transition={{ duration: 0.6 }}
            className='flex flex-wrap items-end justify-between gap-4'
          >
            <div className='space-y-4'>
              <div className='text-primary text-sm font-medium uppercase'>FAQS</div>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Your Questions Answered</h2>
              <p className='text-muted-foreground text-xl'>
                Find answers to the most commonly asked questions about our services and offerings.
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <CarouselPrevious
                variant='secondary'
                className='disabled:bg-primary/10 disabled:text-primary hover:bg-primary hover:text-primary-foreground static size-10 translate-y-0 rounded-full disabled:opacity-100'
              />
              <CarouselNext
                variant='secondary'
                className='disabled:bg-primary/10 disabled:text-primary hover:bg-primary hover:text-primary-foreground static size-10 translate-y-0 rounded-full disabled:opacity-100'
              />
            </div>
          </MotionPreset>
        </div>

        {/* FAQ Carousel */}
        <MotionPreset
          fade
          slide={{ direction: 'left', offset: 50 }}
          delay={0.3}
          transition={{ duration: 0.8 }}
          className='before:from-background after:from-background relative before:top-0 before:left-0 before:z-10 before:h-full before:w-30 before:bg-gradient-to-r before:to-transparent after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-30 after:bg-gradient-to-l after:to-transparent max-md:before:hidden max-md:after:hidden md:before:absolute'
        >
          {/* Carousel Content */}
          <CarouselContent className='ml-0'>
            {faqItems.map((item, index) => {
              const IconComponent = iconComponents[item.icon as keyof typeof iconComponents]
              const isActive = current === index

              return (
                <CarouselItem
                  key={index}
                  className='cursor-grab max-md:px-4 md:basis-1/2 md:pl-6 lg:basis-1/3 lg:max-xl:px-3 xl:basis-1/4 xl:pl-6'
                >
                  <Card
                    className={cn('h-full rounded-lg border-none shadow-none transition-all duration-300', {
                      'bg-primary text-primary-foreground': isActive,
                      'bg-primary/10 justify-between': !isActive
                    })}
                    onClick={() => api?.scrollTo(index)}
                  >
                    <CardHeader className='gap-0'>
                      {IconComponent && (
                        <Badge
                          className={cn('size-12 [&>svg]:size-5', {
                            'bg-background/10 text-primary-foreground': isActive,
                            'bg-primary/10 text-primary': !isActive
                          })}
                        >
                          <IconComponent />
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className='space-y-6'>
                      {isActive ? (
                        <MotionPreset
                          component='h3'
                          key={`title-${index}`}
                          fade
                          slide={{ direction: 'down', offset: 30 }}
                          delay={0.1 + index * 0.1}
                          transition={{ duration: 0.5 }}
                          className='text-2xl leading-tight font-semibold lg:text-3xl'
                        >
                          {item.title}
                        </MotionPreset>
                      ) : (
                        <h3 className='text-2xl leading-tight lg:text-3xl'>{item.title}</h3>
                      )}
                      {isActive && (
                        <MotionPreset
                          component='p'
                          key={`desc-${index}`}
                          fade
                          slide={{ direction: 'down', offset: 30 }}
                          delay={0.3 + index * 0.1}
                          transition={{ duration: 0.6 }}
                          className='text-sm'
                        >
                          {item.description}
                        </MotionPreset>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </MotionPreset>
      </Carousel>
    </section>
  )
}

export default FAQ
