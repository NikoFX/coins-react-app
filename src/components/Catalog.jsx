import React from 'react'

function Catalog() {
    return (
        <div className="coin-catalog">
            <div className="c-coin-card">
                <div className="c-coin-card__info">
                    <h3 className="c-coin-card__title">Bullion coins</h3>
                    <button id='c-coin-card__btn'>Show all</button>
                </div>
                <img src="https://coin-app-server-api.vercel.app/src/img/South Vietnamese Dong_1.png" alt="" className="c-coin-card__img" />
            </div>
            <div className="c-coin-card">
                <div className="c-coin-card__info">
                    <h3 className="c-coin-card__title">Bullion coins</h3>
                    <button id='c-coin-card__btn'>Show all</button>
                </div>
                <img src="https://coin-app-server-api.vercel.app/src/img/coin.png" alt="" className="c-coin-card__img" />
            </div>
            <div className="c-coin-card">
                <div className="c-coin-card__info">
                    <h3 className="c-coin-card__title">Bullion coins</h3>
                    <button id='c-coin-card__btn'>Show all</button>
                </div>
                <img src="https://coin-app-server-api.vercel.app/src/img/Looney_2.png" alt="" className="c-coin-card__img" />
            </div>
        </div>
    )
}

export default Catalog