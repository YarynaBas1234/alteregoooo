import React from 'react';

import { languageService, localStorageService } from 'src/services';
import { defaultLanguage, LanguagesConst } from 'src/constants';
import { ISelectEventFunction } from 'src/interfaces';

export const useChangeLanguage = () => {
  React.useEffect(() => {
    const currentLanguage = localStorageService.getFromLocalStorage('language');

    !currentLanguage && localStorageService.addToLocalStorage('language', defaultLanguage);
    languageService.changeLanguage(currentLanguage as LanguagesConst);
  }, []);

  const onSelectOptionChange: ISelectEventFunction = React.useCallback(event => {
    localStorageService.addToLocalStorage('language', event.target.value);
    languageService.changeLanguage(event.target.value as LanguagesConst);
  }, []);

  return onSelectOptionChange;
};
