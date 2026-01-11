# Currency Converter

A modern, responsive currency converter built with React, Vite, and Tailwind CSS. This application allows users to convert between different currencies with real-time exchange rates.

## Features

- 🚀 **Fast & Modern**: Built with React 19 and Vite for optimal performance
- 💱 **Real-time Exchange Rates**: Uses CurrencyAPI.com for accurate, up-to-date rates
- 🎨 **Beautiful UI**: Styled with Tailwind CSS and responsive design
- 🏳️ **Flag Icons**: Country flags for better currency identification
- 🔄 **Swap Functionality**: Easily swap between currencies
- 📱 **Mobile Friendly**: Responsive design that works on all devices

## Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **CurrencyAPI.com** - Real-time currency exchange data
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/UmurAwais/Currency-Converter.git
cd currency-converter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## API Configuration

This app uses CurrencyAPI.com for exchange rates. The API key is already configured in the code. For production use, consider:

1. Getting your own API key from [CurrencyAPI.com](https://currencyapi.com/)
2. Adding environment variables for API keys
3. Implementing proper error handling for API failures

## Project Structure

```
currency-converter/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── InputBox.jsx
│   │   └── index.js
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   ├── utils/
│   │   └── currencyFlags.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Features in Detail

### Currency Conversion
- Select from and to currencies from dropdown menus
- Enter amount to convert
- Real-time conversion with accurate exchange rates
- Swap currencies with one click

### Flag Icons
- Country flags displayed next to currency codes
- Visual identification for better user experience
- Supports 150+ currencies with flag mappings

### Responsive Design
- Works perfectly on desktop, tablet, and mobile
- Clean, modern interface with smooth animations
- Accessible design following best practices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [CurrencyAPI.com](https://currencyapi.com/) for providing exchange rate data
- [FlagCDN](https://flagcdn.com/) for flag icons
- [Unsplash](https://unsplash.com/) for the background image
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) communities
