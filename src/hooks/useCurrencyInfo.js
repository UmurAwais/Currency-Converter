import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_9q8K55rZh94dPF1JZyfa910nXuCdPxONhahwbWtJ&base_currency=${currency}`)
        .then((res) => res.json())
        .then((res) => {
            if (res.data) {
                // Transform the data to get just the values
                const rates = {};
                Object.keys(res.data).forEach(key => {
                    rates[key] = res.data[key].value;
                });
                setData(rates);
            } else {
                console.error('Invalid API response:', res)
            }
        })
        .catch((error) => console.error('Error fetching currency data:', error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;