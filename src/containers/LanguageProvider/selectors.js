import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
export const selectLanguage = state => state.get('language');

/**
 * Select the language locale
 */
export const selectLocale = createSelector(
  selectLanguage,
  languageState => languageState.get('locale')
);
