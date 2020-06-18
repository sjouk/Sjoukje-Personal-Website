import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="/">
            <a>Sjoukje's Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Let's Talk</a>
          </Link>
        </nav>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-bottom: 2px solid #FB5607;;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
        }
        nav a {
          margin-right: 20px;
        }
      `}</style>
    </>
  )
}