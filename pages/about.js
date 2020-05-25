import Layout from '../components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">About Sjoukje</h1>

        <div className="about-short">
            <p>Hey there! My name is Sjoukje (sound!) and I'm a software engineer at JP Morgan. I help women launch their tech careers, nerd out on tech Twitter and catch sea bass on Animal Crossing.</p>
        </div> 

        <div className="about-long">
            <p>
                Hello there! My name is Sjoukje (sound!) and I'm a software engineer at JP Morgan. 
                Before now, I interned at Float in Edinburgh and got a maths degree at the University of St Andrews.
            </p>

            <p>
                I teach Code First: Girls, mentor individuals at the start of their tech careers, and help people be their best selves. 
                In my free time, I read books (link to list!), teach pals how to code, call my friends on Zoom and do workouts with my dad on Instagram (thanks Danica!).
            </p>
            <p>
                I've been a women in tech ambassador since 2014, when I first learned what code was.
                Since then, you might know me from teaching Code First: Girls courses, the tech events I organise for BCSWomen, or my ambassador work for SHE++.
                If you need a speaker, a panellist, a mentor or influencer work for your org, I'll probably do it! 
                Feel free to email me so we can chat!
            </p>
        </div>

        <p className="description">
          I built this with Next.js and deployed it on{' '}
          <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.
        </p>
      </Layout>
      <style jsx>{`
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