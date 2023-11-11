import Footer from 'parts/Footer'
import Header from 'parts/Header'
import PageNotFound from 'parts/PageError/PageNotFound'
import Sitemap from 'parts/Sitemap'
import React from 'react'

export default function NotFound() {
  return (
    <>
      <Header theme='black'></Header>
      <PageNotFound></PageNotFound>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  )
}
