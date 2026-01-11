// Currency flag utilities
export const getFlagUrl = (currencyCode, size = 16) => {
  if (!currencyCode) return null;

  // Map currency codes to country codes for flag URLs
  const currencyToCountryMap = {
    'USD': 'us',
    'EUR': 'eu',
    'GBP': 'gb',
    'JPY': 'jp',
    'CAD': 'ca',
    'AUD': 'au',
    'CHF': 'ch',
    'CNY': 'cn',
    'SEK': 'se',
    'NZD': 'nz',
    'MXN': 'mx',
    'SGD': 'sg',
    'HKD': 'hk',
    'NOK': 'no',
    'KRW': 'kr',
    'TRY': 'tr',
    'RUB': 'ru',
    'INR': 'in',
    'BRL': 'br',
    'ZAR': 'za',
    'PKR': 'pk',
    'AED': 'ae',
    'SAR': 'sa',
    'EGP': 'eg',
    'THB': 'th',
    'MYR': 'my',
    'IDR': 'id',
    'PHP': 'ph',
    'VND': 'vn',
    'CZK': 'cz',
    'PLN': 'pl',
    'HUF': 'hu',
    'DKK': 'dk',
    'ILS': 'il',
    'CLP': 'cl',
    'COP': 'co',
    'PEN': 'pe',
    'ARS': 'ar',
    'UYU': 'uy',
    'PYG': 'py',
    'BOB': 'bo',
    'CRC': 'cr',
    'GTQ': 'gt',
    'HNL': 'hn',
    'NIO': 'ni',
    'PAB': 'pa',
    'SVC': 'sv',
    'TWD': 'tw',
    'BND': 'bn',
    'KWD': 'kw',
    'BHD': 'bh',
    'OMR': 'om',
    'JOD': 'jo',
    'LBP': 'lb',
    'QAR': 'qa',
    'YER': 'ye',
    'IQD': 'iq',
    'SYP': 'sy',
    'LYD': 'ly',
    'TND': 'tn',
    'DZD': 'dz',
    'MAD': 'ma',
    'MUR': 'mu',
    'SCR': 'sc',
    'KES': 'ke',
    'TZS': 'tz',
    'UGX': 'ug',
    'RWF': 'rw',
    'BIF': 'bi',
    'ETB': 'et',
    'SOS': 'so',
    'DJF': 'dj',
    'ERN': 'er',
    'NAD': 'na',
    'BWP': 'bw',
    'LSL': 'ls',
    'SZL': 'sz',
    'MWK': 'mw',
    'MZM': 'mz',
    'ZMW': 'zm',
    'ZWL': 'zw',
    'AOA': 'ao',
    'CVE': 'cv',
    'STN': 'st',
    'XAF': 'cm', // Central African CFA franc
    'XOF': 'sn', // West African CFA franc
    'XPF': 'pf', // CFP franc
    'ANG': 'cw', // Netherlands Antillean guilder
    'AWG': 'aw', // Aruban florin
    'BBD': 'bb', // Barbadian dollar
    'BMD': 'bm', // Bermudian dollar
    'BSD': 'bs', // Bahamian dollar
    'BZD': 'bz', // Belize dollar
    'DOP': 'do', // Dominican peso
    'FJD': 'fj', // Fijian dollar
    'GIP': 'gi', // Gibraltar pound
    'GMD': 'gm', // Gambian dalasi
    'GYD': 'gy', // Guyanese dollar
    'HTG': 'ht', // Haitian gourde
    'JMD': 'jm', // Jamaican dollar
    'KYD': 'ky', // Cayman Islands dollar
    'LRD': 'lr', // Liberian dollar
    'MOP': 'mo', // Macanese pataca
    'NPR': 'np', // Nepalese rupee
    'SBD': 'sb', // Solomon Islands dollar
    'SRD': 'sr', // Surinamese dollar
    'TTD': 'tt', // Trinidad and Tobago dollar
    'TVD': 'tv', // Tuvaluan dollar
    'VUV': 'vu', // Vanuatu vatu
    'WST': 'ws', // Samoan tala
    'XCD': 'ag', // East Caribbean dollar
    'FKP': 'fk', // Falkland Islands pound
    'GGP': 'gg', // Guernsey pound
    'IMP': 'im', // Isle of Man pound
    'JEP': 'je', // Jersey pound
    'SHP': 'sh', // Saint Helena pound
    'SLL': 'sl', // Sierra Leonean leone
    'TOP': 'to', // Tongan pa'anga
    'TMT': 'tm', // Turkmenistan manat
    'TJS': 'tj', // Tajikistani somoni
    'UZS': 'uz', // Uzbekistani so'm
    'AFN': 'af', // Afghan afghani
    'ALL': 'al', // Albanian lek
    'AMD': 'am', // Armenian dram
    'AZN': 'az', // Azerbaijani manat
    'BAM': 'ba', // Bosnia and Herzegovina convertible mark
    'BDT': 'bd', // Bangladeshi taka
    'BGN': 'bg', // Bulgarian lev
    'BYN': 'by', // Belarusian ruble
    'GEL': 'ge', // Georgian lari
    'HRK': 'hr', // Croatian kuna
    'ISK': 'is', // Icelandic króna
    'KGS': 'kg', // Kyrgyzstani som
    'KHR': 'kh', // Cambodian riel
    'KZT': 'kz', // Kazakhstani tenge
    'LAK': 'la', // Lao kip
    'LKR': 'lk', // Sri Lankan rupee
    'MDL': 'md', // Moldovan leu
    'MGA': 'mg', // Malagasy ariary
    'MKD': 'mk', // Macedonian denar
    'MMK': 'mm', // Myanmar kyat
    'MNT': 'mn', // Mongolian tögrög
    'MVR': 'mv', // Maldivian rufiyaa
    'PGK': 'pg', // Papua New Guinean kina
    'RON': 'ro', // Romanian leu
    'RSD': 'rs', // Serbian dinar
    'UAH': 'ua', // Ukrainian hryvnia
    'XDR': 'int', // Special drawing rights
  };

  const countryCode = currencyToCountryMap[currencyCode.toUpperCase()];
  if (!countryCode) return null;

  return `https://flagcdn.com/${size}x${Math.round(size * 0.75)}/${countryCode}.png`;
};

