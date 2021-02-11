import Layout from '../components/Layout'
import PostList from '../components/PostList'

import getPosts from '../utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        {/* <img id="backgroundimage" src="/circle-hero.png" border="0" alt="" /> */}
        <div className="container">
          <div className="header-section">
            <div className="header-frame">
              <h1 className="title">Sjoukje Ijlstra</h1>
              <h2 className="subtitle">Fullstack Software Engineer ✨ (remote in Amsterdam!)</h2>
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
            <a href="mailto:sjoukjeijlstra@gmail.com" target="_blank">email</a>
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
        #backgroundimage {
          height: 40%;
          left: 0;
          margin: 0;
          min-height: 100px;
          min-width: 100px;
          padding: 0;
          position: fixed;
          top: 10%;
          width: 1;
          z-index: -1;
          border-radius: 30% 60% 50% 40%;
        }
        .links {
          margin: 25px 0;
          display: block;
        }
        .links a:not(:last-child) {
          padding: 0 16px 0 0;
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
