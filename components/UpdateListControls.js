import PropTypes from 'prop-types';
import React from 'react';

function UpdateListControls({ showReplies, setShowReplies }) {
  return (
    <div className="text-right">
      <label className="replies-button" htmlFor="replies">
        <input
          type="checkbox"
          id="replies"
          checked={showReplies}
          onChange={event => setShowReplies(event.target.checked)}
        />
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 32 32"
        >
          <path d="M14 24.238v7.762l-12-12 12-12v7.932c13.961 0.327 13.362-9.493 9.808-15.932 8.772 9.482 6.909 24.674-9.808 24.238z" />
        </svg>
        {' '}
        <span>{showReplies ? 'Hide replies' : 'Show replies'}</span>
      </label>
    </div>
  );
}

UpdateListControls.propTypes = {
  showReplies: PropTypes.bool.isRequired,
  setShowReplies: PropTypes.func.isRequired,
};

export default UpdateListControls;
