import React, { useState } from 'react'
import Catalog from './components/Catalog'
import { Routes, Route, useLocation } from 'react-router-dom'
import ListOfCoins from './components/ListOfCoins'
import Navigator from './components/Navigator'
import Description from './components/Description'
import AdvancedFilter from './components/AdvancedFilter'

function App() {
    const location = useLocation()


    return (
        <>
            <div className="container">
                {!location.pathname.includes('description') ? <Navigator /> : null}
                <div className="main">
                    <Routes>
                        <Route path='/' element={<Catalog />} />
                        <Route path='listOfCoins' element={<ListOfCoins />} />
                        <Route path='description/:id' element={<Description />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App