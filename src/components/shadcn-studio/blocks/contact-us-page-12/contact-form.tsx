'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

const ContactForm = () => {
  return (
    <form className='space-y-6' onSubmit={e => e.preventDefault()}>
      {/* Name Input */}
      <div className='space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' placeholder='Enter your name here...' className='h-10' />
      </div>

      {/* Email Input */}
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' placeholder='Enter your Email here...' className='h-10' />
      </div>

      {/* Budget Input */}
      <div className='space-y-2'>
        <Label htmlFor='budget'>Budget</Label>
        <Input type='text' id='budget' placeholder='Enter the amount' className='h-10' />
      </div>

      {/* Message Input */}
      <div className='space-y-2'>
        <Label htmlFor='message'>Message</Label>
        <Textarea id='message' placeholder='Enter your message' className='min-h-24 resize-none' />
      </div>

      {/* Services Section */}
      <div className='space-y-4'>
        <Label className='text-base font-medium'>Services</Label>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex items-center space-x-2'>
            <Checkbox className='size-6' id='website-design' />
            <Label htmlFor='website-design' className='text-sm'>
              Website Design
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox className='size-6' id='ux-design' />
            <Label htmlFor='ux-design' className='text-sm'>
              UX Design
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox className='size-6' id='content-creation' />
            <Label htmlFor='content-creation' className='text-sm'>
              Content Creation
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox className='size-6' id='strategy-consulting' />
            <Label htmlFor='strategy-consulting' className='text-sm'>
              Strategy & Consulting
            </Label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button type='submit' size='lg' className='w-full rounded-lg text-base font-medium'>
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm
