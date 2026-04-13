'use client'

import { useState, type ReactNode } from 'react'

import { MailIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type OfferModalProps = {
  trigger?: ReactNode
  defaultOpen?: boolean
}

const OfferModal = ({ defaultOpen = false, trigger }: OfferModalProps) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className='[&_[data-slot=dialog-close]]:bg-card flex h-120 flex-col items-center justify-center gap-6 border-0 bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/offer-modal/image-3.png)] bg-cover py-16 text-center lg:max-w-3xl [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:size-7 [&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center [&_[data-slot=dialog-close]]:rounded-full'>
        <DialogTitle className='text-3xl font-semibold text-white'>SIGN UP & GET 40% OFF</DialogTitle>

        <DialogDescription className='max-w-xl text-base text-white'>
          Sign up today for free and be the first to hear of special promotions, new arrivals, designer and offer news.
        </DialogDescription>

        <form onSubmit={e => e.preventDefault()} className='flex w-full max-w-md justify-center gap-1.5'>
          <div className='relative flex-1'>
            <Input type='email' placeholder='Your email address' className='peer h-10 !bg-white pr-9' />
            <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
              <MailIcon className='size-5' />
            </div>
          </div>
          <Button size='lg' className='uppercase'>
            Sign Up
          </Button>
        </form>

        <div className='flex items-center space-x-2'>
          <Checkbox id='signup-checkbox' className='border-white bg-white' />
          <Label htmlFor='signup-checkbox' className='cursor-pointer font-normal text-white'>
            Don&apos;t show this popup again
          </Label>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default OfferModal
