import React from 'react';
import fetch from 'isomorphic-unfetch';

class Page extends React.Component {
  static async getInitialProps() {
    const res = await fetch(
      'https://raw.githubusercontent.com/pietvanzoen/updates/master/updates.json',
    );
    const updates = await res.json();
    return updates;
  }

  render() {
    const { updates = {} } = this.props;
    return (
      <ul>
        {updates.map(update => (
          <li dangerouslySetInnerHTML={{ __html: update.content.html }} />
        ))}
      </ul>
    );
  }
}

export default Page;
