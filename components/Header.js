import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="/">
            <a>Sjoukje IJlstra</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/current">
            <a>Current Work</a>
          </Link>
          <Link href="/content">
            <a>Past Work</a>
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
          border-bottom: 2px solid #FB5607;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
          margin-left: 20px;

          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
        }
        nav a {
          margin-right: 20px;
        }
        nav a:first-child {
          color: #e991ff;
        }
        @media (min-width: 329px) {
          nav a:first-child {
            padding-right: 2rem;
            border-height: 100px;
            border-right: 2px solid #FB5607;
          }
        }
      `}</style>
    </>
  )
}
