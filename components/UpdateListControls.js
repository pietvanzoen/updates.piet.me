import PropTypes from 'prop-types';
import React from 'react';

function UpdateListControls({ showReplies, setShowReplies }) {
  return (
    <form className="text-right text-small pure-form">
      <label className="pure-checkbox" htmlFor="replies">
        <input
          type="checkbox"
          id="replies"
          checked={showReplies}
          onChange={event => setShowReplies(event.target.checked)}
        />
        {' '}
        Show replies
      </label>
    </form>
  );
}

UpdateListControls.propTypes = {
  showReplies: PropTypes.bool.isRequired,
  setShowReplies: PropTypes.func.isRequired,
};

export default UpdateListControls;
