import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("PKR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const isLoading = options.length === 0

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) {
      console.error('Currency data not available yet');
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      console.error('Invalid amount:', amount);
      return;
    }

    const result = (numAmount * currencyInfo[to]);
    setConvertedAmount(result);
  }

  return (
    <div 
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-white rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form 
              onSubmit={(e) => {e.preventDefault(); convert()}}
          >
            <div className='w-full mb-1'>
              <InputBox 
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer'
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className='w-full mt-1 mb-4'>
              <InputBox 
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed'
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : `Convert ${from.toUpperCase()} To ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App