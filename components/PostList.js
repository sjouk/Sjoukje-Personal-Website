import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.sort((a, b) => {
            a = new Date(a.frontmatter.date);
            b = new Date(b.frontmatter.date);
            
            return a < b ? 1 : -1;
          }).map((post) => {
            return (
              <li key={post.slug}>
                {post.frontmatter.date}: {` `}
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post?.frontmatter?.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
