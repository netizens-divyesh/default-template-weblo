import { PhoneIcon, MailIcon } from 'lucide-react'

import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-15/contact-form'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type ContactInfo = {
  phone: string
  email: string
}

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-9 lg:grid-cols-2'>
          {/* Left Side - Header and Form */}
          <div className='flex flex-col justify-between gap-8 lg:gap-12'>
            {/* Header Section */}
            <div className='space-y-4'>
              <MotionPreset
                component='p'
                className='text-primary text-sm font-medium tracking-wider'
                fade
                slide={{ direction: 'right', offset: 30 }}
                blur
                transition={{ duration: 0.4 }}
              >
                <Badge variant='outline' className='text-sm font-normal'>
                  Contact Us
                </Badge>
              </MotionPreset>

              <MotionPreset
                component='h2'
                className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                fade
                slide={{ direction: 'right', offset: 50 }}
                blur
                delay={0.1}
                transition={{ duration: 0.5 }}
              >
                Connect With Us
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-muted-foreground text-xl'
                fade
                slide={{ direction: 'right', offset: 50 }}
                blur
                delay={0.2}
                transition={{ duration: 0.5 }}
              >
                Whether you&apos;re looking for more information, have a suggestion, or need help with something,
                we&apos;re here for you.
              </MotionPreset>
            </div>

            {/* Form */}
            <MotionPreset
              fade
              slide={{ direction: 'right', offset: 80 }}
              blur
              delay={0.4}
              transition={{ duration: 0.6 }}
            >
              <Card className='border shadow-sm'>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </MotionPreset>
          </div>

          {/* Right Side - Image and Contact Info */}
          <div className='space-y-5'>
            {/* Image */}
            <MotionPreset fade slide={{ direction: 'up', offset: 100 }} blur delay={0.6} transition={{ duration: 0.7 }}>
              <div>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-14.png'
                  alt='Woman with phone'
                  className='w-full rounded-md object-cover dark:hidden'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-14-dark.png'
                  alt='Woman with phone'
                  className='hidden w-full rounded-md object-cover dark:block'
                />
              </div>
            </MotionPreset>

            {/* Contact Information */}
            <MotionPreset fade slide={{ direction: 'up', offset: 60 }} blur delay={0.8} transition={{ duration: 0.6 }}>
              <div className='space-y-4 rounded-md border p-4'>
                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone}`}
                  className='bg-muted hover:bg-muted-foreground/30 flex items-center gap-4 rounded-md px-6 py-4 transition-all duration-300'
                >
                  <Avatar className='size-10 shrink-0'>
                    <AvatarFallback className='bg-primary/10 [&>svg]:size-5'>
                      <PhoneIcon />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className='text-lg font-medium'>Phone</h3>
                    <p className='text-muted-foreground'>{contactInfo.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='bg-muted hover:bg-muted-foreground/30 flex items-center gap-4 rounded-md px-6 py-4 transition-all duration-300'
                >
                  <Avatar className='size-10 shrink-0'>
                    <AvatarFallback className='bg-primary/10 [&>svg]:size-5'>
                      <MailIcon />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className='text-lg font-medium'>Email</h3>
                    <p className='text-muted-foreground'>{contactInfo.email}</p>
                  </div>
                </a>
              </div>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
