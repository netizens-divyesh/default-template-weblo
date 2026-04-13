import { useEffect, useState } from 'react'

import { motion } from 'motion/react'
import { BadgeCheckIcon, EllipsisIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Tweet = {
  id: string
  avatar: string
  fallback: string
  name: string
  username: string
  content: string[]
}

const initialTweets: Tweet[] = [
  {
    id: '1',
    avatar: 'https://github.com/shadcn.png',
    fallback: 'CN',
    name: 'Shadcn',
    username: '@Shadcn',
    content: [
      'Not a component library. A component distribution system.',
      'Pull components from anywhere. Add code that looks like your own.'
    ]
  },
  {
    id: '2',
    avatar: 'https://github.com/vercel.png',
    fallback: 'V',
    name: 'Vercel',
    username: '@vercel',
    content: [
      'Build fast, ship faster with the best developer experience.',
      'Deploy instantly to our global edge network.'
    ]
  },
  {
    id: '3',
    avatar: 'https://github.com/tailwindcss.png',
    fallback: 'TW',
    name: 'Tailwind CSS',
    username: '@tailwindcss',
    content: [
      'Rapidly build modern websites without ever leaving your HTML.',
      'A utility-first CSS framework packed with classes.'
    ]
  }
]

const TweetStack = () => {
  // States
  const [tweets, setTweets] = useState<Tweet[]>(initialTweets)

  useEffect(() => {
    const interval = setInterval(() => {
      setTweets(prevCards => {
        const newArray = [...prevCards]

        newArray.push(newArray.shift()!)

        return newArray
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative mx-auto flex h-45.5 w-full max-w-115 items-end'>
      {tweets.map((tweet, index) => (
        <motion.div
          key={tweet.id}
          className='absolute inset-x-5 h-37.5'
          style={{
            transformOrigin: 'top center'
          }}
          animate={{
            bottom: index * 14,
            scale: 1 - index * 0.1,
            filter: `blur(${index * 1.2}px)`,
            zIndex: tweets.length - index
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: index * 0.05
          }}
        >
          <Card className='pt-4.5 pb-7 shadow-[0_30px_50px_-12px_oklch(0.00_0_0/0.4)] dark:shadow-[0_30px_50px_-12px_oklch(1.00_0_0/0.2)]'>
            <CardContent className='flex flex-col gap-4 px-5'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2.5'>
                  <Avatar className='size-9'>
                    <AvatarImage src={tweet.avatar} alt={`@${tweet.username}`} />
                    <AvatarFallback className='text-xs'>{tweet.fallback}</AvatarFallback>
                  </Avatar>
                  <div className='-space-y-0.5'>
                    <div className='flex items-center gap-1'>
                      <h4 className='text-lg font-semibold'>{tweet.name}</h4>
                      <BadgeCheckIcon className='text-background size-4 fill-sky-500 stroke-[1.5]' />
                    </div>
                    <p className='text-muted-foreground text-sm'>{tweet.username}</p>
                  </div>
                </div>
                <div className='flex items-center gap-1.5'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/grok-icon.png?width=16&format=auto'
                    alt='Grok Logo'
                    className='size-4'
                  />
                  <EllipsisIcon className='size-3' />
                </div>
              </div>
              <div className='space-y-2.5 text-sm'>
                {tweet.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default TweetStack
