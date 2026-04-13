import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-12/contact-form'

import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type Avatar = {
  src: string
  fallback: string
  name: string
}

const ContactUs = ({ avatars }: { avatars: Avatar[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-12 space-y-4 text-center'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium tracking-wider uppercase'
            fade
            slide={{ direction: 'down', offset: 30 }}
            blur
            transition={{ duration: 0.4 }}
          >
            Contact Us
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            delay={0.1}
            transition={{ duration: 0.5 }}
          >
            Stay Connected with Us
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            delay={0.2}
            transition={{ duration: 0.5 }}
          >
            Reach out for inquiries, support, or collaboration—we&apos;d love to hear from you!
          </MotionPreset>
        </div>

        {/* Main Content */}
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-4 xl:gap-24'>
          {/* Left Side - Form */}
          <MotionPreset fade slide={{ direction: 'left', offset: 100 }} blur delay={0.4} transition={{ duration: 0.6 }}>
            <Card className='border shadow-sm'>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Right Side - Image with Avatars */}
          <MotionPreset
            fade
            slide={{ direction: 'right', offset: 100 }}
            blur
            delay={0.6}
            transition={{ duration: 0.6 }}
            className='relative'
          >
            <div className='relative'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-13.png'
                alt='Modern office space'
                className='w-full rounded-2xl object-cover'
              />

              {/* Avatar Group Overlay */}
              <div className='absolute right-0 bottom-0 space-y-1 max-sm:hidden md:right-8 md:bottom-4 lg:right-0 lg:bottom-0 xl:right-3 xl:bottom-1'>
                <div className='flex -space-x-2 lg:-space-x-3 xl:-space-x-2'>
                  {avatars.map((avatar, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Avatar className='ring-background size-8 ring-2 transition-all duration-300 ease-in-out hover:z-10 hover:-translate-y-1 hover:shadow-md'>
                          <AvatarImage src={avatar.src} alt={avatar.name} />
                          <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>{avatar.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>

                <div className='flex gap-2 text-sm'>
                  <span className='font-medium'>20+</span>
                  <span className='text-muted-foreground'>Daily New Clients</span>
                </div>
              </div>
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
