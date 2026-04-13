import { BellIcon, CircleCheckIcon, DotIcon, LoaderIcon, SlidersVerticalIcon, LockIcon } from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { cn } from '@/lib/utils'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from '@/components/ui/motion-tabs'
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine
} from '@/components/ui/timeline'
import { Button } from '@/components/ui/button'

function OnboardingFeed() {
  const items = [
    {
      id: 'account-login',
      title: 'Account Log In',
      time: '3 days ago',
      content: 'You successfully logged in to your account',
      icon: 'check'
    },
    {
      id: 'created-workspace',
      title: 'Created Workspace',
      time: '2 days ago',
      content: 'You successfully created your first workspace in privacy mode',
      icon: 'check'
    },
    {
      id: 'connected-db',
      title: 'Connected database',
      time: '2 hours ago',
      content: 'You successfully connected your database',
      icon: 'check'
    },
    {
      id: 'add-payment',
      title: 'Add payment method',
      time: 'Running now....',
      content: 'Identifying payment method and verifying details',
      icon: 'loader'
    },
    {
      id: 'invite-team',
      title: 'Invite team members',
      time: 'Upcoming',
      content: 'Add team members to workspace',
      icon: 'loader'
    }
  ]

  return (
    <Card className='w-full max-w-lg'>
      <CardHeader>
        <CardTitle>Workspace setup</CardTitle>
        <CardDescription>Setup your workspace step by step</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4 text-sm'>
        <Tabs defaultValue='updates' className='gap-4'>
          <TabsList className='w-full'>
            <TabsTrigger value='updates'>Updates</TabsTrigger>
            <TabsTrigger value='details'>Details</TabsTrigger>
          </TabsList>

          <TabsContents className='mx-1 -mt-2 mb-1 h-full rounded-sm'>
            <TabsContent value='updates'>
              <Timeline>
                {items.map((timeline, idx) => {
                  const isLast = idx === items.length - 1

                  const lineClass = cn(
                    'min-h-12 max-sm:min-h-6',
                    timeline.icon === 'loader'
                      ? 'bg-[repeating-linear-gradient(0deg,var(--border),var(--border)_5px,var(--card)_6px,var(--card)_10px)]'
                      : 'border'
                  )

                  return (
                    <TimelineItem key={timeline.id} status='done' className='mt-1 gap-x-0'>
                      <TimelineDot status='custom' className='mb-1.25'>
                        {timeline.icon === 'loader' ? (
                          <LoaderIcon className='text-primary size-4' />
                        ) : (
                          <CircleCheckIcon className='text-primary size-4' />
                        )}
                      </TimelineDot>
                      {!isLast && <TimelineLine className={lineClass} />}
                      <TimelineHeading className='ml-4 flex items-center gap-1'>
                        <span className='font-medium'>{timeline.title}</span>
                        <DotIcon className='text-muted-foreground size-2' />
                        <span className='text-muted-foreground text-xs'>{timeline.time}</span>
                      </TimelineHeading>
                      <TimelineContent className='ml-4'>
                        <span className='text-muted-foreground text-sm'>{timeline.content}</span>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })}
              </Timeline>
              <Button className='mt-6 w-full'>
                <BellIcon className='size-4' />
                Notify me when completed
              </Button>
            </TabsContent>
            <TabsContent value='details'>
              <div>
                <h3 className='mb-3 text-xs font-medium uppercase'>General</h3>

                <div className='bg-card rounded-md border'>
                  <div className='flex items-center justify-between gap-4 px-4 py-3'>
                    <span className='text-muted-foreground text-sm'>Name</span>
                    <span className='text-sm font-medium'>studio_workspace</span>
                  </div>
                  <div className='flex items-center justify-between gap-4 border-t px-4 py-3'>
                    <span className='text-muted-foreground text-sm'>Storage used</span>
                    <span className='text-sm font-medium'>2.75/10GB</span>
                  </div>
                  <div className='flex items-center justify-between gap-4 border-t px-4 py-3'>
                    <span className='text-muted-foreground text-sm'>Plan & Billing</span>
                    <span className='text-sm font-medium'>Pro - $20/month</span>
                  </div>
                  <div className='flex items-center justify-between gap-4 border-t px-4 py-3'>
                    <span className='text-muted-foreground text-sm'>Payment cycle</span>
                    <span className='text-sm font-medium'>1st day of month</span>
                  </div>
                </div>

                <h3 className='mt-5 mb-3 text-xs font-medium uppercase'>Privacy settings</h3>

                <div className='bg-card rounded-md border'>
                  <div className='flex items-center justify-between gap-4 px-4 py-3'>
                    <div>
                      <div className='text-muted-foreground text-sm'>Users</div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center -space-x-2'>
                        <Avatar className='ring-background ring-2'>
                          <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png' alt='Olivia' />
                          <AvatarFallback className='text-xs'>OS</AvatarFallback>
                        </Avatar>
                        <Avatar className='ring-background ring-2'>
                          <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png' alt='Howard' />
                          <AvatarFallback className='text-xs'>HL</AvatarFallback>
                        </Avatar>
                        <Avatar className='ring-background ring-2'>
                          <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie' />
                          <AvatarFallback className='text-xs'>HR</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-between gap-4 border-t px-4 py-3'>
                    <div>
                      <div className='text-muted-foreground text-sm'>Access</div>
                    </div>
                    <div>
                      <Select defaultValue='private' disabled>
                        <SelectTrigger id='visibility-select' className='w-full'>
                          <SelectValue placeholder='Select visibility' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Workspace Visibility</SelectLabel>
                            <SelectItem value='private'>
                              <LockIcon className='text-muted-foreground size-4' /> Private
                            </SelectItem>
                            <SelectItem value='public'>Public</SelectItem>
                            <SelectItem value='pro'>Pro</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className='mt-6'>
                  <Button variant='outline' className='w-full'>
                    <SlidersVerticalIcon className='size-4' />
                    <span>Go to workspace settings</span>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </TabsContents>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default OnboardingFeed