export const getFlagEmoji = (currencyCode) => {
  if (!currencyCode) return '';

  // Map currency codes to flag emojis
  const currencyToFlagEmoji = {
    'USD': '🇺🇸',
    'EUR': '🇪🇺',
    'GBP': '🇬🇧',
    'JPY': '🇯🇵',
    'CAD': '🇨🇦',
    'AUD': '🇦🇺',
    'CHF': '🇨🇭',
    'CNY': '🇨🇳',
    'SEK': '🇸🇪',
    'NZD': '🇳🇿',
    'MXN': '🇲🇽',
    'SGD': '🇸🇬',
    'HKD': '🇭🇰',
    'NOK': '🇳🇴',
    'KRW': '🇰🇷',
    'TRY': '🇹🇷',
    'RUB': '🇷🇺',
    'INR': '🇮🇳',
    'BRL': '🇧🇷',
    'ZAR': '🇿🇦',
    'PKR': '🇵🇰',
    'AED': '🇦🇪',
    'SAR': '🇸🇦',
    'EGP': '🇪🇬',
    'THB': '🇹🇭',
    'MYR': '🇲🇾',
    'IDR': '🇮🇩',
    'PHP': '🇵🇭',
    'VND': '🇻🇳',
    'CZK': '🇨🇿',
    'PLN': '🇵🇱',
    'HUF': '🇭🇺',
    'DKK': '🇩🇰',
    'ILS': '🇮🇱',
    'CLP': '🇨🇱',
    'COP': '🇨🇴',
    'PEN': '🇵🇪',
    'ARS': '🇦🇷',
    'UYU': '🇺🇾',
    'PYG': '🇵🇾',
    'BOB': '🇧🇴',
    'CRC': '🇨🇷',
    'GTQ': '🇬🇹',
    'HNL': '🇭🇳',
    'NIO': '🇳🇮',
    'PAB': '🇵🇦',
    'SVC': '🇸🇻',
    'TWD': '🇹🇼',
    'BND': '🇧🇳',
    'KWD': '🇰🇼',
    'BHD': '🇧🇭',
    'OMR': '🇴🇲',
    'JOD': '🇯🇴',
    'LBP': '🇱🇧',
    'QAR': '🇶🇦',
    'YER': '🇾🇪',
    'IQD': '🇮🇶',
    'SYP': '🇸🇾',
    'LYD': '🇱🇾',
    'TND': '🇹🇳',
    'DZD': '🇩🇿',
    'MAD': '🇲🇦',
    'MUR': '🇲🇺',
    'SCR': '🇸🇨',
    'KES': '🇰🇪',
    'TZS': '🇹🇿',
    'UGX': '🇺🇬',
    'RWF': '🇷🇼',
    'BIF': '🇧🇮',
    'ETB': '🇪🇹',
    'SOS': '🇸🇴',
    'DJF': '🇩🇯',
    'ERN': '🇪🇷',
    'NAD': '🇳🇦',
    'BWP': '🇧🇼',
    'LSL': '🇱🇸',
    'SZL': '🇸🇿',
    'MWK': '🇲🇼',
    'MZM': '🇲🇿',
    'ZMW': '🇿🇲',
    'ZWL': '🇿🇼',
    'AOA': '🇦🇴',
    'CVE': '🇨🇻',
    'STN': '🇸🇹',
    'XAF': '🇨🇲',
    'XOF': '🇸🇳',
    'XPF': '🇵🇫',
    'ANG': '🇨🇼',
    'AWG': '🇦🇼',
    'BBD': '🇧🇧',
    'BMD': '🇧🇲',
    'BSD': '🇧🇸',
    'BZD': '🇧🇿',
    'DOP': '🇩🇴',
    'FJD': '🇫🇯',
    'GIP': '🇬🇮',
    'GMD': '🇬🇲',
    'GYD': '🇬🇾',
    'HTG': '🇭🇹',
    'JMD': '🇯🇲',
    'KYD': '🇰🇾',
    'LRD': '🇱🇷',
    'MOP': '🇲🇴',
    'NPR': '🇳🇵',
    'SBD': '🇸🇧',
    'SRD': '🇸🇷',
    'TTD': '🇹🇹',
    'TVD': '🇹🇻',
    'VUV': '🇻🇺',
    'WST': '🇼🇸',
    'XCD': '🇦🇬',
    'FKP': '🇫🇰',
    'GGP': '🇬🇬',
    'IMP': '🇮🇲',
    'JEP': '🇯🇪',
    'SHP': '🇸🇭',
    'SLL': '🇸🇱',
    'TOP': '🇹🇴',
    'TMT': '🇹🇲',
    'TJS': '🇹🇯',
    'UZS': '🇺🇿',
    'AFN': '🇦🇫',
    'ALL': '🇦🇱',
    'AMD': '🇦🇲',
    'AZN': '🇦🇿',
    'BAM': '🇧🇦',
    'BDT': '🇧🇩',
    'BGN': '🇧🇬',
    'BYN': '🇧🇾',
    'GEL': '🇬🇪',
    'HRK': '🇭🇷',
    'ISK': '🇮🇸',
    'KGS': '🇰🇬',
    'KHR': '🇰🇭',
    'KZT': '🇰🇿',
    'LAK': '🇱🇦',
    'LKR': '🇱🇰',
    'MDL': '🇲🇩',
    'MGA': '🇲🇬',
    'MKD': '🇲🇰',
    'MMK': '🇲🇲',
    'MNT': '🇲🇳',
    'MVR': '🇲🇻',
    'PGK': '🇵🇬',
    'RON': '🇷🇴',
    'RSD': '🇷🇸',
    'UAH': '🇺🇦',
    'XDR': '🏛️',
  };

  return currencyToFlagEmoji[currencyCode.toUpperCase()] || '🏛️';
};