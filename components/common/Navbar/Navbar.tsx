import { FC, useState } from 'react'
// import Link from 'next/link'
import s from './Navbar.module.css'
import cn from 'clsx'
import NavbarRoot from './NavbarRoot'
import { Logo, Container, Button, Link, Input } from '@components/ui'
import { Cross, Menu, Search } from '@components/icons'
import { useRouter } from 'next/router'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
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
          <div className="flex items-center py-4 md:py-6 basis-[18%] min-w-[18%]">
            <Logo className="fill-primary h-7 w-18" />
          </div>
          <form
            className={cn(
              s.searchBox,
              'basis-[55%]  flex items-center gap-x-2 px-6'
            )}
            onSubmit={(e) => e.preventDefault()}
          >
            <Button variant="custom" className="!p-0" type="submit">
              <Search className="fill-primary cursor-pointer" />
            </Button>
            <Input
              placeholder="What do you want to learn about?"
              className="!min-w-[18rem] !text-primary !bg-transparent !w-1/2 !border-t-0 !border-x-0 !border-b  !font-inter
               placeholder:!text-primary !font-normal active:!outline-none focus:!outline-none !rounded-none active:!shadow-none focus-within:!shadow-none focus:!shadow-none hover:!shadow-none !px-0"
            />
          </form>
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
            <div
              className={cn(
                'gap-x-4 transition-[width] duration-500 flex overflow-auto py-4 lg:max-w-xl',
                !toggleMenu && '!w-0 overflow-hidden'
              )}
            >
              <Link href="/" className="text-[15px]">
                Categories
              </Link>
              <Link href="/" className="text-[15px]">
                Conditions
              </Link>
              <Link href="/" className="text-[15px]">
                Interventions
              </Link>
              <Link href="/" className="text-[15px]">
                Outcomes
              </Link>
              <Link href="/" className="text-[15px]">
                Membership
              </Link>
              <Link href="/" className="text-[15px]">
                About us
              </Link>
            </div>
            <Button
              variant="custom"
              className="p-1"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu && <Cross className="stroke-black w-5" />}
              {!toggleMenu && <Menu className="stroke-black w-5" />}
            </Button>
          </div>
        </div>
      </Container>
    </NavbarRoot>
  )
}

export default Navbar
