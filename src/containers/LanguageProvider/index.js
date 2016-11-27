import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createSelector } from 'reselect';

import { selectLocale } from './selectors';

const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
);

LanguageProvider.propTypes = {
  locale: React.PropTypes.string.isRequired,
  messages: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
};

const mapStateToProps = createSelector(
    selectLocale,
    locale => ({ locale })
);

export default connect(mapStateToProps)(LanguageProvider);
