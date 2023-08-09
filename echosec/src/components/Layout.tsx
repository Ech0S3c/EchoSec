import Footer from "./Footer"
import { Navbar } from "./Navbar"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-max" >
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  )
} 