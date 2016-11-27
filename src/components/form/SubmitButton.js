import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import { messages } from 'translations/messages';

const SubmitButton = ({ onClick, submitting, disabled, children, className, intl }) => {
  const send = intl.formatMessage(messages.submitButton, { submitting: submitting ? 'yes' : 'no' });

  return (
    <button onClick={onClick} disabled={submitting || disabled} className={className}>
      {children || send }
    </button>
  );
};

/* eslint react/forbid-prop-types: off */
SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.element,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(styled(SubmitButton)`
  border: 1px solid ccc;
  border-radius: 4px;
  background-color: #ddd;
  padding: 4px 8px;

  &:disabled {
    color: #fff;
  }

  &:active {
    background-color: #ccf;
  }
`);
