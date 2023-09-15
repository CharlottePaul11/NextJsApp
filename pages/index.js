import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>

      <main>
        <h1 className={styles.title}>
          Read <Link href="/posts/first-post">Calculator!</Link>
        </h1>

        <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Calculator</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
      </ul>

        <p className={styles.description}>
          A project created by Team CommodoreTM.
        </p>

        <body>
          <div class="sidebar">
            <div class="logo_content">
              <div class="logo_name">Calculator</div>
            </div>


          </div>

        </body>
        
      </main>

    

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }

        li {
          display: list-item;
          text-align: -webkit-match-parent;
        }

        .nav-tabs {
          --bs-nav-tabs-border-width: var(--bs-border-width);
          -bs-nav-tabs-border-color: var(--bs-border-color);
          --bs-nav-tabs-border-radius: var(--bs-border-radius);
          --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);
          --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);
          --bs-nav-tabs-link-active-bg: var(--bs-body-bg);
          --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);
          border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
        }

        .nav {
          --bs-nav-link-padding-x: 1rem;
          --bs-nav-link-padding-y: 0.5rem;
          --bs-nav-link-font-weight: ;
          --bs-nav-link-color: var(--bs-link-color);
          --bs-nav-link-hover-color: var(--bs-link-hover-color);
          --bs-nav-link-disabled-color: var(--bs-secondary-color);
          display: flex;
          flex-wrap: wrap;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
        }

      `}</style>
    </div>
  );
}
