import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { MotionPreset } from '@/components/ui/motion-preset'

const HeroSection = () => {
  return (
    <section className='flex flex-1 flex-col overflow-hidden pt-8 sm:pt-16 lg:pt-24'>
      <div className='mx-auto flex max-w-7xl flex-1 flex-col items-center justify-between gap-8 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'>
        {/* Hero Content */}
        <div className='flex flex-col items-center gap-6 text-center'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <MotionPreset
              component='h1'
              fade
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='text-2xl font-semibold sm:text-3xl lg:text-5xl lg:font-bold'
            >
              The Smarter Way to Market Your Business
            </MotionPreset>
            <MotionPreset
              component='p'
              fade
              slide={{ direction: 'down', offset: 50 }}
              delay={0.3}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='text-muted-foreground max-w-4xl text-xl'
            >
              Access everything you need to manage, automate, and optimize your marketing in one place, so you can focus
              on growing your business with confidence.
            </MotionPreset>
          </div>

          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex flex-wrap items-center gap-4'
          >
            <div className='bg-background flex h-fit w-full max-w-100 items-center justify-between gap-2.5 rounded-full border p-2 ps-4 shadow-lg'>
              <Label className='sr-only' htmlFor='prompt-space'>
                Enter your email
              </Label>
              <Input
                type='text'
                placeholder='Enter your email'
                id='prompt-space'
                className='placeholder:text-muted-foreground h-6 border-0 bg-transparent p-0 shadow-none focus:border-0 focus:ring-0 focus-visible:ring-0 dark:bg-transparent'
              />

              <Button
                type='submit'
                className='relative w-fit overflow-hidden rounded-full text-sm before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
              >
                Get Started
              </Button>
            </div>
          </MotionPreset>
        </div>

        <MotionPreset
          component='img'
          fade
          blur
          slide={{ direction: 'down' }}
          delay={0.9}
          transition={{ duration: 0.5 }}
          motionProps={{
            src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-62.png',
            alt: 'Mobile Phone'
          }}
          className='mx-auto md:w-9/10'
        />
      </div>
    </section>
  )
}

export default HeroSection
