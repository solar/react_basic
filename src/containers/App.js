import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

const App = ({ className, children }) => (
  <div className={className}>
    <Helmet title="Site title" />
    <div>-----header-----</div>
    {children}
    <div>-----footer-----</div>
  </div>
);

App.propTypes = {
  className: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
};

export default connect()(styled(App)`
  height: 100%
`);
