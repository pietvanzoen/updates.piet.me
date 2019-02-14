import React from 'react';

function UpdateItem({ update }) {
  const { data, content } = update;
  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />

      <time>{data.date}</time>
      <ul>
        {data.twitter && (
          <li>
            <a href={data.twitter}>Twitter</a>
          </li>
        )}
        {data.mastodon && (
          <li>
            <a href={data.mastodon}>Mastodon</a>
          </li>
        )}
      </ul>
    </article>
  );
}

export default UpdateItem;
