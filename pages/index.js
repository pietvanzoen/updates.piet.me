import React, { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import UpdateList from '../components/UpdateList';
import './modern-normalize.min.css';
import './main.css';

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
        <header>
          <h1>Updates</h1>
          <hr />
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
