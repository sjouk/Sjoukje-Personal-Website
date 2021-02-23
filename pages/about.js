import Layout from '../components/Layout'
import React, {useState} from 'react';

const About = ({ title, description, ...props }) => {
  const [toggleDescription, setToggleDescription] = useState(false);
  const toggleButtonText = toggleDescription === false ? "Show me a short description" : "Show me a long description";

  function toggle() {
    setToggleDescription(!toggleDescription);
  }

  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <div>
          <h1 className="title">About Sjoukje</h1>
          <button onClick={toggle}>{toggleButtonText}</button>
        </div>
        
        {toggleDescription && 
          <div className="about">
            <p>Hey there! My name is Sjoukje and I'm a fullstack software engineer based in Amsterdam. 
            I help women launch their tech careers, nerd out on tech Twitter and catch sea bass on Animal Crossing.</p>
          </div> 
        }

        {!toggleDescription && 
          <div className="about">
              <p>
                  Hello there! My name is Sjoukje and I'm a fullstack software engineer based in Amsterdam. I am also a freelance coding instructor at <a href="https://www.codefirstgirls.com/" target="_blank">Code First Girls</a>. 
                  Before now, I was a software engineer at <a href="https://www.jpmorgan.com" target="_blank">JP Morgan</a> in Glasgow, and an intern at <a href="https://www.floatapp.com" target="_blank">Float</a> in Edinburgh. 
                  In 2018 I received my maths degree from the University of St Andrews in Scotland.
              </p>
              <p>
                  I teach coding courses, mentor individuals at the start of their tech careers, and help people be their best selves in this industry. 
                  In my free time, I read <a href="/post/readinglist">lots of books</a>, teach pals how to code and call my friends on Zoom.
              </p>
              <p>
                  I've been a women in tech ambassador since 2014, when I first learned what code was.
                  Since then, you might know me from teaching <a href="https://www.codefirstgirls.org.uk/" target="_blank">Code First: Girls</a> courses, the tech events I organise for <a href="https://bcswomen.bcs.org/" target="_blank">BCSWomen</a>, or my ambassador work for <a href="http://www.sheplusplus.com/" target="_blank">SHE++</a>.
                  If you need a speaker, a panellist, a mentor or influencer work for your org, I'll probably do it! 
                  Feel free to <a href="mailto:sjoukjeijlstra@gmail.com">email me</a> so we can chat!
              </p>
          </div>
        }

        <p className="description">
          I built this with Next.js and deployed it on{' '}
          <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.
        </p>
      </Layout>
      <style jsx>{`
        .title {
          float: left;
        }
        .about {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        button {
          background: #FD2B3B;
          width: 200px;
          height: 100%;
          border: none 4px;
          color: white;
          margin-left: 10px;
          float: right;
        }
        button:hover {
          background: #FF707C;
        }
      `}</style>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
