import { FC } from 'react'
import cn from 'clsx'
import s from './Footer.module.css'
import { Link, Container, Logo, Text, Button, Input } from '@components/ui'
import { Send } from '@components/icons'

const Footer: FC<any> = ({ className }) => {
  const rootClassName = cn(s.root, className)
  const linksClassName = cn('hover:underline hover:opacity-60')
  return (
    <footer className={rootClassName}>
      <Container className="pt-20 pb-10 md:pl-48 md:pr-40">
        <div className="flex flex-wrap md:flex-nowrap md:flex-row md:justify-between pb-16 mb-5 border-b border-black/10">
          <div className="text-center w-full md:text-start md:w-auto">
            <div className="mb-8 flex justify-center md:justify-start">
              <Logo className="fill-white" />
            </div>
            <div className="text-white">
              <Text
                variant="sectionHeading"
                className="!text-white !text-2xl !font-medium"
              >
                Never miss an update!
              </Text>
              <p className="max-w-xs mx-auto text-info">
                We are always updating our research and adding new stuff.
                Sign-up and always stay on top of our updates!
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative  md:max-w-xs rounded-full h-14 my-5">
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    className="!pl-8 absolute h-full w-full !bg-transparent
                    placeholder:!text-info text-info invalid:!text-info rounded-full focus:!border-info
                    focus-visible:!border-info focus-within:!border-info active:!border-info outline-none text-sm"
                  />
                  <Button
                    variant="custom"
                    className="!p-0 absolute right-2.5 -translate-y-1/2 top-1/2 m-0 hover:opacity-70"
                    type="submit"
                  >
                    <Send className="h-11 w-11" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-20 md:text-left items-center md:items-start text-center text-info w-full md:w-auto my-4">
            <div className="">
              <Text
                variant="sectionHeading"
                className="!text-white !text-2xl !font-medium"
              >
                About Us
              </Text>
              <ol className="flex flex-col gap-y-6 mb-4 leading-7">
                <li>
                  <Link href="" className={linksClassName}>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    Our Editorial Policy
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    Our Mistakes
                  </Link>
                </li>
              </ol>
            </div>
            <div className="">
              <Text
                variant="sectionHeading"
                className="!text-white !text-2xl !font-medium"
              >
                <Link href="">Resources</Link>
              </Text>
              <ol className="flex flex-col gap-y-6 mb-4 leading-7">
                <li>
                  <Link href="" className={linksClassName}>
                    Continuing <br className="hidden md:block" /> Education
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    For Journalists
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    Student Discount
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    Senior Discount
                  </Link>
                </li>
              </ol>
            </div>
            <div className="">
              <Text
                variant="sectionHeading"
                className="!text-white !text-2xl !font-medium"
              >
                Social
              </Text>
              <ol className="flex flex-col gap-y-6 mb-4 leading-7">
                <li>
                  <Link href="" className={linksClassName}>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="" className={linksClassName}>
                    Email Us
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-info text-sm flex-wrap">
          <small>Copyright 2010 - 2021 Examine Inc.</small>
          <small className="flex items-center">
            <Link href="" className={linksClassName}>
              Privacy Policy
            </Link>
            <span className="border-l border-info h-2 mx-2"></span>
            <Link href="" className={linksClassName}>
              Website Terms
            </Link>
          </small>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
