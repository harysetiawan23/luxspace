
import Header from 'parts/Header'
import React from 'react'
import Breadcrumb from 'components/Breadcrumb';
import Sitemap from 'parts/Sitemap';
import Footer from 'parts/Footer';
import ProductDetail from 'parts/Details/ProductDetail';
import Suggestion from 'parts/Details/Suggestion';

export default function Details() {
  return (
    <>
      <Header theme="black"></Header>
      <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/categories/1", name: "Office Room" },
        { url: "#", name: "Details" }
      ]}></Breadcrumb>

      <ProductDetail></ProductDetail>
      <Suggestion></Suggestion>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  )
}
