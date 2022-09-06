import { FC } from 'react'
// import Link from 'next/link'
import s from './Navbar.module.css'
import cn from 'clsx'
import NavbarRoot from './NavbarRoot'
import { Logo, Container, Button, Link } from '@components/ui'
import { Menu, Search } from '@components/icons'
import { useRouter } from 'next/router'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const router = useRouter()
  return (
    <NavbarRoot>
      <Container clean className="mx-auto max-w-8xl px-4">
        <div className={s.navMobile}>
          <div className="flex items-center">
            <Button
              variant="custom"
              className="bg-purple-400 !px-1.5 !py-1.5 rounded"
            >
              <Menu className="stroke-white" />
            </Button>
            <Logo className="fill-white h-4 w-24" />
          </div>
          <div className="flex items-center mx-2">
            <Search className="h-4 w-4 fill-white" />
          </div>
        </div>
        <div className={s.nav}>
          <div className="flex items-center py-4 md:py-6 basis-[18%]">
            <Logo className="fill-primary h-7 w-18" />
          </div>
          <div
            className={cn(
              s.searchBox,
              'basis-[55%] min-w-[17rem] flex items-center gap-x-2 px-6'
            )}
          >
            <Search className="fill-primary" />
            <input
              placeholder="What do you want to learn about?"
              className="text-primary bg-transparent w-1/2 border-b border-purple-200 font-inter placeholder:text-primary font-normal active:outline-none focus:outline-none"
            />
          </div>
          <div className="flex items-center basis-[26%] justify-end gap-4 px-4 whitespace-nowrap">
            <Link href="/login" className="text-[15px]">
              Login
            </Link>
            <Button
              variant="custom"
              className="bg-premium !py-2.5 !px-5 !rounded-full !text-primary !text-sm !font-semibold"
              onClick={() => router.push('/sign-up')}
            >
              Sign up
            </Button>
            <Button variant="custom" className="p-1">
              <Menu className="stroke-black w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </NavbarRoot>
  )
}

export default Navbar
