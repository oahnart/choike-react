import React from 'react';
import { connect } from 'react-redux';

import './Loading.scss';

const Loading = ({ isLoading, dark }) => {
  return (
    <div
      className={`loading-wrapper ${isLoading ? 'ld-show' : 'ld-hide'} ${
        dark ? 'ld-dim-dark' : 'ld-dim-light'
      }`}
    >
      <div className="middle-sreen">
        <div className="loader" />
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    isLoading: state.systemReducer.isLoading,
  }),
  {}
)(Loading);
