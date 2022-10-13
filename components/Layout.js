import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className=''>{children}</main>
    </div>
  )
}

export default Layout