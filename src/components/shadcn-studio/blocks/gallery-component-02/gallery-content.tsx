import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

type Gallery = {
  src: string
  title: string
}

const GalleryContent = ({ gallery }: { gallery: Gallery[] }) => {
  return (
    <Carousel className='w-full'>
      <CarouselContent className='-ml-6'>
        {gallery.map((item, index) => (
          <CarouselItem key={index} className='cursor-grab pl-6 sm:basis-1/2 lg:basis-1/3'>
            <Card className='group relative h-77 overflow-hidden rounded-lg border-none py-0 shadow-none'>
              <img
                src={item.src}
                alt={item.title}
                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <CardContent className='absolute inset-x-0 bottom-0 bg-linear-to-b from-transparent to-black/75 pt-25 pb-6'>
                <h3 className='text-xl font-semibold text-white'>{item.title}</h3>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className='mt-12 flex items-center justify-center gap-4 sm:mt-16 lg:mt-24'>
        <CarouselPrevious
          variant='default'
          className='disabled:text-primary static size-10 translate-y-0 disabled:bg-transparent disabled:opacity-100 disabled:shadow-none'
        />
        <CarouselNext
          variant='default'
          className='disabled:text-primary static size-10 translate-y-0 disabled:bg-transparent disabled:opacity-100 disabled:shadow-none'
        />
      </div>
    </Carousel>
  )
}

export default GalleryContent
