import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../description.css'

function Description() {

  //State
  const [coin,setCoin] = useState({})
  const { id } = useParams()

  useEffect(()=>{
    fetch(`https://coin-app-server-api.vercel.app/api/description/${id}`)
    .then(res=>res.json())
    .then(data=>setCoin(data))
  },[])

  console.log(coin);

  return (
    <div className="desc-container">
      <div className="description">
        <div className="description__left">
          <img src={`https://coin-app-server-api.vercel.app/src/img/${coin.obverse_image}.png`} alt="img" className="description__img" />
          <img src={`https://coin-app-server-api.vercel.app/src/img/${coin.reverse_image}.png`} alt="img" className="description__img" />
        </div>
        <div className="description__right">
          <h1 className="description__title">{coin.name}</h1>
          <p className="description__p">
            {coin.short_desc}
            <br /><br />
            {coin.long_desc}
            <br /><br />
           
          </p>
          <table className="description__table">
            <tbody>
              <tr>
                <td>Issuin country</td>
                <td>{coin.country}</td>
              </tr>
              <tr>
                <td>Metal</td>
                <td>{coin.metal}</td>
              </tr>
              <tr>
                <td>Qualityn</td>
                <td>{coin.quality}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{coin.price} Dollars</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{coin.weight} mg</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{coin.year}</td>
              </tr>
              <tr>
                <td>Denomination</td>
                <td>{coin.denomination}</td>
              </tr>
            </tbody>
          </table>
          <Link to='/listofcoins'>Back to the list</Link>
        </div>
      </div>
    </div>
  )
}

export default Description