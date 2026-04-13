'use client'

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

import { format } from 'date-fns'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { cn } from '@/lib/utils'

const revenueData = [
  { timestamp: new Date('2026-02-01').getTime(), starter: 60, pro: 22, enterprise: 40 },
  { timestamp: new Date('2026-02-02').getTime(), starter: 50, pro: 34, enterprise: 42 },
  { timestamp: new Date('2026-02-03').getTime(), starter: 52, pro: 65, enterprise: 38 },
  { timestamp: new Date('2026-02-04').getTime(), starter: 54, pro: 67, enterprise: 36 },
  { timestamp: new Date('2026-02-05').getTime(), starter: 70, pro: 42, enterprise: 56 },
  { timestamp: new Date('2026-02-06').getTime(), starter: 72, pro: 65, enterprise: 58 },
  { timestamp: new Date('2026-02-07').getTime(), starter: 68, pro: 75, enterprise: 52 },
  { timestamp: new Date('2026-02-08').getTime(), starter: 45, pro: 95, enterprise: 70 },
  { timestamp: new Date('2026-02-09').getTime(), starter: 58, pro: 78, enterprise: 72 },
  { timestamp: new Date('2026-02-10').getTime(), starter: 85, pro: 65, enterprise: 105 },
  { timestamp: new Date('2026-02-11').getTime(), starter: 88, pro: 62, enterprise: 75 },
  { timestamp: new Date('2026-02-12').getTime(), starter: 100, pro: 55, enterprise: 80 },
  { timestamp: new Date('2026-02-13').getTime(), starter: 75, pro: 95, enterprise: 62 },
  { timestamp: new Date('2026-02-14').getTime(), starter: 118, pro: 98, enterprise: 55 },
  { timestamp: new Date('2026-02-15').getTime(), starter: 110, pro: 80, enterprise: 60 },
  { timestamp: new Date('2026-02-16').getTime(), starter: 108, pro: 82, enterprise: 70 },
  { timestamp: new Date('2026-02-17').getTime(), starter: 102, pro: 85, enterprise: 75 },
  { timestamp: new Date('2026-02-18').getTime(), starter: 88, pro: 112, enterprise: 62 },
  { timestamp: new Date('2026-02-19').getTime(), starter: 118, pro: 105, enterprise: 98 },
  { timestamp: new Date('2026-02-20').getTime(), starter: 125, pro: 72, enterprise: 95 },
  { timestamp: new Date('2026-02-21').getTime(), starter: 130, pro: 95, enterprise: 100 },
  { timestamp: new Date('2026-02-22').getTime(), starter: 98, pro: 125, enterprise: 82 },
  { timestamp: new Date('2026-02-23').getTime(), starter: 110, pro: 135, enterprise: 65 },
  { timestamp: new Date('2026-02-24').getTime(), starter: 140, pro: 100, enterprise: 118 },
  { timestamp: new Date('2026-02-25').getTime(), starter: 135, pro: 98, enterprise: 120 },
  { timestamp: new Date('2026-02-26').getTime(), starter: 115, pro: 140, enterprise: 100 },
  { timestamp: new Date('2026-02-27').getTime(), starter: 145, pro: 108, enterprise: 130 },
  { timestamp: new Date('2026-02-28').getTime(), starter: 148, pro: 122, enterprise: 135 }
]

const summaryData = [
  {
    name: 'Starter',
    subscribers: 1240,
    mrr: 4650.0,
    churn: 2.4,
    upgrades: 38,
    ltv: 193.75,
    bgColor: 'bg-chart-5'
  },
  {
    name: 'Pro',
    subscribers: 865,
    mrr: 12975.0,
    churn: 1.8,
    upgrades: 62,
    ltv: 833.33,
    bgColor: 'bg-chart-3'
  },
  {
    name: 'Enterprise',
    subscribers: 214,
    mrr: 21400.0,
    churn: 0.9,
    upgrades: 14,
    ltv: 3555.56,
    bgColor: 'bg-chart-1'
  }
]

const chartConfig = {
  starter: { label: 'Starter', color: 'var(--chart-5)' },
  pro: { label: 'Pro', color: 'var(--chart-3)' },
  enterprise: { label: 'Enterprise', color: 'var(--chart-1)' }
} satisfies ChartConfig

const SaasRevenueMetrics = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardDescription className='text-base'>SaaS revenue metrics</CardDescription>
        <CardTitle className='text-3xl font-bold'>$39,025.00</CardTitle>
        <p className='text-sm font-medium text-green-600 dark:text-green-400'>
          +$1,840.00 (4.9%) <span className='text-muted-foreground font-normal'> vs last month</span>
        </p>
      </CardHeader>

      <CardContent className='space-y-8'>
        <ChartContainer config={chartConfig} className='h-64 w-full'>
          <LineChart data={revenueData} margin={{ top: 8, bottom: 0, left: -10, right: 15 }}>
            <CartesianGrid strokeDasharray='3 3' stroke='var(--border)' vertical={false} />
            <XAxis
              dataKey={d => format(d.timestamp, 'MMM d')}
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              minTickGap={15}
              className='text-muted-foreground text-xs'
            />
            <YAxis
              domain={[0, 150]}
              ticks={[0, 30, 60, 90, 120, 150]}
              tickFormatter={v => `$${v}k`}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent className='w-40' hideLabel />} />
            <Line
              dataKey='starter'
              type='monotone'
              stroke='var(--color-starter)'
              strokeWidth={2}
              dot={false}
              connectNulls
            />
            <Line dataKey='pro' type='monotone' stroke='var(--color-pro)' strokeWidth={2} dot={false} connectNulls />
            <Line
              dataKey='enterprise'
              type='monotone'
              stroke='var(--color-enterprise)'
              strokeWidth={2}
              dot={false}
              connectNulls
            />
            <ChartLegend
              verticalAlign='top'
              content={<ChartLegendContent />}
              className='justify-end max-sm:mb-4 max-sm:ml-3 max-sm:flex-col max-sm:items-start'
            />
          </LineChart>
        </ChartContainer>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='pl-6'>Plan</TableHead>
              <TableHead className='text-center'>Subscribers</TableHead>
              <TableHead className='text-center'>MRR</TableHead>
              <TableHead className='text-center'>Churn</TableHead>
              <TableHead className='text-center'>Upgrades</TableHead>
              <TableHead className='text-end'>LTV</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {summaryData.map((item, index) => (
              <TableRow key={index} className='border-none'>
                <TableCell className='flex items-center gap-2'>
                  <span className={cn(item.bgColor, 'h-6 w-1 rounded-sm')} />
                  <span className='text-sm font-medium'>{item.name}</span>
                </TableCell>
                <TableCell className='text-center'>{item.subscribers.toLocaleString()}</TableCell>
                <TableCell className='text-center'>
                  ${item.mrr.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </TableCell>
                <TableCell
                  className={cn(
                    'text-center',
                    item.churn <= 1.5 ? 'text-green-600 dark:text-green-400' : 'text-destructive'
                  )}
                >
                  {item.churn}%
                </TableCell>
                <TableCell className='text-center text-green-600 dark:text-green-400'>+{item.upgrades}</TableCell>
                <TableCell className='text-end'>
                  ${item.ltv.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default SaasRevenueMetrics
