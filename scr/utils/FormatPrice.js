function FormatPrice(cost, currency, locale) {
  
    return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(cost);
}

export default FormatPrice; 