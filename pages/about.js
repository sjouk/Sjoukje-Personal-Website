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
        <h1 className="title">About Sjoukje</h1>

        <button onClick={toggle}>{toggleButtonText}</button>
        
        {toggleDescription && 
          <div className="about about-short">
            <p>Hey there! My name is Sjoukje (sound!) and I'm a software engineer at <a href="https://www.jpmorgan.com/" target="_blank">JP Morgan</a>. 
            I help women launch their tech careers, nerd out on tech Twitter and catch sea bass on Animal Crossing.</p>
          </div> 
        }

        {!toggleDescription && 
          <div className="about about-long">
              <p>
                  Hello there! My name is Sjoukje (sound!) and I'm a software engineer at <a href="https://www.jpmorgan.com/" target="_blank">JP Morgan</a>. 
                  Before now, I was a software engineer intern at <a href="https://www.floatapp.com" target="_blank">Float</a> in Edinburgh and got a maths degree at the University of St Andrews.
                  My summers working as a camp counsellor manager laid a foundation of leadership and taught me how to guide 50 teenagers through the streets of Oxford without major accidents.
              </p>

              <p>
                  I teach coding courses, mentor individuals at the start of their tech careers, and help people be their best selves. 
                  In my free time, I read books (link to list!), teach pals how to code, call my friends on Zoom and do workouts with my dad on Instagram (thanks <a href="https://www.instagram.com/danicapatrick/?hl=en" target="_blank">Danica</a>!).
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
        .about {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .about-short {
            width: 40%;
        }
        .about-long {
            width: 40%;
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