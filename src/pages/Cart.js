import Breadcrumb from 'components/Breadcrumb'
import ShippingDetail from 'parts/Cart/ShippingDetail'
import ShoppingCart from 'parts/Cart/ShoppingCart'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import Sitemap from 'parts/Sitemap'
import React from 'react'


export default function Cart() {
  return (
    <>
      <Header theme="black"></Header>
      <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/cart", name: "Shoping Cart" },
      ]}></Breadcrumb>

      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart></ShoppingCart>
            <ShippingDetail></ShippingDetail>
          </div>
        </div>
      </section>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  )
}
