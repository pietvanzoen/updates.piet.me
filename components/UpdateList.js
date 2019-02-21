import PropTypes from 'prop-types';
import React from 'react';
import UpdateItem from './UpdateItem';

function UpdateList({ updates }) {
  return (
    <div>
      {updates.map(update => (
        <UpdateItem key={update.path} update={update} />
      ))}
    </div>
  );
}

UpdateList.propTypes = {
  updates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UpdateList;
