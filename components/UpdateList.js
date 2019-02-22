import PropTypes from 'prop-types';
import React, { useState, Fragment } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import UpdateItem from './UpdateItem';
import UpdateListControls from './UpdateListControls';

function UpdateList({ updates }) {
  const [showReplies, setShowReplies] = useState(false);
  const items = filterUpdates(updates, { showReplies }).map(update => (
    <div key={update.path}>
      <UpdateItem update={update} />
    </div>
  ));

  return (
    <Fragment>
      <UpdateListControls
        showReplies={showReplies}
        setShowReplies={setShowReplies}
      />
      <section className="update-list">
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {items}
        </CSSTransitionGroup>
      </section>
    </Fragment>
  );
}

UpdateList.propTypes = {
  updates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function filterUpdates(updates, { showReplies }) {
  if (showReplies) return updates;
  return updates.filter(update => !update.data.in_reply_to);
}

export default UpdateList;
