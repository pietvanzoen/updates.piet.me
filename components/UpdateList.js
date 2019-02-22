import PropTypes from 'prop-types';
import React, { useState } from 'react';
import UpdateItem from './UpdateItem';

function UpdateList({ updates }) {
  const [showReplies, setShowReplies] = useState(false);
  const filteredUpdates = showReplies
    ? updates
    : updates.filter(update => !update.data.in_reply_to);

  return (
    <div>
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
      {filteredUpdates.map(update => (
        <UpdateItem key={update.path} update={update} />
      ))}
    </div>
  );
}

UpdateList.propTypes = {
  updates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UpdateList;
