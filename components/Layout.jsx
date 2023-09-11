import React from 'react'
import Head from 'next/head'; // that is the same as the head in HTML (Give some META data about the website)
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ( {children } ) => {
  return (
    <div className='layout'>

    <Head>
      <title> Belal's Store </title>
    </Head>

    <header>
      <Navbar />
    </header>

    <main className="main-container">
      {children}
    </main>

    <footer>
      <Footer/>
    </footer>

    </div>
  )
}

export default Layout