import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import Helmet from 'react-helmet';

import SampleForm from './form';

const Sample = ({ intl }) => (
  <div>
    <Helmet title="Login" />
    <p>Sample</p>
    <SampleForm intl={intl} />
  </div>
);

Sample.propTypes = {
  intl: React.PropTypes.object.isRequired,
};

export default connect()(injectIntl(Sample));
