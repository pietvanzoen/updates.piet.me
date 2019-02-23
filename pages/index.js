import React, { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import UpdateList from '../components/UpdateList';

const { NODE_ENV } = process.env;

const CSS_PATH = NODE_ENV === 'production' ? '/static/style.min.css' : '/static/style.css';

class Page extends React.Component {
  static async getInitialProps() {
    try {
      const res = await fetch(process.env.UPDATES_API_URL);
      const updates = await res.json();
      return updates;
    } catch (e) {
      console.error(e);
      return { error: true, message: 'failed to fetch updates' };
    }
  }

  render() {
    const { updates = {}, error } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Updates - Piet van Zoen</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="stylesheet" href={CSS_PATH} />
          <script
            async
            dangerouslySetInnerHTML={{
              __html:
                "(function(f, a, t, h, o, m){a[h]=a[h]||function(){(a[h].q=a[h].q||[]).push(arguments)};o=f.createElement('script'),m=f.getElementsByTagName('script')[0];o.async=1; o.src=t; o.id='fathom-script';m.parentNode.insertBefore(o,m)})(document, window, '//fathom.piet.me/tracker.js', 'fathom');fathom('set', 'siteId', 'EIPVY');fathom('trackPageview');",
            }}
          />
        </Head>
        <header className="page-header">
          <h1>
            <a href="https://updates.piet.me" className="page-header-profile">
              <img
                alt="Piet van Zoen"
                className="page-header-img pure-img"
                src="/static/images/me-usabilla.jpg"
              />
              <span>Piet van Zoen - Updates</span>
            </a>
          </h1>
        </header>
        {error && <h3>There was an error</h3>}
        {!error && <UpdateList updates={updates} />}
        <footer>
          <p>
            <small>
              &copy;&nbsp;
              {new Date().getFullYear()}
              {' '}
              <a href="https://piet.me">Piet van Zoen</a>
            </small>
          </p>
        </footer>
      </Fragment>
    );
  }
}

export default Page;
