import React, { PropTypes } from 'react';
import { Field, propTypes, reduxForm } from 'redux-form/immutable';
import { injectIntl } from 'react-intl';

import submitAction from 'actions/formSubmit';
import { RenderField, SubmitButton } from 'components/form';
import { types } from './actions';

const validate = (values) => {
  const errors = {};
  const text = values.get('text');

  if (!text) {
    errors.text = 'require';
  }

  return errors;
};

const SampleForm = ({ handleSubmit, invalid, submitting, error, intl }) => (
  <div>
    <p className="form-error">{error}</p>
    <div>
      <Field name="text" label="text" intl={intl} component={RenderField} type="text" />
    </div>
    <div>
      <SubmitButton
        onClick={handleSubmit}
        submitting={submitting}
        disabled={invalid}
      />
    </div>
  </div>
);

SampleForm.propTypes = {
  intl: PropTypes.object.isRequired,
  ...propTypes,
};

export default reduxForm({
  form: 'sample',
  validate,
  onSubmit: submitAction(types.SAMPLE),
})(injectIntl(SampleForm));
