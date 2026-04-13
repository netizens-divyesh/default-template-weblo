import { FileInputIcon } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Orbiting } from '@/components/ui/orbiting'
import InstallViaCLI from '@/components/shadcn-studio/blocks/bento-grid-22/install-via-cli'
import MotionAnimations from '@/components/shadcn-studio/blocks/bento-grid-22/motion-animations'
import TweetStack from '@/components/shadcn-studio/blocks/bento-grid-22/tweet-stack'

import Logo from '@/assets/svg/logo'

const BentoGrid = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-3 lg:grid-cols-5'>
          {/* Seamless Integration Card */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            transition={{ duration: 0.45 }}
            className='bg-card relative flex gap-6 overflow-hidden rounded-xl max-md:flex-col max-md:items-center max-md:pt-6 lg:col-span-3'
          >
            <div className='flex flex-col gap-3.5 self-center px-6'>
              <h3 className='text-xl font-semibold'>Seamless Integration with any React stack</h3>
              <p className='text-muted-foreground'>
                Effortlessly integrate our shadcn/ui components, blocks, templates, and themes into any React.js stack
                for a streamlined and efficient development experience.
              </p>
            </div>

            <div className='h-74'>
              <div className='relative flex size-82 shrink-0 flex-col items-center justify-center'>
                <Orbiting radius={163} duration={30} dashed={true} dashedGap={10}>
                  <div className='flex size-9 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/remix-icon.png?width=32&format=auto'
                      alt='Remix Logo'
                      className='size-8'
                    />
                  </div>
                  <div className='flex size-10 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/nextjs-logo.png?width=28&format=auto'
                      alt='Next.js Logo'
                      className='size-7'
                    />
                  </div>
                  <div className='flex size-8 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/astro-icon.png?width=22&format=auto'
                      alt='Astro Logo'
                      className='size-5.5'
                    />
                  </div>
                  <div className='flex size-11.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/laravel-icon.png?width=25&format=auto'
                      alt='Laravel Logo'
                      className='size-6.25'
                    />
                  </div>
                  <div className='flex size-8 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/vite-logo.png?width=20&format=auto'
                      alt='Vite Logo'
                      className='size-5'
                    />
                  </div>
                  <div className='flex size-11.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/gatsby-icon.png?width=32&format=auto'
                      alt='Gatsby Logo'
                      className='size-8'
                    />
                  </div>
                </Orbiting>
                <Orbiting radius={96} duration={30} reverse speed={2} dashed={true} dashedGap={10}>
                  <div className='flex size-11.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/react-query-icon.png?width=34&format=auto'
                      alt='React Query Logo'
                      className='size-8.5'
                    />
                  </div>
                  <div className='flex size-9 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/react-router-icon.png?width=26&format=auto'
                      alt='React Router Logo'
                      className='size-6.5'
                    />
                  </div>
                  <div className='flex size-9.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/Inertia-icon.png?width=24&format=auto'
                      alt='Inertia Logo'
                      className='size-6'
                    />
                  </div>
                </Orbiting>

                <Logo className='absolute top-1/2 left-1/2 size-11.5 -translate-x-1/2 -translate-y-1/2' />
              </div>
            </div>

            <div className='from-card absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l to-transparent max-sm:hidden' />
            <div className='from-card absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t to-transparent sm:hidden' />
          </MotionPreset>

          {/* Code Ownership Card */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            delay={0.2}
            transition={{ duration: 0.45 }}
            className='bg-card relative flex flex-col gap-0.75 overflow-hidden rounded-xl lg:col-span-2'
          >
            <div className='flex flex-col gap-3.5 px-6 pt-6'>
              <h3 className='text-xl font-semibold'>Complete Code Ownership</h3>
              <p className='text-muted-foreground'>
                No hidden dependencies or vendor lock-in. Use trusted npm packages, install via CLI or copy-paste, and
                own your codebase.
              </p>
            </div>

            <TweetStack />
          </MotionPreset>
        </div>

        <div className='grid gap-3 md:grid-cols-6'>
          {/* Stunning Animations Card */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            delay={0.4}
            transition={{ duration: 0.45 }}
            className='bg-card relative flex flex-col gap-13 overflow-hidden rounded-xl pt-6 pb-13 md:col-span-3 xl:col-span-2'
          >
            <div className='flex flex-col gap-3.5 px-6'>
              <h3 className='text-xl font-semibold'>Stunning Animations with Motion</h3>
              <p className='text-muted-foreground'>
                Bring your user interfaces to life with creative, beautifully crafted motion components, blocks, and
                templates.
              </p>
            </div>

            <div className='relative flex min-h-34.5 flex-1 items-center justify-center'>
              <div className='bg-border absolute inset-x-4 top-0 h-px' />
              <div className='bg-border absolute inset-x-4 top-1/2 h-px' />
              <div className='bg-border absolute inset-x-4 bottom-0 h-px' />
              <MotionAnimations />
              <div className='from-card absolute -inset-y-6 left-0 w-[15%] bg-gradient-to-r to-transparent' />
              <div className='from-card absolute -inset-y-6 right-0 w-[15%] bg-gradient-to-l to-transparent' />
            </div>
          </MotionPreset>

          {/* Components, Blocks & Templates Card */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            delay={0.6}
            transition={{ duration: 0.45 }}
            className='bg-card relative flex flex-col gap-6 overflow-hidden rounded-xl md:col-span-3 xl:col-span-2'
          >
            <div className='flex flex-col gap-3.5 px-6 pt-6'>
              <h3 className='text-xl font-semibold'>Component, Blocks & Templates</h3>
              <p className='text-muted-foreground'>
                A comprehensive, fully customizable library of component variants, blocks, & templates to speed up
                development.
              </p>
            </div>

            <div className='relative flex h-42.5 items-start justify-center px-4'>
              <MotionPreset
                component='img'
                fade
                zoom={{ initialScale: 0.8 }}
                slide={{ direction: 'down', offset: 50 }}
                delay={1.4}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                motionProps={{
                  src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-113.png?width=365&format=auto',
                  alt: 'eCommerce UI Blocks'
                }}
                className='absolute max-w-92 rounded-md rounded-b-none border border-b-0 max-md:max-w-82 dark:hidden'
              />
              <MotionPreset
                component='img'
                fade
                zoom={{ initialScale: 0.8 }}
                slide={{ direction: 'down', offset: 50 }}
                delay={1.4}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                motionProps={{
                  src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-113-dark.png?width=365&format=auto',
                  alt: 'eCommerce UI Blocks'
                }}
                className='absolute hidden max-w-92 rounded-md border dark:inline-block'
              />
              <MotionPreset
                component='img'
                fade
                slide
                delay={1.6}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                motionProps={{
                  src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/features-block-2-light.png?width=127&format=auto',
                  alt: 'eCommerce UI Blocks'
                }}
                className='absolute bottom-2 left-3 max-w-28.5 -rotate-12 rounded-sm shadow-lg max-md:left-0 dark:hidden'
              />
              <MotionPreset
                component='img'
                fade
                slide
                delay={1.6}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                motionProps={{
                  src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/features-block-2-dark.png?width=127&format=auto',
                  alt: 'eCommerce UI Blocks'
                }}
                className='absolute bottom-2 left-3 hidden max-w-28.5 -rotate-12 rounded-sm shadow-lg max-md:left-0 dark:inline-block'
              />
              <MotionPreset
                component='img'
                fade
                slide={{ direction: 'right' }}
                delay={1.6}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                motionProps={{
                  src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/features-block-3-light.png?width=104&format=auto',
                  alt: 'eCommerce UI Blocks'
                }}
                className='absolute right-3 bottom-3 max-w-23.5 rotate-12 rounded-sm shadow-lg max-md:right-0 dark:hidden'
              />
              <MotionPreset
                component='img'
                fade
                slide={{ direction: 'right' }}
                delay={1.6}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                motionProps={{
                  src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/features-block-3-dark.png?width=104&format=auto',
                  alt: 'eCommerce UI Blocks'
                }}
                className='absolute right-3 bottom-3 hidden max-w-23.5 rotate-12 rounded-sm shadow-lg max-md:right-0 dark:inline-block'
              />
            </div>
          </MotionPreset>

          {/* Install via CLI Card */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            delay={0.8}
            transition={{ duration: 0.45 }}
            className='bg-card flex flex-col gap-13 overflow-hidden rounded-xl py-6 md:col-span-full xl:col-span-2'
          >
            <div className='flex flex-col gap-3.5 px-6'>
              <h3 className='text-xl font-semibold'>Install via CLI or just copy-paste</h3>
              <p className='text-muted-foreground'>
                Easily install anything into your app - Use CLI or simply copy-paste components, blocks, themes, &
                boilerplates directly into your project.
              </p>
            </div>

            <div className='flex h-35 items-center px-3'>
              <div className='bg-background flex items-center gap-1.25 rounded-lg border px-2 py-1.5'>
                <Logo className='size-6' />
                <span className='font-medium'>Blocks</span>
              </div>
              <InstallViaCLI />
              <span className='text-muted-foreground flex flex-col items-center gap-0.5'>
                <FileInputIcon className='size-5' />
                <span className='text-sm font-medium'>Project</span>
              </span>
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
