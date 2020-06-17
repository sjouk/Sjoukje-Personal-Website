import Layout from '../components/Layout'
import React, {useState} from 'react';
import { InlineWidget } from "react-calendly"

const Contact = ({ title, description, ...props }) => {

  return (
    <>
      <Layout pageTitle={`${title} | Let's Talk`}>
        <h1 className="title">Let's Talk!</h1>

        <InlineWidget className="calendly" color="#00a2ff" text="Request a Demo" textColor="#ffffff" url="https://calendly.com/sjoukje" />
        
      </Layout>
      <style jsx>{`
        .calendly {
            min-width: 320px;
            height: 630px;
            margin: 10px;
        }
      `}</style>
    </>
  )
}

export default Contact

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}