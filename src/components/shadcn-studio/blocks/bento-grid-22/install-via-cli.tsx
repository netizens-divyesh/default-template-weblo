import { useRef } from 'react'

// Third-party Imports
import { motion } from 'motion/react'

// Component Imports
import { AnimatedBeam } from '@/components/ui/animated-beam'

const InstallViaCLI = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)
  const span7Ref = useRef<HTMLSpanElement>(null)
  const span8Ref = useRef<HTMLSpanElement>(null)
  const span9Ref = useRef<HTMLSpanElement>(null)
  const span10Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative h-full flex-1'>
      <span ref={span1Ref} className='absolute top-1/2 left-0 size-0.5' />
      <motion.span
        ref={span2Ref}
        className='bg-background absolute top-0 left-1/5 inline-flex w-fit shrink-0 -translate-x-1/2 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap'
        animate={{
          borderColor: ['var(--border)', 'var(--border)', 'var(--primary)', 'var(--border)', 'var(--border)']
        }}
        transition={{
          delay: 0.4,
          duration: 5,
          repeat: Infinity,
          times: [0, 0.1286, 0.2, 0.2714, 1],
          ease: 'easeInOut'
        }}
      >
        CLI
      </motion.span>
      <span ref={span3Ref} className='absolute top-1/2 left-1/5 size-0.5 -translate-x-1/2' />
      <span ref={span4Ref} className='absolute top-1/2 left-2/5 size-0.5 -translate-x-1/2' />
      <motion.span
        ref={span5Ref}
        animate={{
          borderColor: ['var(--border)', 'var(--border)', 'var(--primary)', 'var(--border)', 'var(--border)']
        }}
        transition={{
          delay: 0.4,
          duration: 5,
          repeat: Infinity,
          times: [0, 0.3286, 0.4, 0.4714, 1],
          ease: 'easeInOut'
        }}
        className='bg-background absolute bottom-0 left-2/5 inline-flex w-fit shrink-0 -translate-x-1/2 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow]'
      >
        Copy Prompt
      </motion.span>
      <motion.span
        ref={span6Ref}
        animate={{
          borderColor: ['var(--border)', 'var(--border)', 'var(--primary)', 'var(--border)', 'var(--border)']
        }}
        transition={{
          delay: 0.4,
          duration: 5,
          repeat: Infinity,
          times: [0, 0.5286, 0.6, 0.6714, 1],
          ease: 'easeInOut'
        }}
        className='bg-background absolute top-0 right-2/5 inline-flex w-fit shrink-0 translate-x-1/2 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow]'
      >
        V0
      </motion.span>
      <span ref={span7Ref} className='absolute top-1/2 right-2/5 size-0.5 translate-x-1/2' />
      <span ref={span8Ref} className='absolute top-1/2 right-1/5 size-0.5 translate-x-1/2' />
      <motion.span
        ref={span9Ref}
        animate={{
          borderColor: ['var(--border)', 'var(--border)', 'var(--primary)', 'var(--border)', 'var(--border)']
        }}
        transition={{
          delay: 0.4,
          duration: 5,
          repeat: Infinity,
          times: [0, 0.7286, 0.8, 0.8714, 1],
          ease: 'easeInOut'
        }}
        className='bg-background absolute right-1/5 bottom-0 inline-flex w-fit shrink-0 translate-x-1/2 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow]'
      >
        MCP
      </motion.span>
      <span ref={span10Ref} className='absolute top-1/2 right-0 size-0.5' />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={span3Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span3Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={span4Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={span5Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={span7Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span6Ref}
        toRef={span7Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span7Ref}
        toRef={span8Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span8Ref}
        toRef={span9Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span8Ref}
        toRef={span10Ref}
        className='text-primary -z-1'
        duration={5}
        delay={0.4}
      />
    </div>
  )
}

export default InstallViaCLI
