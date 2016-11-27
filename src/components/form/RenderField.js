import React, { PropTypes } from 'react';

import { formatMessage } from 'translations/messages';
import { InputText } from 'components/form/Input';
import { SpanError, SpanWarning } from 'components/form/Span';

const RenderField = ({ input, name, label, intl, type, meta: { touched, error, warning } }) => {
  const labelText = formatMessage(intl, label);

  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <div>
        <InputText name={name} {...input} placeholder={labelText} type={type} />
        {touched &&
          ((error && <SpanError>{formatMessage(intl, error)}</SpanError>) ||
          (warning && <SpanWarning>{warning}</SpanWarning>))}
      </div>
    </div>
  );
};

/* eslint react/forbid-prop-types: off */
RenderField.propTypes = {
  input: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  intl: PropTypes.object,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default RenderField;
