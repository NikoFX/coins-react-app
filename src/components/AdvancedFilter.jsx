import React, { useEffect, useState } from 'react'
import coinStore from '../zustand/coin-store'

function AdvancedFilter({ coins, formState, setFormState }) {

  //Option state
  const [options, setOptions] = useState({
    country: [],
    metal: [],
    quality: [],
    type: []
  })

  const formHandle = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  useEffect(() => {

    //Set options state
    const newObj = { ...options }
    coins.forEach(coin => {
      options.country.find(o => o === coin.country) ? null : newObj.country.push(coin.country)
      options.metal.find(o => o === coin.metal) ? null : newObj.metal.push(coin.metal)
      options.quality.find(o => o === coin.quality) ? null : newObj.quality.push(coin.quality)
      options.type.find(o => o === coin.type) ? null : newObj.type.push(coin.type)
    })
    setOptions(newObj)

  }, [])

  return (
    <div className="filter-container">
      <form className="adv-filter__form">
        <div className="adv-filter__left">
          <label htmlFor="country" className='input-title'>Issuing country</label>
          <select name="country" id="" value={formState.country} onChange={formHandle}>
            <option value="" hidden>country</option>
            {options.country.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <label htmlFor="metal" className='input-title'>Metal</label>
          <select name="metal" id="" value={formState.metal} onChange={formHandle}>
            <option value="" hidden>metal</option>
            {options.metal.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <label htmlFor="quality" className='input-title'>Quality of the coin</label>
          <select name="quality" id="" value={formState.quality} onChange={formHandle}>
            <option value="" hidden>quality</option>
            {options.quality.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="adv-filter__right">
          <label htmlFor="type" className='input-title'>Type of coin</label>
          <select name="type" id="" value={formState.type} onChange={formHandle}>
            <option value="" hidden>type</option>
            {options.type.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <span className='input-title'>Price</span>
          <div className="input-row">
            <label htmlFor="priceFrom">from</label>
            <input type="number" name="priceFrom" id="" onChange={formHandle} />
            <label htmlFor="priceTo">to</label>
            <input type="number" name="priceTo" id="" onChange={formHandle} />
          </div>
          <span className='input-title'>Year of issue</span>
          <div className="input-row">
            <label htmlFor="yearFrom">from</label>
            <input type="number" name="yearFrom" id="" onChange={formHandle} />
            <label htmlFor="yearTo">to</label>
            <input type="number" name="yearTo" id="" onChange={formHandle} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdvancedFilter