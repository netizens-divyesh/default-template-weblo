import type { ReactNode } from 'react'

import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

type RowData = {
  name: string
  isKey?: boolean
  icon?: ReactNode
  iconUrl?: string
  iconBg?: string
  isHighlighted?: boolean
  columnData: (string | ReactNode)[]
}[]

const CompareUILib = ({ rowdata }: { rowdata: RowData }) => {
  return (
    <div className='px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
      <div className='bg-background mx-auto max-w-7xl space-y-8 rounded-xl md:space-y-16 lg:space-y-24'>
        <div className='flex flex-col items-center gap-4'>
          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            delay={0.25}
            transition={{ duration: 0.5 }}
            className='flex flex-col gap-1.5'
          >
            <h1 className='text-center text-2xl font-semibold text-balance sm:text-3xl md:text-4xl'>
              AI Chatbots{' '}
              <span className='relative'>
                Smarter Choice
                <svg
                  viewBox='0 0 402 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute -bottom-3.5 left-0 h-5 w-full max-md:hidden'
                  preserveAspectRatio='xMinYMin meet'
                  shapeRendering='geometricPrecision'
                >
                  <MotionPreset
                    component='path'
                    delay={0.9}
                    transition={{ duration: 0.7 }}
                    motionProps={{
                      d: 'M2.11657 12.6443C77.7735 6.50977 148.406 3.60813 224.607 2.20872C280.919 1.17455 340.804 6.03954 396.499 8.54297M396.499 8.54297C407.66 8.73244 384.031 7.50791 396.499 8.54297Z',
                      stroke: 'currentColor',
                      strokeWidth: '3.5',
                      strokeLinecap: 'round',
                      vectorEffect: 'non-scaling-stroke',
                      variants: {
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                          pathLength: 1,
                          opacity: 1
                        }
                      }
                    }}
                  />
                </svg>
              </span>
            </h1>
            <h1 className='text-center text-2xl font-semibold text-balance sm:text-3xl md:text-4xl'>
              for Speed, Intelligence & Practical Use
            </h1>
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur delay={0.3} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground mx-auto max-w-2xl text-center md:text-xl'>
              Using technology to make finance simpler, smarter and more rewarding.
            </p>
          </MotionPreset>
        </div>
        <MotionPreset fade blur delay={1.3} transition={{ duration: 0.5 }}>
          <Card className='w-full overflow-x-auto p-0'>
            <CardContent className='min-w-250 overflow-y-auto rounded-xl px-0 py-0'>
              <div className='grid grid-cols-4 gap-0'>
                {rowdata.map((col, colIndex) => (
                  <div
                    key={`col-${col.name}-${colIndex}`}
                    className={cn('flex flex-col', {
                      'from-secondary/50 to-primary/5 rounded-xl border-[2.5px] border-neutral-200 bg-linear-to-b from-0% to-100% dark:border-neutral-600':
                        col.isHighlighted,
                      'bg-card': !col.isHighlighted,
                      'rounded-l-xl': colIndex === 0,
                      'rounded-r-xl': colIndex === rowdata.length - 1
                    })}
                  >
                    {/* Header */}
                    <div
                      className={cn(
                        'flex h-25.25 items-end border-b border-neutral-200 p-3.5 px-4 dark:border-neutral-600',
                        {
                          'py-3.5 pr-2': col.isKey,
                          'justify-center px-4': !col.isKey,
                          '-mt-0.5': col.isHighlighted
                        }
                      )}
                    >
                      {col.isKey ? (
                        <h3 className='text-xl font-medium'>{col.name}</h3>
                      ) : (
                        <div className='flex flex-col items-center justify-center gap-2'>
                          {col.iconUrl ? (
                            <div className='flex size-8 items-center justify-center overflow-hidden rounded-md'>
                              <img src={col.iconUrl} alt={col.name} className='size-full' />
                            </div>
                          ) : (
                            col.icon && <div>{col.icon}</div>
                          )}
                          <h3 className='text-xl font-medium'>{col.name}</h3>
                        </div>
                      )}
                    </div>

                    {/* Data Cells */}
                    {col.columnData.map((cell, rowIndex) => (
                      <div
                        key={`cell-${col.name}-${rowIndex}`}
                        className={cn('flex h-16 items-center pe-2 pl-4 text-base font-medium', {
                          'text-muted-foreground font-medium': col.isKey,
                          'text-muted-foreground justify-center text-sm': !col.isKey,
                          'border-b border-neutral-200 dark:border-neutral-600': rowIndex !== col.columnData.length - 1
                        })}
                      >
                        <div
                          className={cn(col.isKey ? '' : 'flex items-center gap-3 text-center text-base font-normal')}
                        >
                          {col.isKey ? <>{cell}</> : cell}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionPreset>
      </div>
    </div>
  )
}

export default CompareUILib
