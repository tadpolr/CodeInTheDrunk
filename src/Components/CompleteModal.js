import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

const CompleteModal = ({ onClose, open, name = '' }) => {
  return (
    <Dialog onClose={onClose} open={open} aria-labelledby="simple-dialog-title">
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '42px' }}
      >
        <h1 style={{ marginBottom: '32px' }}>Congratulation!</h1>
        <img
          width={'300px'}
          src="/images/congrats.png"
          alt="beer"
          style={{ marginBottom: '20px' }}
        />
        <h2>{name.toUpperCase()} has finished all the tasks.</h2>
      </div>
    </Dialog>
  );
};

export default CompleteModal;
