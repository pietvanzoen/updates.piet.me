import React, { Fragment } from 'react';
import { format, distanceInWordsStrict } from 'date-fns';
import classNames from 'classnames';
import LinkData from './LinkData';

const GITHUB_URL = 'https://github.com/pietvanzoen/updates/blob/master/';

function UpdateItem({ update }) {
  const {
    data, html, path, linkData = null,
  } = update;
  return (
    <Fragment>
      <a name={path} />
      <article className="update">
        <header
          className={classNames('update-header', { hidden: !data.in_reply_to })}
        >
          {data.in_reply_to && (
            <span className="update-reply-to-link">
              Replying to
              {' '}
              <a href={data.in_reply_to}>{`${cleanURL(data.in_reply_to)}`}</a>
            </span>
          )}
        </header>
        <section className="update-body">
          <div
            className="update-content"
            dangerouslySetInnerHTML={{ __html: enhanceContent(html) }}
          />
          {linkData && linkData.map(l => <LinkData data={l} />)}
        </section>

        <footer className="pure-g update-footer">
          <div className="pure-u-1 pure-u-sm-1-2">
            <a href={`#${path}`}>
              <LinkIcon />
            </a>
            &nbsp;
            <time
              dateTime={data.date}
              title={format(data.date, 'YYYY/MM/DD HH:mm')}
            >
              {`${distanceInWordsStrict(data.date, new Date())} ago`}
            </time>
          </div>
          <div className="pure-u-1 pure-u-sm-1-2 update-footer-links text-right">
            {data.twitter && (
              <a
                href={
                  Array.isArray(data.twitter) ? data.twitter[0] : data.twitter
                }
              >
                Twitter
              </a>
            )}
            {data.mastodon && <a href={data.mastodon}>Mastodon</a>}
            {<a href={`${GITHUB_URL}${path}`}>Source</a>}
          </div>
        </footer>
      </article>
    </Fragment>
  );
}

function enhanceContent(html) {
  return html.replace('<img ', '<img class="pure-img" ');
}

function isSelected(path) {
  return window.location.hash === `#${path}`;
}

function LinkIcon() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 32 32"
    >
      <title>link</title>
      <path
        fill="#aaa"
        d="M13.757 19.868c-0.416 0-0.832-0.159-1.149-0.476-2.973-2.973-2.973-7.81 0-10.783l6-6c1.44-1.44 3.355-2.233 5.392-2.233s3.951 0.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743c-0.635 0.635-1.663 0.635-2.298 0s-0.635-1.663 0-2.298l2.743-2.743c1.706-1.706 1.706-4.481 0-6.187-0.826-0.826-1.925-1.281-3.094-1.281s-2.267 0.455-3.094 1.281l-6 6c-1.706 1.706-1.706 4.481 0 6.187 0.635 0.635 0.635 1.663 0 2.298-0.317 0.317-0.733 0.476-1.149 0.476z"
      />
      <path
        fill="#aaa"
        d="M8 31.625c-2.037 0-3.952-0.793-5.392-2.233-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743c0.635-0.635 1.664-0.635 2.298 0s0.635 1.663 0 2.298l-2.743 2.743c-1.706 1.706-1.706 4.481 0 6.187 0.826 0.826 1.925 1.281 3.094 1.281s2.267-0.455 3.094-1.281l6-6c1.706-1.706 1.706-4.481 0-6.187-0.635-0.635-0.635-1.663 0-2.298s1.663-0.635 2.298 0c2.973 2.973 2.973 7.81 0 10.783l-6 6c-1.44 1.44-3.355 2.233-5.392 2.233z"
      />
    </svg>
  );
}

function cleanURL(url) {
  return url.replace(/http[s]:\/\//, '');
}

export default UpdateItem;
