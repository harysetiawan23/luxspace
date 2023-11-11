import React from 'react'

import Header from 'parts/Header';
import Hero from 'parts/Homepage/Hero';
import JustArrive from 'parts/Homepage/JustArrive';
import BrowseRoom from 'parts/Homepage/BrowseRoom';
import Clients from 'parts/Clients';
import Sitemap from 'parts/Sitemap';
import Footer from 'parts/Footer';
import useScrollAnchor from 'helpers/hooks/useScrollAnchor';
import useModalDOM from 'helpers/hooks/useModalDOM';
export default function Homepage(props) {
  useScrollAnchor();
  useModalDOM()

  return (
    <>
      <Header theme="white" position="absolute"></Header>
      <Hero></Hero>
      <BrowseRoom></BrowseRoom>
      <JustArrive></JustArrive>
      <Clients></Clients>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  )
}
