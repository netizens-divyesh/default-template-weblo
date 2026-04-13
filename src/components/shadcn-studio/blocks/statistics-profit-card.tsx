'use client'

import { CartesianGrid, Line, LineChart } from 'recharts'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

import { cn } from '@/lib/utils'

// Profit chart data
const profitChartData = [
  { month: 'January', profit: 10 },
  { month: 'February', profit: 75 },
  { month: 'March', profit: 40 },
  { month: 'April', profit: 100 },
  { month: 'May', profit: 70 },
  { month: 'June', profit: 110 }
]

const profitChartConfig = {
  profit: {
    label: 'Profit'
  }
} satisfies ChartConfig

const StatisticsCardData = {
  title: 'Profit',
  description: 'Last Month',
  children: (
    <>
      <ChartContainer config={profitChartConfig} className='h-21 w-full px-4.5'>
        <LineChart
          accessibilityLayer
          data={profitChartData}
          margin={{
            left: 6,
            right: 6
          }}
        >
          <CartesianGrid horizontal={false} strokeDasharray='4' stroke='var(--border)' />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line
            dataKey='profit'
            type='linear'
            dot={{
              r: 3.5,
              fill: 'var(--chart-2)'
            }}
            stroke='var(--chart-2)'
            strokeWidth={3}
            activeDot={{ r: 3, fill: 'var(--primary-foreground)' }}
          />
        </LineChart>
      </ChartContainer>
    </>
  ),
  value: '624K',
  changePercentage: '+12.6%'
}

const StatisticsProfitCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('gap-4', className)}>
      <CardHeader className='gap-0'>
        <CardTitle className='text-lg font-semibold'>{StatisticsCardData.title}</CardTitle>
        <CardDescription className='text-muted-foreground text-base'>{StatisticsCardData.description}</CardDescription>
      </CardHeader>
      {StatisticsCardData.children}

      <CardFooter className='justify-between'>
        <span className='text-xl font-semibold'>{StatisticsCardData.value}</span>
        <span className='text-primary'>{StatisticsCardData.changePercentage}</span>
      </CardFooter>
    </Card>
  )
}

export default StatisticsProfitCard
