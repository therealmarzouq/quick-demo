import { Layout } from '@components/common'
import { Apple, Facebook, Google } from '@components/icons'
import { Button, Container, Input, Text, Link } from '@components/ui'
import { useState } from 'react'

export default function Login() {
  const [passwordInputType, setPasswordInputType] = useState<
    'password' | 'text'
  >('password')
  return (
    <Container className="pt-8 md:pt-20">
      <div className="mx-auto max-w-[540px] rounded-[30px] md:px-14 md:pt-12 md:pb-8 md:shadow-[0px_2px_12px_rgba(0,0,0,0.08)]">
        <Text variant="sectionHeading" className="text-center">
          Welcome back! 👋
        </Text>
        <p className="font-normal text-center text-sm text-tertiary">
          Let&#x2019;s build someting great
        </p>
        <div className="flex gap-4 justify-center mt-8 mb-4">
          <Button variant="socialAuthentication">
            <Google />
          </Button>
          <Button variant="socialAuthentication">
            <Apple />
          </Button>
          <Button variant="socialAuthentication">
            <Facebook />
          </Button>
        </div>
        <div className="mt-5 flex w-full items-center my-5">
          <div className="flex-grow border-t border-[#EDF2F7]" />
          <span className="mx-6 flex-shrink text-xs text-gray-600">OR</span>
          <div className="flex-grow border-t border-[#EDF2F7]" />
        </div>

        <div className="mt-6">
          <div className="flex flex-col space-y-4 md:space-y-5">
            <Input type="email" placeholder="Email" className="w-full" />
            <div className="relative">
              <Input
                type={passwordInputType}
                placeholder="Password"
                className="w-full"
              />
              <Button
                onClick={() =>
                  passwordInputType === 'password'
                    ? setPasswordInputType('text')
                    : setPasswordInputType('password')
                }
                variant="custom"
                className="uppercase absolute right-3 top-1/2 -translate-y-1/2 !text-xs font-bold leading-[1.5] tracking-[0.01em] text-purple-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-600"
              >
                {passwordInputType === 'password' ? 'show' : 'hide'}
              </Button>
            </div>
          </div>
          <Button variant="primary" className="w-full mt-8 md:mt-6">
            Login
          </Button>
          <Link
            href=""
            className="block border border-dashed text-green-700
            text-center bg-[#25a1af1a] border-secondary my-8 py-4 rounded-md"
          >
            <div className="font-lora text-lg">Click here</div>
            <p className="text-sm px-5">
              to sign up for the complete Examine Membership. Includes a free 2
              week trial!
            </p>
          </Link>
        </div>
      </div>
    </Container>
  )
}

Login.Layout = Layout
