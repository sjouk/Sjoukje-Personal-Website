import React from 'react';
import Layout from '../components/Layout';

const Content = ({title, description, ...props}) => {
    return (
        <>
            <Layout pageTitle={`${title} | About`} description={description}>
                <div>
                    <h1 className="title">Projects & Content</h1>
                    <p className="description">A selection of my past projects, content and features.</p>

                    <div className="container">
                        <div className="card">
                            <h3><strong>Acing the Tech Interview</strong> Talk</h3>
                            <p>February 2021</p>
                            <iframe src="https://www.icloud.com/keynote/0mxMvPd5YtMkSxRGR7INLNMpg?embed=true" frameBorder="0" allowFullScreen="1" referrer="no-referrer"></iframe>
                        </div>
                        <div className="card">
                            <h3><strong>Epic Women in Tech</strong> Feature</h3>
                            <p>February 2021</p>
                            <a href="https://medium.com/epic-women-in-tech/epic-women-in-tech-sjoukje-ijlstra-18976503213c?source=social.tw&_branch_match_id=809759487983736138" target="_blank">Epic Women in Tech — Sjoukje Ijlstra</a>
                        </div>
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

export default Content;

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)
  
    return {
      props: {
        title: configData.default.title,
        description: configData.default.description,
      },
    }
  }
