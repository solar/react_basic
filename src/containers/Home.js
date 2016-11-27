import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { injectIntl } from 'react-intl';

import { messages } from 'translations/messages';

const Home = ({ intl }) => (
  <div>
    <p>{intl.formatMessage(messages.home)}</p>
    <p>Home desu!</p>
    <p><Link to="/sample">Sample</Link></p>
  </div>
);

Home.propTypes = {
  intl: React.PropTypes.object,
};

export default connect()(injectIntl(Home));
