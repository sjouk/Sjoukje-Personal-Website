import Layout from '../components/Layout'
import PostList from '../components/PostList'

import getPosts from '../utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <div className="container">
          <div className="header-section">
            <div className="header-frame">
              <h1 className="title">Sjoukje Ijlstra</h1>
              <h2 className="subtitle">Harvard Tech Education Grad Student & Fullstack Software Engineer ✨</h2>
            </div>
            <div className="img-frame">
              <img src="/headshot.jpg" />
            </div>
          </div> 
          <div className="links">
            <a href="http://twitter.com/sjoukjeijlstra" target="_blank">twitter</a>
            <a href="https://www.linkedin.com/in/sjoukje-ijlstra-27607379" target="_blank">linkedin</a>
            <a href="http://codepen.io/sjoukjeijlstra" target="_blank">codepen</a>
            <a href="http://github.com/sjouk" target="_blank">github</a>
            <a href="http://dev.to/sjouk" target="_blank">dev.to</a>
            <a href="mailto:sijlstra@gse.harvard.edu" target="_blank">email</a>
          </div>
          <main>
            <h3>Blog Posts</h3>
            <PostList posts={posts} />
          </main>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          margin: 50px auto;
          padding: 5px;
          max-width: 650px;
        }
        .title {
          margin: 1rem auto;
          font-size: 2rem;
        }
        .subtitle {
          color: #FF006E;
          margin-right: 5px;
        }
        .header-section {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .header-frame {
          max-width: 350px;
          display: block;
        }
        .img-frame {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 0 10px 0;
          border-radius: 50%;
          overflow: hidden;
        }
        .img-frame img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
        }
        .links {
          margin: 25px 0;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
        }
        .links a:not(:last-child) {
          padding: 0 16px 0 0;
        }
        .links a {
          display: block;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
