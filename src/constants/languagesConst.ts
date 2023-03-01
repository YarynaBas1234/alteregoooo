export enum LanguagesConst {
  English = 'en',
  Ukrainian = 'ua',
};

export const languages = [
  {
    label: LanguagesConst.English.toUpperCase(),
    value: LanguagesConst.English,
  },
  {
    label: LanguagesConst.Ukrainian.toUpperCase(),
    value: LanguagesConst.Ukrainian,
  },
];

export const defaultLanguage = LanguagesConst.English;
