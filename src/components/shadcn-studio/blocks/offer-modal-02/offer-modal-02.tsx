'use client'

import { useState, type ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog'

type OfferModalProps = {
  trigger?: ReactNode
  defaultOpen?: boolean
}

const OfferModal = ({ defaultOpen = false, trigger }: OfferModalProps) => {
  const [open, setOpen] = useState(defaultOpen)

  const couponCode = 'Special50%'
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className='[&_[data-slot=dialog-close]]:bg-card flex justify-center overflow-hidden border-0 p-0 [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:size-7 [&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center [&_[data-slot=dialog-close]]:rounded-full'>
        <div className='relative flex flex-col'>
          {/* Image section */}
          <div className='max-h-64 w-full'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/offer-modal/image-2.png'
              alt='Special Offer'
              className='max-h-64 w-full object-cover'
            />
          </div>

          {/* Content section */}
          <div className='flex flex-col items-center justify-center gap-6 p-6 text-center'>
            <DialogTitle className='text-3xl font-semibold'>Special Offer</DialogTitle>
            <DialogDescription className='text-muted-foreground max-w-xs text-base'>
              Before you leave, grab the offer! Enter this coupon code at checkout to get 50% off.
            </DialogDescription>

            <div className='flex gap-5 max-sm:flex-col'>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-dashed text-lg tracking-widest uppercase shadow-none hover:bg-transparent'
              >
                {couponCode}
              </Button>
              <Button type='button' size='lg' onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy Code'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default OfferModal
