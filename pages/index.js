import React, { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import UpdateList from '../components/UpdateList';

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
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
            integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/static/css/main.css" />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "(function(f, a, t, h, o, m){a[h]=a[h]||function(){(a[h].q=a[h].q||[]).push(arguments)};o=f.createElement('script'),m=f.getElementsByTagName('script')[0];o.async=1; o.src=t; o.id='fathom-script';m.parentNode.insertBefore(o,m)})(document, window, '//fathom.piet.me/tracker.js', 'fathom');fathom('set', 'siteId', 'EIPVY');fathom('trackPageview');",
            }}
          />
        </Head>
        <header>
          <h1 className="title">
            <a href="/">Updates</a>
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
