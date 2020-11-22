import tw from "twin.macro"
import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import github from "../images/github.svg"
import Landing from "../components/Landing"


const Wrapper = tw.div`
  flex items-center justify-center 
  bg-gradient-to-br from-rose-700 to-rose-300 
  flex-col h-full
`

const Main = tw.div`
  p-2 m-6 bg-gray-100 rounded-lg shadow-2xl
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

const Text = tw.p`
  text-xl text-gray-700
`

const Logos = tw.div`
  flex items-center justify-around mb-6 px-16
`

const Icon = tw.img`
  h-10
`

const Footer = tw.footer`
  mt-6 text-center
`

const SmallIcon = tw.img`
  inline-block h-6
`

export default function Q() {
  return (
<Layout>
<main tw='h-full'>

  <Landing/>
</main>
</Layout>
        )
      }
        
