import React from 'react';
import fetch from 'isomorphic-unfetch';

class Page extends React.Component {
  static async getInitialProps() {
    try {
      const res = await fetch(process.env.UPDATES_API_URL);
      const updates = await res.json();
      return updates;
    } catch (e) {
      return { error: true, message: 'failed to fetch updates' };
    }
  }

  render() {
    const { updates = {}, error } = this.props;
    if (error) {
      return <h3>There was an error</h3>;
    }
    return (
      <ul>
        {updates.map(update => (
          <li key={update.path}>
            <div dangerouslySetInnerHTML={{ __html: update.content.html }} />
            <time>{update.data.date}</time>
          </li>
        ))}
      </ul>
    );
  }
}

export default Page;
