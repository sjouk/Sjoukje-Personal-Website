import Head from 'next/head'

import Header from './Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
        <link rel="shortcut icon" href="/headshot.png" />
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet' />
        <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sjoukje" data-description="Help me support more women in tech ✨" data-message="Hey you! Over here!" data-color="#79D6B5" data-position="right" data-x_margin="18" data-y_margin="18"></script>
      </Head>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Roboto Mono';
          color: #1d1e1f;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: bold;
        }
        a {
          color: #FFBE0B;
          text-decoration: none;
        }
        .content {
          padding: 2rem 40px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: left;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 2px solid #FB5607;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0;
        }
        footer img {
          padding: 0 5px;
          height: 1rem;
        }
        a:hover {
          color: royalblue;
          text-decoration: underline wavy hotpink;
        }
      `}</style>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>
        Built with <img src="/netliheart.svg" alt="Netlify Heart" /> for you
      </footer>
    </>
  )
}