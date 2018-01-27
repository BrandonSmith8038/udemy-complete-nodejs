const axios = require('axios')


const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get(`https://api.fixer.io/latest?base=${from}`)
    const rate = response.data.rates[to]
    if(rate){
      return rate
    } else {
      throw new Error()
    }
  } catch(e){
    throw new Error(`Unable to get exchange rate for ${from} and ${to}`)
  }
}

const getCountries = async currencyCode => {
  
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    return response.data.map(country => country.name)
  } catch(e){
    throw new Error(`Unable to get countries that use ${currencyCode}`)
  }
}


const convertCurrency = (from, to, amount) => {
  let countries;
  return getCountries(to).then(tempCountries => {
    countries = tempCountries
    return getExchangeRate(from, to)
  }).then(rate => {
    
    const exchangeAamount = amount * rate
    
    return `$${amount} ${from} is worth $${exchangeAamount.toFixed(2)} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`
  })
}

const covertCurrencyAwait = async (from, to, amount) => {
  
  const rate = await getExchangeRate(from, to).then(rate => rate)
  const countries = await getCountries(to)
  
  const exchangeAamount = amount * rate
    
  return `$${amount} ${from} is worth $${exchangeAamount.toFixed(2)} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`
}

covertCurrencyAwait('USD', 'EUR', 100).then(status => console.log(status))
.catch(e => console.log(e.message))

/*getExchangeRate('USD', 'CAD').then(rate => {
  console.log(rate)
})

getCountries('CAD').then(countries => console.log(countries))*/

