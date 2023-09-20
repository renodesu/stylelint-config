const { propertyGroups } = require('stylelint-config-clean-order')

const propertiesOrder = propertyGroups.map(properties => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never', // Don't add empty lines between order groups.
  properties,
}))

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  customSyntax: 'postcss-scss',
  rules: {
    'declaration-property-value-no-unknown': true,
    'selector-class-pattern': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
}
