import Layout from '../components/Layout'
import PostList from '../components/PostList'

import getPosts from '../utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Sjoukje Ijlstra</h1>
        <h3 className="subtitle">Software Engineer in Glasgow (remotely in Amsterdam!)</h3>
        <main>
          <h6>Blog Posts</h6>
          <PostList posts={posts} />
        </main>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
        .subtitle {
          font-size: 2em;
          color: grey;
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