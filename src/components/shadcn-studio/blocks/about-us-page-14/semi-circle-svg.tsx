import type { SVGAttributes } from 'react'

const SemiCircleSVG = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='127' height='302' viewBox='0 0 127 302' fill='none' {...props}>
      <path
        d='M126.904 150.593C126.904 233.771 70.0626 301.101 0 301.101L0 0.00023157C70.0626 0.0840634 126.904 67.4146 126.904 150.593Z'
        fill='var(--color-primary)'
      />
    </svg>
  )
}

export default SemiCircleSVG
