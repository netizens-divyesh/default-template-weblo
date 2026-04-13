'use client'

import React from 'react'

import { CreditCardIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type TabItem = {
  name: string
  value: string
  imageUrl: string
  imageDarkUrl?: string
}

export type CardNumber = {
  label: string
  value: string
}

export type PaymentCardProps = {
  className?: string
  tabs: TabItem[]
  cardDetails: CardNumber[]
  defaultTab?: string
}

const PaymentCard = ({ tabs, cardDetails }: PaymentCardProps) => {
  return (
    <Card className='w-max gap-4 md:w-106.5'>
      <CardHeader className='grid-rows-none'>
        <CardTitle className='text-2xl font-semibold'>
          <CreditCardIcon className='mr-2.5 inline-block size-8.5' />
          My Cards
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={tabs[0].value} className='mb-6 w-full gap-6'>
          <TabsList className='bg-card w-full justify-start rounded-none border-b p-0 group-data-[orientation=horizontal]/tabs:h-10'>
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className='bg-card data-[state=active]:border-b-primary dark:data-[state=active]:bg-card h-full rounded-none border-0 border-b-2 border-transparent text-base data-[state=active]:shadow-none!'
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.imageDarkUrl ? (
                <>
                  <img
                    src={tab.imageUrl}
                    alt={tab.name}
                    className='w-full rounded-xl border object-cover shadow-md sm:h-57.5 dark:hidden'
                  />
                  <img
                    src={tab.imageDarkUrl}
                    alt={tab.name}
                    className='hidden w-full rounded-xl border object-cover shadow-md sm:h-57.5 dark:block'
                  />
                </>
              ) : (
                <img
                  src={tab.imageUrl}
                  alt={tab.name}
                  className='w-full rounded-xl border object-cover shadow-md sm:h-57.5'
                />
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className='mb-6 space-y-3'>
          {cardDetails.map((detail, index) => (
            <div key={index} className='flex justify-between'>
              <p className='text-muted-foreground font-medium md:text-lg'>{detail.label}</p>
              <p className='font-medium md:text-lg'>{detail.value}</p>
            </div>
          ))}
        </div>

        <div className='flex gap-3'>
          <Button variant={'outline'} size='lg' className='flex-1/2'>
            Unhide
          </Button>
          <Button className='flex-1/2' size='lg'>
            Adjust limit
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PaymentCard
