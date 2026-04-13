'use client'

import { motion } from 'motion/react'

import Logo from '@/assets/svg/logo'

const MotionAnimations = () => {
  return (
    <div className='relative'>
      <svg width='405' height='103' viewBox='0 0 405 103' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.728516 1.11438C42.4438 4.4697 84.159 22.105 125.863 69.3697C167.566 116.634 194.75 20.5854 261.5 29.5C325.938 38.1058 403.938 101.601 403.938 101.601'
          stroke='url(#paint0_linear_20623_33999)'
          strokeOpacity='0.5'
          strokeWidth='1.26398'
          className='dark:invert'
        />
        <defs>
          <linearGradient
            id='paint0_linear_20623_33999'
            x1='0.728515'
            y1='2.49043'
            x2='403.938'
            y2='100.224'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.5' />
            <stop offset='0.504808' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        style={{
          offsetPath: `path("M1 1C42.7153 4.35532 84.4305 21.9906 126.134 69.2553C167.838 116.52 195.021 20.471 261.771 29.3856C326.209 37.9914 404.21 101.486 404.21 101.486")`
        }}
        initial={{ offsetDistance: '5%' }}
        animate={{ offsetDistance: '95%' }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        className='absolute top-0 left-0'
      >
        <Logo className='size-12' />
      </motion.div>
    </div>
  )
}

export default MotionAnimations
