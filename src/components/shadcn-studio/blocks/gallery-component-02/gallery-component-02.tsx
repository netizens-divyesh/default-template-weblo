import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import GalleryContent from '@/components/shadcn-studio/blocks/gallery-component-02/gallery-content'

type GalleryItem = {
  src: string
  title: string
}

type GalleryTab = {
  name: string
  value: string
  items: GalleryItem[]
}

const Gallery = ({ tabs }: { tabs: GalleryTab[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Explore Our Visual Story</h2>
          <p className='text-muted-foreground text-xl'>
            A stunning collection of moments, creativity, and innovation captured in our gallery.
          </p>
        </div>

        {/* Tabs with Gallery */}
        <div className='w-full'>
          <Tabs defaultValue='home' className='gap-6'>
            <TabsList className='bg-background self-center rounded-none border-b p-0'>
              {tabs.map(tab => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className='bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary dark:data-[state=active]:bg-background h-full rounded-none border-0 border-b-2 border-transparent data-[state=active]:shadow-none!'
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map(tab => (
              <TabsContent key={tab.value} value={tab.value}>
                <GalleryContent gallery={tab.items} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Gallery
