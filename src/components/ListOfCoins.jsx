import React, { useEffect } from 'react'
import coinStore from '../zustand/coin-store'
import { Link } from 'react-router-dom'

function ListOfCoins() {

    const { coins, fetchCoins } = coinStore()

    return (
        <div className="list-of-coins">
            {coins.length ? coins.map(coin => (
                <Link to={`../description/${coin.id}`} className='coin-card__link' key={coin.id}>
                    <div className="coin-card">
                        <img src={`https://coin-app-server-api.vercel.app/src/img/${coin.obverse_image}.png`} alt="img" className="coin-card__img" />
                        <div className="coin-card__typography">
                            <h4 className="coin-card__title">{coin.name}</h4>
                            <p className="coin-card__info">{coin.short_desc}</p>
                        </div>
                    </div>
                </Link>
            )) : null}
        </div>
    )
}

export default ListOfCoins