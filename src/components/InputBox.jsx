import React, {useId, useState, useRef, useEffect} from 'react'
import { getFlagUrl, getFlagEmoji } from '../utils/currencyFlags'

// FlagIcon component for displaying flag images
const FlagIcon = ({ currencyCode, size = 16 }) => {
  const [imageError, setImageError] = useState(false);
  const flagUrl = getFlagUrl(currencyCode, size);

  if (flagUrl && !imageError) {
    return (
      <>
        <img
          src={flagUrl}
          alt={`${currencyCode} flag`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            objectFit: 'cover',
            borderRadius: '2px',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '4px'
          }}
          onError={() => setImageError(true)}
        />
      </>
    );
  }

  // Fallback to emoji
  return <span style={{ marginRight: '4px' }}>{getFlagEmoji(currencyCode)}</span>;
};

// Custom dropdown component for better flag display
const CurrencySelect = ({ currencyOptions, selectCurrency, onCurrencyChange, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (currency) => {
    onCurrencyChange(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none flex items-center justify-between min-w-30"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{ pointerEvents: disabled ? 'none' : 'auto', opacity: disabled ? 0.5 : 1 }}
      >
        <div className="flex items-center">
          <FlagIcon currencyCode={selectCurrency} size={16} />
          <span>{selectCurrency}</span>
        </div>
        <span className="ml-2 text-xs">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto mt-1">
          {currencyOptions.map((currency) => (
            <div
              key={currency}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center first:rounded-t-lg last:rounded-b-lg"
              onClick={() => handleSelect(currency)}
            >
              <FlagIcon currencyCode={currency} size={16} />
              <span>{currency}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId()

  return (
    <div className= {`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label
              htmlFor={amountInputId}
              className='text-black/40 mb-2 inline-block'
        >
          {label}
        </label>
        <input
              id={amountInputId}
              className='outline-none w-full bg-transparent py-1.5'
              type='number'
              placeholder='Amount'
              disabled={amountDisable}
              value={amount}
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <CurrencySelect
          currencyOptions={currencyOptions}
          selectCurrency={selectCurrency}
          onCurrencyChange={onCurrencyChange}
          disabled={currencyDisable}
        />
      </div>

    </div>
  )
}

export default InputBox