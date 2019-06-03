import React from 'react';
import PropTypes from 'prop-types';

function LinkData({ data }) {
  if (!data) return '';
  const {
    ogUrl, ogTitle, ogDescription, ogImage,
  } = data;
  if (!ogUrl) return '';
  const domain = ogUrl
    .replace('http://', '')
    .replace('https://', '')
    .split(/[/?#]/)[0];
  return (
    <a href={ogUrl} className="link-box pure-g">
      <div className="pure-u-sm-3-4 link-box-content pure-u-1">
        <h3 className="link-box-title">{`${ogTitle}`}</h3>
        <p>{ogDescription}</p>
        <span className="text-accent">{domain}</span>
      </div>
      {ogImage && ogImage.url && (
        <div className="pure-u-sm-1-4 pure-u-1 link-box-img">
          <img className="pure-img pure-u-2" alt={ogTitle} src={ogImage.url} />
        </div>
      )}
    </a>
  );
}

LinkData.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LinkData;
