import React, { useState } from 'react'
import coinStore from '../zustand/coin-store'
import AdvancedFilter from './AdvancedFilter'
import { useNavigate } from 'react-router-dom'

function Navigator() {

    //Controlled form
    const [formState, setFormState] = useState({
        country: '',
        metal: '',
        quality: '',
        type: '',
        priceFrom: '',
        priceTo: '',
        yearFrom: '',
        yearTo: ''
    })

    const { coins, fetchCoins } = coinStore()
    const [advFilter, setAdvFilter] = useState(false)
    const navigate = useNavigate()

    const filterBtn = () => {
        setAdvFilter(!advFilter)
    }

    const searchHandle = (e) => {
        e.preventDefault()
        fetchCoins(e.target.input.value, formState)
        navigate('listofcoins')
    }

    useState(() => {
        fetchCoins('',formState)
    }, [])

    return (
        <nav>
            <h1 className="nav__title">
                Homepage
            </h1>
            <div className="nav__input-box">
                <form className='nav__form' onSubmit={searchHandle}>
                    <input name='input' className='nav__form-input' type="text" />
                    <button type="submit" className='btn primary'>Search</button>
                </form>
                <button id='nav__adv-filter' onClick={filterBtn}>Advanced filter</button>
            </div>
            {advFilter ? <AdvancedFilter coins={coins} formState={formState} setFormState={setFormState} /> : null}
        </nav>
    )
}

export default Navigator