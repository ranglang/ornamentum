import { ExampleFile, FileType } from 'helper-models';

export const translationsNoDataMessageUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-no-data-message-usage.component.ts',
    content: require('!!raw-loader!./example/translations-no-data-message-usage/translations-no-data-message-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-no-data-message-usage.component.html',
    content: require('!!raw-loader!./example/translations-no-data-message-usage/translations-no-data-message-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'translations-no-data-usage.module.ts',
    content: require('!!raw-loader!./example/translations-no-data-message-usage/translations-no-data-message-usage.module.md')
  }
];

export const additionalTranslationsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'additional-translations-usage.component.ts',
    content: require('!!raw-loader!./example/additional-translations-usage/additional-translations-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'additional-translations-usage.component.html',
    content: require('!!raw-loader!./example/additional-translations-usage/additional-translations-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'additional-translations-usage.module.ts',
    content: require('!!raw-loader!./example/additional-translations-usage/additional-translations-usage.module.md')
  }
];

export const translationsFilterPlaceholderUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-filter-placeholder-usage.component.ts',
    content: require(
      '!!raw-loader!./example/translations-filter-placeholder-usage/translations-filter-placeholder-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-filter-placeholder-usage.component.html',
    content: require('!!raw-loader!./example/translations-filter-placeholder-usage/translations-filter-placeholder-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'translations-filter-placeholder-usage.module.ts',
    content: require('!!raw-loader!./example/translations-filter-placeholder-usage/translations-filter-placeholder-usage.module.md')
  }
];

export const translationsSelectPlaceholderUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-select-placeholder-usage.component.ts',
    content: require(
      '!!raw-loader!./example/translations-select-placeholder-usage/translations-select-placeholder-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-select-placeholder-usage.component.html',
    content: require('!!raw-loader!./example/translations-select-placeholder-usage/translations-select-placeholder-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'translations-select-placeholder-usage.module.ts',
    content: require('!!raw-loader!./example/translations-select-placeholder-usage/translations-select-placeholder-usage.module.md')
  }
];

export const translationsSelectedItemWrapPlaceholderUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-selected-item-wrap-placeholder-usage.component.ts',
    content: require('!!raw-loader!./example/translations-selected-item-wrap-placeholder-usage/' +
      'translations-selected-item-wrap-placeholder-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-selected-item-wrap-placeholder-usage.component.html',
    content: require('!!raw-loader!./example/translations-selected-item-wrap-placeholder-usage/' +
      'translations-selected-item-wrap-placeholder-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'translations-selected-item-wrap-placeholder-usage.module.ts',
    content: require('!!raw-loader!./example/translations-selected-item-wrap-placeholder-usage/' +
      'translations-selected-item-wrap-placeholder-usage.module.md')
  }
];

export const demoSnippet: any = {
  translations: require('!!raw-loader!./docs/translations.md')
};
