'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

const ContactForm = () => {
  return (
    <form className='space-y-6' onSubmit={e => e.preventDefault()}>
      <div className='w-full space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' className='h-10' placeholder='Enter your name here...' />
      </div>

      <div className='w-full space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' className='h-10' placeholder='Enter your Email here...' />
      </div>

      <div className='w-full space-y-2'>
        <Label htmlFor='message'>Message</Label>
        <Textarea id='message' className='h-28 resize-none' placeholder='Type here' />
      </div>

      {/* Services Checkboxes */}
      <div>
        <p className='mb-4 font-medium'>Services</p>
        <div className='grid gap-x-10 gap-y-4 sm:grid-cols-2'>
          <div className='flex items-center gap-3'>
            <Checkbox className='size-6' id='websitedesign' />
            <Label htmlFor='websitedesign' className='text-sm'>
              Website Design
            </Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox className='size-6' id='contentcreation' />
            <Label htmlFor='contentcreation' className='text-sm'>
              Content Creation
            </Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox className='size-6' id='ux-design' />
            <Label htmlFor='ux-design' className='text-sm'>
              UX Design
            </Label>
          </div>

          <div className='flex items-center gap-3'>
            <Checkbox className='size-6' id='strategy-consulting' />
            <Label htmlFor='strategy-consulting' className='text-sm'>
              Strategy & Consulting
            </Label>
          </div>
        </div>
      </div>

      <Button type='submit' className='w-full rounded-lg text-base' size='lg'>
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm
