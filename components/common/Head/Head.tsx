import { FC } from 'react'
import NextHead from 'next/head'

const Head: FC = () => {
  return (
    <NextHead>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </NextHead>
  )
}

export default Head
