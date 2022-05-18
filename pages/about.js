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
            <p>Hey there! My name is Sjoukje (shh-ow-kia) and I'm a fullstack software engineer, Master's student and lead coding instructor currently based in Cambridge, MA (usually Amsterdam). 
            I'm studying tech education at Harvard University as a Fulbright and Netherland-America Foundation scholar. I will be graduating
            with my Master's in May 2022. My big interests are currently tech communities, web3 education, and health tech.</p>
          </div> 
        }

        {!toggleDescription && 
          <div className="about">
            <p>
              Hello there! My name is Sjoukje and I'm a Master's student and fullstack software engineer based in Cambridge, MA.  
              I'm studying tech education at Harvard University as a Fulbright and Netherland-America Foundation scholar and will be graduating
            with my Ed.M. in <a href="https://www.gse.harvard.edu/masters/programs/LDIT" target="_blank">Learning Design, Innovation and Technology</a> in May 2022.
            </p>
            <p>
              I teach coding courses, mentor individuals at the start of their tech careers, and help people be their best and true selves in this industry. 
            </p>
            <p>
              I've been an OG women in tech ambassador since 2014, when I first learned what code was and that the gender gap was real.
              Since then, you might know me as a lead coding instructor teaching <a href="https://www.codefirstgirls.org.uk/" target="_blank">Code First Girls</a> 
               courses, the tech community events I organised for <a href="https://bcswomen.bcs.org/" target="_blank">BCSWomen</a>, or my ambassador work 
              for Stanford's <a href="http://www.sheplusplus.com/" target="_blank">SHE++</a>.
              If you need a speaker or a panellist for your org I'll probably do it if I have time! Feel free to 
              <a href="mailto:sjoukjeijlstra@gmail.com">email me</a> so we can discuss it.
            </p>
          </div>
        }
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

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    }
  }
}
