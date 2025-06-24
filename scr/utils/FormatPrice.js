function FormatPrice(cost, locale) {
  let currency;
  switch (locale) {
    case 'ru-RU':
      currency = 'RUB';
      break;
    case 'en-US':
      currency = 'USD';
      break;
    case 'fr-FR':
      currency = 'EUR';
      break;
    
  }
  return new Intl.NumberFormat(locale, {
  style: 'currency',
  currency,
  }).format(cost);
}

export default FormatPrice; 