import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Logger from 'js-logger';
import browserHistory from 'react-router/lib/browserHistory';

import makeRouter from 'router';
import configureStore from 'store';
import LanguageProvider from 'containers/LanguageProvider';
import {
  translationMessages,
  i18nConfigureAndRender,
  DEFAULT_LOCALE,
} from 'i18n';
import { persistStore } from 'persistance';
import { setupLogger } from 'util/logger';

// css reset and global styles
import 'sanitize.css/sanitize.css'; // eslint-disable-line import/first
import 'globalStyles';

setupLogger();
Logger.info('Application starting');

let locale = DEFAULT_LOCALE;
if (navigator && navigator.language) {
  locale = navigator.language;
}

const initialState = {
  language: { locale },
};
const store = configureStore(initialState, browserHistory);

const render = (messages) => {
  const router = makeRouter(store);

  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        {router}
      </LanguageProvider>
    </Provider>,
    document.getElementById('root')
  );
};

// rehydrate state and start rendering etc
persistStore(store, () => {
  i18nConfigureAndRender(() => render(translationMessages));
});
