'use client'

import { useEffect, useRef, useState } from 'react'

import Autoplay from 'embla-carousel-autoplay'

import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'

import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'

type GalleryImage = {
  src: string
  alt: string
}

const Gallery = ({ galleryImages }: { galleryImages: GalleryImage[] }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  // Sync carousel with thumbnail selection
  useEffect(() => {
    if (!api) return

    api.scrollTo(selectedImage)
  }, [api, selectedImage])

  // Update selectedImage when carousel changes
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedImage(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect()

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            Window Into Our Work
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Explore a collection of visuals that highlight our best work, milestones, and creative moments.
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.6} transition={{ duration: 0.5 }}>
            <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6' asChild>
              <a href='#'>
                See all
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </MotionPreset>
        </div>

        {/* Gallery Carousel */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.9} transition={{ duration: 0.5 }}>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
            <div className='flex gap-2.5 md:flex-col'>
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'overflow-hidden rounded-lg transition-all duration-200',
                    selectedImage === index ? 'opacity-100' : 'opacity-50'
                  )}
                >
                  <img src={image.src} alt={image.alt} className='h-25 w-full object-cover md:h-30' />
                </button>
              ))}
            </div>

            <div className='md:col-span-3'>
              <Carousel
                className='w-full'
                setApi={setApi}
                plugins={[plugin.current]}
                opts={{
                  align: 'start',
                  loop: true
                }}
              >
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className='h-50 overflow-hidden rounded-lg bg-gray-100 md:h-95'>
                        <img src={image.src} alt={image.alt} className='h-full w-full object-cover' />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className='left-4' />
                <CarouselNext className='right-4' />
              </Carousel>
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default Gallery
