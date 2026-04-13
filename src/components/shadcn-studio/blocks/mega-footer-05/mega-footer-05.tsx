import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const MegaFooter = () => {
  return (
    <footer>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-4 lg:px-8'>
        <div className='flex flex-col gap-6'>
          <div className='text-lg font-medium'>CONTACT INFO</div>
          <div className='flex flex-col gap-3'>
            <h5 className='font-medium'>Address</h5>
            <p>Shop 009A, Level 4, Block A,Demo Park, New York,USA</p>
            <h5 className='font-medium'>PHONE:</h5>
            <p>+1-613-598-6981</p>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='text-lg font-medium'>QUICK LINKS</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Legal & Privacy</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Gift Card</a>
            </li>
            <li>
              <a href='#'>Customer Service</a>
            </li>
            <li>
              <a href='#'>My Account</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='text-lg font-medium'>POPULAR TAGS</div>
          <div className='flex flex-wrap gap-x-4 gap-y-3'>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Fashion
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Clothings
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Shirt
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Shoes
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Sweater
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Bag
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Table Lamp
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Smart Watch
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Laptop
            </Badge>
            <Badge variant='secondary' className='block rounded-sm text-sm'>
              Accessories
            </Badge>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='text-lg font-medium'>LATEST PRODUCTS</div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2.5'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/mega-footer/image-1.png'
                alt='T-shirt'
                className='size-15 rounded-sm'
              />
              <div className='flex flex-col gap-1.5'>
                <div>Men oversized T-shirt</div>
                <div className='font-semibold'>$59.00</div>
              </div>
            </div>
            <div className='flex items-center gap-2.5'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/mega-footer/image-2.png'
                alt='Heels Sandal'
                className='size-15 rounded-sm'
              />
              <div className='flex flex-col gap-1.5'>
                <div>Women Heels Sandal</div>
                <div className='font-semibold'>$12.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className='mx-auto flex max-w-7xl justify-center px-4 py-6 sm:px-6'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`} <a href='#'>shadcn/studio</a>, Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  )
}

export default MegaFooter
