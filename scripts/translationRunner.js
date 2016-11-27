// translationRunner.js
import manageTranslations from 'react-intl-translations-manager';

manageTranslations({
  messagesDirectory: 'build/messages',
  translationsDirectory: 'src/translations/',
  languages: ['en', 'ja']
});
