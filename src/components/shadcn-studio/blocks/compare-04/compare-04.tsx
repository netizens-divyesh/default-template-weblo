import type { ReactNode } from 'react'
import { Fragment } from 'react'

import { Button } from '@/components/ui/button'
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
  hasButton?: boolean
  columnData: (string | ReactNode)[]
}[]

type CompareUILibProps = {
  rowdata: RowData
  title?: string
  subtitle?: string
}

const CompareUILib = ({ rowdata, title, subtitle }: CompareUILibProps) => {
  return (
    <div className='bg-muted px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
      <div className='bg-background mx-auto max-w-7xl space-y-8 rounded-xl p-4 sm:p-16 sm:px-8 md:space-y-16 lg:space-y-24'>
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
              {title || 'Find the Right UI Library for Modern, Fast Development'}
            </h1>
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur delay={0.3} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground mx-auto max-w-2xl text-center md:text-xl'>
              {subtitle || (
                <>
                  Explore how Rawcn stack up across features, customisation, and performance to help you build faster
                  and design smarter.
                </>
              )}
            </p>
          </MotionPreset>
        </div>
        <MotionPreset fade blur delay={1.3} transition={{ duration: 0.5 }}>
          <Card className='w-full border-none p-0 shadow-none'>
            <CardContent className='relative rounded-xl px-0 py-0'>
              <div className='flex overflow-x-auto'>
                {/* Left Section - Benefits Column */}
                <div className='flex w-65 shrink-0 flex-col py-4 md:w-80 lg:w-90 xl:w-124'>
                  {/* Benefits Header */}
                  <div className='bg-card flex h-17 items-end border-b border-neutral-200 p-4 py-3.5 dark:border-neutral-600'>
                    <h3 className='text-lg font-semibold'>{rowdata[0].name}</h3>
                  </div>
                  {/* Benefits Data Rows */}
                  {rowdata[0].columnData.map((data, rowIndex) => (
                    <div
                      key={`benefits-${rowIndex}`}
                      className={cn(
                        'bg-card text-muted-foreground flex h-17 items-center py-3 pe-2 pl-4 font-normal sm:text-lg',
                        {
                          'border-b border-neutral-200 dark:border-neutral-600':
                            rowIndex !== rowdata[0].columnData.length - 1,
                          'border-b': rowIndex === rowdata[0].columnData.length - 1
                        }
                      )}
                    >
                      {data}
                    </div>
                  ))}
                  {/* Benefits Button Space */}
                  {rowdata[0].hasButton && (
                    <div className='bg-card flex items-center justify-center rounded-bl-md p-6'></div>
                  )}
                </div>
                {/* Right Section - Comparison Columns with Gradient */}
                <div className='from-secondary/50 to-primary/5 flex flex-1 rounded-lg bg-linear-to-b from-0% to-100%'>
                  <div className='grid min-w-85 flex-1 grid-cols-3 gap-0 py-4 sm:min-w-150 lg:min-w-0'>
                    {/* Right Section Headers */}
                    {rowdata.slice(1).map((row, colIndex) => (
                      <div
                        key={`header-${row.name}-${colIndex}`}
                        className={cn(
                          'flex h-17 items-end justify-center border-b border-neutral-200 p-4 py-2 sm:py-3.5 dark:border-neutral-600',
                          {
                            'bg-card rounded-t-md border-x border-t sm:border-x-[2.5px] sm:border-t-[2.5px]':
                              row.isHighlighted,
                            'rounded-tr-md': row.isHighlighted && colIndex === rowdata.slice(1).length - 1
                          }
                        )}
                      >
                        <h3 className='text-lg font-semibold max-md:wrap-anywhere'>{row.name}</h3>
                      </div>
                    ))}
                    {/* Right Section Data Rows */}
                    {rowdata[0].columnData.map((_, rowIndex) => (
                      <Fragment key={`right-cell-${rowIndex}`}>
                        {rowdata.slice(1).map((col, colIndex) => (
                          <div
                            key={`cell-${col.name}-${rowIndex}-${colIndex}`}
                            className={cn(
                              'text-muted-foreground flex h-17 items-center justify-center pe-2 pl-4 text-sm',
                              {
                                'bg-card border-x border-neutral-200 py-4 sm:border-x-[2.5px] dark:border-neutral-600':
                                  col.isHighlighted,
                                'py-3': !col.isHighlighted,
                                'border-b dark:border-neutral-600':
                                  col.isHighlighted && rowIndex !== col.columnData.length - 1,
                                'border-b border-neutral-200 dark:border-neutral-600':
                                  !col.isHighlighted && rowIndex !== col.columnData.length - 1,
                                'border-b': rowIndex === col.columnData.length - 1
                              }
                            )}
                          >
                            <div className='flex items-center gap-3 text-center text-sm font-normal'>
                              {col.columnData[rowIndex]}
                            </div>
                          </div>
                        ))}
                      </Fragment>
                    ))}
                    {/* Right Section Button Row */}
                    {rowdata.some(col => col.hasButton) && (
                      <>
                        {rowdata.slice(1).map((col, colIndex) => (
                          <div
                            key={`button-${col.name}-${colIndex}`}
                            className={cn('flex items-center justify-center p-6', {
                              'bg-card border-x border-b border-neutral-200 sm:border-x-[2.5px] sm:border-b-[2.5px] dark:border-neutral-600':
                                col.isHighlighted,
                              'rounded-br-md': colIndex === rowdata.slice(1).length - 1,
                              'rounded-b-md': col.isHighlighted && colIndex < rowdata.slice(1).length - 1
                            })}
                          >
                            {col.hasButton ? (
                              <Button variant='ghost' size='lg' className='w-full max-w-50' asChild>
                                <a href='#'>Get started</a>
                              </Button>
                            ) : null}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionPreset>
      </div>
    </div>
  )
}

export default CompareUILib
