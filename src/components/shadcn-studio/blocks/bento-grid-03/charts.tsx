'use client'

import { Area, AreaChart, Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, XAxis } from 'recharts'

import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'

const radialChartData = [{ funds: 75, fill: 'var(--color-funds)' }]

const radialChartConfig = {
  funds: {
    label: 'Funds',
    color: 'var(--primary)'
  }
} satisfies ChartConfig

export const RadialChart = () => {
  return (
    <ChartContainer config={radialChartConfig} className='h-37.5 w-full'>
      <RadialBarChart data={radialChartData} startAngle={90} endAngle={360} innerRadius={65} outerRadius={110}>
        <PolarGrid
          gridType='circle'
          radialLines={false}
          stroke='none'
          className='first:fill-primary/20 last:fill-muted'
          polarRadius={[75, 55]}
        />
        <RadialBar dataKey='funds' cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                    <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-xl font-medium'>
                      {radialChartData[0].funds.toLocaleString()}%
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  )
}

const areaChartData = [
  { day: 'Monday', engagement: 260 },
  { day: 'Tuesday', engagement: 380 },
  { day: 'Wednesday', engagement: 250 },
  { day: 'Thursday', engagement: 580 },
  { day: 'Friday', engagement: 370 },
  { day: 'Saturday', engagement: 420 },
  { day: 'Sunday', engagement: 300 }
]

const areaChartConfig = {
  engagement: {
    label: 'Rate'
  }
} satisfies ChartConfig

export const AreaGradientChart = () => {
  return (
    <ChartContainer config={areaChartConfig} className='h-46.5 w-full'>
      <AreaChart
        data={areaChartData}
        margin={{
          left: 12,
          right: 12
        }}
        className='stroke-3'
      >
        <defs>
          <linearGradient id='fillEngagement' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='10%' stopColor='var(--primary)' stopOpacity={0.5} />
            <stop offset='90%' stopColor='var(--primary)' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey='day'
          tickLine={false}
          tickMargin={5.5}
          axisLine={false}
          tickFormatter={value => value.slice(0, 2)}
          className='text-muted-foreground text-sm uppercase'
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Area dataKey='engagement' type='natural' fill='url(#fillEngagement)' stroke='var(--primary)' stackId='a' />
      </AreaChart>
    </ChartContainer>
  )
}
