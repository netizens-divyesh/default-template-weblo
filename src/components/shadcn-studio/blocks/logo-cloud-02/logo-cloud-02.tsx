import { cn } from '@/lib/utils'

type Logos = {
  name: string
  logo: string
}

const LogoCloud = ({ logos }: { logos: Logos[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>You&apos;re in great company!</h2>
          <p className='text-muted-foreground text-xl'>
            Join thousands of innovative brands making an impact worldwide.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={cn('flex max-h-8 items-center justify-center px-9 py-11', {
                'lg:border-r': index % 5 !== 4,
                'lg:border-b': index < 10,
                'md:max-lg:border-r': index % 3 !== 2,
                'md:max-lg:border-b': index < 12,
                'sm:max-md:border-r': index % 2 !== 1,
                'sm:max-md:border-b': index < 14,
                'max-sm:border-b': index < logos.length - 1
              })}
            >
              <img src={logo.logo} alt={logo.name} className='max-h-8' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
