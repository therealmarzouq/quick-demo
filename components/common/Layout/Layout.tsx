import cn from 'clsx'
import s from './Layout.module.css'
import { Navbar, Footer } from '@components/common'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className={cn(s.root)}>
      <Navbar />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
