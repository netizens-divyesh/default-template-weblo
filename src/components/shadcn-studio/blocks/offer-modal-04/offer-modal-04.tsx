import { useState, useRef, type ReactNode } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils'

type OfferModalProps = {
  trigger?: ReactNode
  defaultOpen?: boolean
}

const OfferModal04 = ({ trigger, defaultOpen }: OfferModalProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const wheelRef = useRef<HTMLUListElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const animationRef = useRef<Animation | null>(null)
  const previousEndDegreeRef = useRef(0)

  const wheelSegments = [
    { text: 'Next time', bgColor: 'var(--color-fuchsia-300)' },
    { text: '10% off', bgColor: 'var(--color-lime-300)' },
    { text: '5% off', bgColor: 'var(--color-cyan-400)' },
    { text: 'Next time', bgColor: 'var(--color-fuchsia-300)' },
    { text: '15% off', bgColor: 'var(--color-lime-300)' },
    { text: '10% off', bgColor: 'var(--color-fuchsia-300)' },
    { text: '5% off', bgColor: 'var(--color-cyan-400)' }
  ]

  const getResultAtTop = () => {
    if (!wheelRef.current) return null

    // Calculate which segment is at the top based on rotation
    const totalSegments = wheelSegments.length
    const segmentAngle = 360 / totalSegments

    // Normalize the rotation to be between 0 and 360
    const normalizedRotation = ((previousEndDegreeRef.current % 360) + 270) % 360

    // Calculate which segment is at the top (pointing upward)
    // We need to account for the wheel starting position and direction of rotation
    const adjustedRotation = (360 - normalizedRotation + segmentAngle / 2) % 360
    const segmentIndex = Math.floor(adjustedRotation / segmentAngle) % totalSegments

    return wheelSegments[segmentIndex]?.text || null
  }

  const spinWheel = () => {
    if (!wheelRef.current || isSpinning) return

    setIsSpinning(true)
    setResult(null)

    if (animationRef.current) {
      animationRef.current.cancel()
    }

    const randomAdditionalDegrees = Math.random() * 360 + 1800
    const newEndDegree = previousEndDegreeRef.current + randomAdditionalDegrees

    animationRef.current = wheelRef.current.animate(
      [{ transform: `rotate(${previousEndDegreeRef.current}deg)` }, { transform: `rotate(${newEndDegree}deg)` }],
      {
        duration: 4000,
        direction: 'normal',
        easing: 'cubic-bezier(0.440, -0.205, 0.000, 1.130)',
        fill: 'forwards',
        iterations: 1
      }
    )

    animationRef.current.onfinish = () => {
      setIsSpinning(false)
      const currentValue = getResultAtTop()

      setResult(currentValue)

      // Reset the form/input field after spin completes
      if (formRef.current) {
        formRef.current.reset()
      }
    }

    previousEndDegreeRef.current = newEndDegree
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    spinWheel()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className='[&_[data-slot=dialog-close]]:bg-primary/10 flex w-full flex-col items-center justify-center gap-6 text-center lg:max-w-md [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:size-7 [&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center [&_[data-slot=dialog-close]]:rounded-full'>
        <DialogHeader>
          <DialogTitle className='text-3xl font-semibold'>It&apos;s your lucky day!</DialogTitle>
          <DialogDescription className='text-center text-lg'>
            Enter your email to <br /> spin the wheel
          </DialogDescription>
        </DialogHeader>

        {/* Fortune Wheel */}
        <div className='relative rounded-full border-12 border-white shadow-[0px_0px_27.1px_4px_rgba(0,0,0,0.15)]'>
          <fieldset className='wheel-of-fortune [container-type:inline-size] relative grid size-63 [--_items:7] *:absolute after:absolute after:-top-4 after:z-10 after:aspect-[1/cos(30deg)] after:h-[7cqi] after:scale-[2] after:[place-self:start_center] after:bg-black after:[clip-path:polygon(50%_100%,100%_0,0_0)] sm:size-76'>
            <ul
              ref={wheelRef}
              data-item-count='7'
              className='wheel-segments inset-0 m-0 grid list-none [place-content:center_start] p-0 [clip-path:inset(0_0_0_0_round_50%)]'
            >
              {wheelSegments.map((segment, index) => (
                <li
                  key={index}
                  className='wheel-segment grid aspect-[1/calc(2*tan(180deg/var(--_items)))] w-[50cqi] origin-[center_right] content-center pr-8 text-end text-xl font-semibold text-black select-none [clip-path:_polygon(0%_0%,100%_50%,0%_100%)] [grid-area:1/-1] max-sm:text-sm'
                  style={{ backgroundColor: segment.bgColor, rotate: `calc(360deg / var(--_items) * ${index})` }}
                >
                  {segment.text}
                </li>
              ))}
            </ul>
            <div className='absolute top-1/2 left-1/2 flex size-13.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/logo/logo.png'
                className='size-9.5 rounded-full'
                alt='brand-logo'
              />
            </div>
          </fieldset>
        </div>

        {result && (
          <Alert
            className={cn('border-none bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400', {
              'bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400': result == 'Next time'
            })}
          >
            <AlertTitle>{result === 'Next time' ? 'Better luck next time!' : `You won ${result}!`}</AlertTitle>
          </Alert>
        )}

        <form ref={formRef} onSubmit={handleFormSubmit} className='flex w-full flex-col justify-center gap-4'>
          <Input type='email' placeholder='Email' className='h-10 w-full' required />

          <Button type='submit' size='lg' disabled={isSpinning}>
            {isSpinning ? 'Spinning...' : 'Spin the wheel'}
          </Button>
        </form>

        <a href='#' className='text-muted-foreground hover:text-primary underline'>
          Remind me later!
        </a>
      </DialogContent>
    </Dialog>
  )
}

export default OfferModal04
