import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

type GalleryImage = {
  src: string
  alt: string
  className?: string
}

const Gallery = ({ GalleryImage }: { GalleryImage: GalleryImage[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex gap-12 max-lg:flex-col sm:gap-16 lg:items-center lg:gap-24'>
          {/* Left Content */}
          <div className='min-w-xs grow space-y-4'>
            <p className='text-primary text-sm font-medium uppercase'>Gallery</p>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Our Story in Pictures</h2>
            <p className='text-muted-foreground text-xl'>
              Every image tells a story—explore our gallery to see our journey unfold
            </p>
            <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6'>
              See all
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          </div>

          {/* Right Gallery Grid */}
          <div className='grid grid-cols-2 gap-6 md:grid-cols-3'>
            {GalleryImage.map((image, index) => (
              <div key={index} className={cn('overflow-hidden rounded-lg', image.className)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
