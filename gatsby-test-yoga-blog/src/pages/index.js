import tw from "twin.macro"
import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogPreview from 'components/BlogPreview'
import github from "../images/github.svg"


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

export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Welcome" />
        <Main>
        <BlogPreview/>
        <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(252, 129, 129,0.7)" />
            <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(252, 129, 129, 0.5)" />
            <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(252, 129, 129, 0.3)" />
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fc8181" />
          </g>
        </svg>
      </div>
          <Footer>
            <a
              href="https://github.com/pauloelias/gatsby-tailwind-emotion-starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SmallIcon src={github} alt="Github Icon" />
            </a>
          </Footer>
        </Main>
      </Wrapper>
    </Layout>
  )
}
