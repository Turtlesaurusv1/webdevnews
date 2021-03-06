import style from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'

const Layout = ({ children }) => {
  return (
      <>
       <Meta />
      <Nav />
    <div className={style.container}>
    <main className={style.main}>
        <Header/>
    {children}
    </main>

    </div>
      </>

  )
}

export default Layout