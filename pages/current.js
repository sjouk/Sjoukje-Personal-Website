import React from 'react';
import Layout from '../components/Layout';

const Current = ({title, description, ...props}) => {
    return (
        <>
            <Layout pageTitle={`${title} | About`} description={description}>
                <div>
                    <h1 className="title">Current Work & Interests</h1>
                    <p className="description">Some bits I'm currently working on</p>
                    <div className="container">
                        <ul>👩‍💻 Developing an immersive "inclusion in tech" hackathon for high school aged students worldwide</ul>
                        <ul>👩🏻‍⚕️ Developing a digital marketplace that matches nurses to pediatric Medicaid careseekers</ul>
                        <ul>📚 Advising a big American bank on improving their data science and AI summer camps for underrepresented groups in tech</ul>
                    </div>
                    <p className="description">My current interests</p>
                    <div className="container">
                        <ul>🌀 Upgrading my development skills from web2 to web3 with buildspace + other crypto communities</ul>
                        <ul>👩‍💻 Developing technical education courses that motivate, inspire and deeply engage the learner</ul>
                        <ul>✈️ Exploring the United States and meeting new people</ul>
                    </div>
                </div>
            </Layout>
            <style jsx>{`
                .description {
                    font-style: italic;
                }
                .container {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    margin-top: 2rem;
                    align-items: flex-start;
                }
                .card {
                    margin: 1rem;
                    padding: 1.5rem;
                    border: 1px solid #e991ff;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }
                .card p {
                    margin: 0 0 1rem 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }
                .card:hover,
                .card:focus,
                .card:active {
                    border-color: #a8dadc;
                }
                .card iframe {
                    width: 100%;
                }
            `}
            </style>
        </>
    );
}

export default Current;

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)
  
    return {
      props: {
        title: configData.default.title,
        description: configData.default.description,
      },
    }
  }
